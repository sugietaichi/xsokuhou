"use client"

import { AffiliateModal } from "@/app/components/elements/modal/AffiliateModal";
import { addCommentAction } from "@/app/lib/actions/addCommentActions";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useToggle } from "react-use";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <div>
            {/* <AffiliateModal
                isShow={isShow}
                changeShow={changeShow}
                pending={pending}
                username={data?.get("username") as string}
                comment={data?.get("comment") as string}
            /> */}

            <div>
                {pending ? (
                    <button
                        type="submit"
                        disabled
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg"
                    >
                        <div role="status">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button >
                )}
            </div >
        </div>
    )
}

export const CommentForm = ({
    threadId,
    parentCommentId = ""
}: {
    threadId: string
    parentCommentId?: string
}) => {
    const addCommentActionBinded = addCommentAction.bind(
        null,
        threadId,
        parentCommentId,
    )

    const [state, dispatch] = useFormState(addCommentActionBinded, { errors: {} })
    const [text, setText] = useState<string>("")



    return (
        <div>
            <form action={async (formData: FormData) => {
                setText("")
                dispatch(formData)
            }}>
                <div className="w-full border border-gray-500 rounded-lg bg-gray-50">
                    <div>
                        <textarea
                            name="comment"
                            rows={8}
                            className="w-full rounded-lg text-sm p-2 text-gray-900 bg-white focus:outline-none"
                            placeholder="コメント"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                    </div>
                    <div className="flex items-center px-3 py-2 bg-gray-200 rounded-b-lg border-t border-gray-500">
                        <input
                            type="text"
                            name="username"
                            defaultValue={"名無しさん"}
                            className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2"
                            placeholder="ユーザーネーム"
                        />
                        <div className="flex space-x-2">
                            {/* <button
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                </svg>
                            </button> */}
                            <SubmitButton />
                        </div>
                    </div>
                </div >
                <div className="px-4">
                    {state?.errors?.comment &&
                        state.errors.comment.map((error) => (
                            <div
                                key={error}
                                className="text-red-600 text-sm"
                                aria-live="polite"
                            >
                                {error}
                            </div>
                        ))}

                    {state?.errors?.username &&
                        state.errors.username.map((error) => (
                            <div
                                key={error}
                                className="text-red-600 text-sm"
                                aria-live="polite"
                            >
                                {error}
                            </div>
                        ))}
                </div>
            </form >
        </div >
    )
}
