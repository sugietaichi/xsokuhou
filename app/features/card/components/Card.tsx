import { ImageFromFirestorage } from '@/app/components/elements/image/ImageFromFirestorage'
import { Tag } from '@/app/components/elements/tag/Tag'
import Link from 'next/link'

export const Card = ({
    id,
    image,
    title,
    description,
    createdAtStr,
    tags,
    commentCount,
}: {
    id: string,
    image: string,
    title: string,
    description: string,
    createdAtStr: string,
    tags: string[],
    commentCount: number,
}) => {
    return (
        <div className="border border-black rounded-lg overflow-hidden shadow-md flex flex-col">
            <div>
                <ImageFromFirestorage
                    filePath={image}
                    width={450}
                    height={300}
                />
            </div>
            <div className='space-y-1 px-2 pt-2'>
                <div className='text-left flex space-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className='text-sm text-gray-600'>{createdAtStr}</span>
                </div>
                {/* <div className='text-left flex space-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <span className='text-sm text-gray-600'>{commentCount}</span>
                </div> */}
            </div>

            <div className='flex px-2'>
                {tags.map((v) => (
                    <Tag key={v} text={v} />
                ))}
            </div>

            <div className="pt-2 px-4 space-y-2">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 text-sm text-left">{description}</p>
            </div>

            <Link href={`/threads/${id}`}>
                <div className='mx-6 my-8 mb-4'>
                    <button
                        className="w-full flex items-center justify-center p-2 transform  border-black rounded  text-black transition-transform duration-200 hover:scale-95 hover:bg-gray-200 border border-b"
                    >
                        <div className="flex items-center">
                            続きを見る
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </button>
                </div>
            </Link>
        </div>
    )
}