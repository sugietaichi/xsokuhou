import { db } from "@/app/lib/firebase/admin";

export async function getById({ threadId }: { threadId: string }) {
  const docRef = db.collection("threads").doc(threadId);
  const snap = await docRef.get();
  const doc = snap.data() as thread.FirestoreDocument;

  return { id: docRef.id, ...doc } as thread.Data;
}
