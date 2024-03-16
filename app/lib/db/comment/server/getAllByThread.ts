import { db } from "@/app/lib/firebase/admin";
import * as util from "@/app/lib/util";
import { threadId } from "worker_threads";

export async function getAllByThread({
  threadId,
}: {
  threadId: string;
}): Promise<comment.Data[]> {
  const ref = db.collection("threads").doc(threadId).collection("comments");
  const querySnapshot = await ref.orderBy("createdAt", "asc").get();

  const result: comment.Data[] = [];

  for (const doc of querySnapshot.docs) {
    const data = doc.data() as comment.FirestoreDocument;
    const dateStr = util.conv.firestoreTimestampToStr(data.createdAt);
    result.push({
      id: doc.id,
      createdAtStr: dateStr,
      ...data,
    } as comment.Data);
  }
  return result;
}
