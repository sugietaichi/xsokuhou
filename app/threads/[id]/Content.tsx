import { Blockquote } from "@/app/components/elements/blockquote/Blockquote"
import { ImageFromFirestorage } from "@/app/components/elements/image/ImageFromFirestorage"
import { Tag } from "@/app/components/elements/tag/Tag"
import { EmbeddedTweet } from "@/app/components/elements/tweet/EmbeddedTweet"
import { EmbeddedYoutube } from "@/app/components/elements/youtube/EmbeddedYoutube"

export const Content = async ({
    id,
    description,
    tags,
    title,
    image,
    content,
    createdAtStr
}: thread.Data) => {
    return (
        <div className="p-1 border border-b space-y-2">
            <p>1:<span className="font-bold text-green-700"> 名無しさん</span>{createdAtStr}</p>
            <p className="text-xl font-bold">{title}</p>
            {tags.map((t, i) => <Tag text={t} key={i} />)}
            <ImageFromFirestorage
                filePath={image}
                width={450}
                height={300}
            />
            {content?.map((c: any, i: number) => {
                switch (c.type) {
                    case 'text':
                        return <p key={i}>{c.section.text}</p>
                    case 'blockquote':
                        const { text, quoteSource, quoteUrl } = c.section
                        if (!(text && quoteSource && quoteUrl)) {
                            return
                        }
                        return (
                            <div className="p-4 rounded-lg bg-gray-200">
                                <Blockquote
                                    key={i}
                                    content={text}
                                    quoteSource={quoteSource}
                                    quoteUrl={quoteUrl} />
                            </div>
                        )
                    case 'embeddedTweet':
                        if (!c.section.id) {
                            return
                        }
                        return <EmbeddedTweet
                            key={i}
                            id={c.section.id} />
                    case 'embeddedYoutube':
                        if (!c.section.id) {
                            return
                        }
                        return <EmbeddedYoutube
                            key={i}
                            id={c.section.id} />
                    default:
                        return
                }
            })}
            <p className="text-xl">{description}</p>
        </div>
    )
}