import { db } from "@/app/lib/firebase/admin";
import * as util from "@/app/lib/util";

export async function getAll() {
  const threadsRef = db.collection("threads");
  const querySnapshot = await threadsRef.get();

  const docs: thread.Data[] = await Promise.all(
    querySnapshot.docs.map(async (threadDoc) => {
      const data = threadDoc.data() as thread.FirestoreDocument;
      const dateStr = util.conv.firestoreTimestampToStr(data.createdAt);
      // console.table(dateStr);

      //サブコレクションのcommentsをカウントする
      // const snapshot = await threadDoc.ref.collection("comments").count().get();
      // const commentCount = snapshot.data().count;

      //ドキュメントIDを追加して返却
      return {
        id: threadDoc.id,
        createdAtStr: dateStr,
        // commentCount: commentCount,
        ...data,
      } as thread.Data;
    })
  );

  return docs;
}
