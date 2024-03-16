export function firestoreTimestampToStr(timestamp: any) {
  const date = new Date(
    timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000
  );
  return date.toLocaleString();
}
