declare namespace thread {
  import firebase from "firebase/compat/app";
  // Firebaseのドキュメント通りの型
  type FirestoreDocument = {
    description: string;
    tags: string[];
    title: string;
    image: string;
    content: any;
    createdAt: firebase.firestore.Timestamp;
  };

  /* 
    実際にアプリで使う型 
    自身のidと文字列に変換された投稿時間を追加
    */
  type Data = {
    id: string;
    createdAtStr: string;
    commentCount: number;
  } & FirestoreDocument;
}
