import { Content } from "@/app/threads/[id]/Content"
import { Comment } from "./Comment"

export const CommentList = ({
    thread,
    comments,
}: {
    thread: thread.Data,
    comments: comment.Data[],
}) => {
    return (
        <div>
            <Content
                {...thread}
            />
            <div className="space-y-2">
                {comments?.map((c, i) => (
                    <Comment
                        key={i}
                        {...c}
                    />
                ))}
            </div>
        </div>
    )
}