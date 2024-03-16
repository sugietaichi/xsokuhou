import { Headline } from "../../elements/headline/Headline"
import * as threadApi from "@/app/lib/db/thread"
import { ImageFromFirestorage } from "../../elements/image/ImageFromFirestorage"
import Link from "next/link"

export const HeaderContent = async () => {
    const threads: thread.Data[] = await threadApi.server.getAll()
    return (
        <div>
            <div className="flex justify-center">
                <Headline icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                } text={'注目'} />
            </div>
            <div className="pt-2">
                <div className="flow-root">
                    <ul
                        role="list"
                        className="divide-y divide-gray-200 w-full">
                        {threads.map((t, i) => (
                            <Link
                                key={i}
                                href={`/threads/${t.id}`}
                            >
                                <li
                                    className="p-2 border "
                                >
                                    <div className="flex items-center">
                                        <div className="border">
                                            <ImageFromFirestorage
                                                filePath={t.image}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div className="flex-1 ms-4 pb-1 flex flex-col justify-end">
                                            <p className="text-sm font-medium text-gray-900 whitespace-norma py-2">
                                                {t.title}
                                            </p>
                                            <div className="flex justify-between text-sm text-gray-500 items-end py-2">
                                                <div className="flex items-center space-x-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                        <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>

                                                    <p className="">{t.createdAtStr}</p>
                                                </div>
                                                <div className="flex items-center space-x-1 mr-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                        <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                                    </svg>
                                                    <p className="">{t.commentCount}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
