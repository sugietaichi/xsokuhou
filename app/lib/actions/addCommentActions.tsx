"use server";

import { z } from "zod";
import { db } from "../firebase/admin";
import { redirect } from "next/navigation";

const UserSchema = z.object({
    username: z
        .string({
            invalid_type_error: "ユーザー名が不正です。",
        })
        .max(20, { message: "ユーザー名が長すぎます。" })
        .refine(value => value.trim() !== "", {
            message: "ユーザー名を入力してください。",
            path: ["username"]
        }),
    comment: z
        .string({
            invalid_type_error: "内容に不正なデータが含まれています。",
        })
        .max(2000, { message: "内容が長すぎます。" })
        .refine(value => value.trim() !== "", {
            message: "内容を入力してください。",
            path: ["comment"]
        }),
});

type State = {
    errors?: {
        username?: string[];
        comment?: string[];
    };
};

export const addCommentAction = async (
    threadId: string,
    parentCommentId: string,
    _state: State | undefined,
    formData: FormData | undefined,
): Promise<State | undefined> => {
    if (!formData) {
        return
    }

    const validatedFields = UserSchema.safeParse({
        username: formData.get("username"),
        comment: formData.get("comment"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { username, comment } = validatedFields.data

    try {
        const ref = db
            .collection("threads")
            .doc(threadId)
            .collection("comments")

        await ref.add({
            threadId,
            username,
            comment,
            createdAt: new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000))
        } as comment.FirestoreDocument)
    } catch (error) {
        console.log(error)
    }

    redirect(`/threads/${threadId}`)
}
