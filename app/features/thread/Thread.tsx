
import { Content } from "@/app/threads/[id]/Content"
import { CommentList } from "../comment/components/CommentList"
import { CommentForm } from "../form/components/CommentForm"


export const Thread = async ({
    comments,
    thread,
}: {
    comments: comment.Data[],
    thread: thread.Data
}) => {

    return (
        <div className="p-1 border border-b space-y-2">
            <CommentList
                thread={thread}
                comments={comments}
            />
            <CommentForm
                threadId={thread.id}
            />
        </div>
    )
}