import * as threadApi from "@/app/lib/db/thread"
import * as commentApi from "@/app/lib/db/comment"
import { Thread } from "@/app/features/thread/Thread"

export default async function ThreadPage({ params }: { params: { id: string } }) {
    const thread: thread.Data = await threadApi.server.getById({ threadId: params.id })
    const comments: comment.Data[] = await commentApi.server.getAllByThread({ threadId: params.id })

    console.log(thread.createdAtStr)

    return (
        <div>
            {thread ? (
                <Thread
                    thread={thread}
                    comments={comments}
                />
            ) : (
                <div>スレッドが存在しません</div>
            )}
        </div>
    )
}

