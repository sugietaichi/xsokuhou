"use client"

import { db } from "@/app/lib/firebase/client"
import { useEffect, useState } from "react"
import { query, collection, where, onSnapshot, orderBy } from "firebase/firestore"


export const useComments = ({ threadId }: { threadId: string }) => {
  const [comments, setComments] = useState<comment.Data[]>([])

  useEffect(() => {
    const q = query(collection(db, "threads", threadId, "comments"),
      orderBy("createdAt", "asc"))

    /* 
    リスナー立て続けると無料枠一瞬で溶ける
    リロードの度に全件取得されたら敵わん
    */
    return () => {
      onSnapshot(q, (snapshot) => {
        const updatedComments: comment.Data[] = [];
        snapshot.docChanges().forEach((change) => {
          const changedDoc = change.doc
          const changedDocData
            = changedDoc.data() as comment.FirestoreDocument

          if (change.type === "added") {
            const newCommentData = {
              id: changedDoc.id,
              createdAtStr: changedDocData.createdAt.toDate().toLocaleString(),
              ...changedDocData,
            } as comment.Data

            updatedComments.push(newCommentData);
          }
        })

        setComments((prevComments) => [...prevComments, ...updatedComments,]);
      })
    }
  }, [threadId])

  return { comments }
}