'use client'

import { useToggle } from 'react-use'
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation'
export const Header = ({
    title,
    contents
}: {
    title: string
    contents: ReactNode
}) => {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, changeOpen] = useToggle(false);

    useEffect(() => {
        changeOpen(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <header className='z-50 flex flex-col py-2 w-full text-center px-3  max-w-md'>
            <div className='flex justify-between items-center'>
                <div
                    className='z-50 border-b-2 cursor-pointer flex items-center justify-center'
                    onClick={() => router.push("/")}
                >
                    <p className='text-2xl'>{title}</p>
                </div>

                <div
                    className={`${isOpen ? 'z-30 bg-white h-screen fixed inset-0 flex flex-col max-w-md mx-auto' : 'fixed right-[-1000%]'}
                        overflow-y-auto`}
                >
                    <div
                        className={
                            isOpen
                                ? 'flex justify-center items-center flex-col gap-6 text-xl'
                                : 'block'
                        }
                    >
                        <div className='pt-16'>
                            {contents}
                        </div>
                    </div>
                </div>

                <div className='flex items-center h-full'>
                    <div className='flex items-center h-full mx-2'>
                        <button
                            className='z-50 space-y-2'
                            onClick={changeOpen}
                        >
                            <span
                                className={
                                    isOpen
                                        ? `block w-8 h-0.5 bg-black translate-y-2.5 rotate-45 duration-300`
                                        : `block w-8 h-0.5 bg-black duration-300`
                                }
                            />
                            <span
                                className={
                                    isOpen
                                        ? `block opacity-0 duration-300`
                                        : `block w-8 h-0.5 bg-black duration-300`
                                }
                            />
                            <span
                                className={
                                    isOpen
                                        ? `block w-8 h-0.5 bg-black -rotate-45 duration-300`
                                        : `block w-8 h-0.5 bg-black duration-300`
                                }
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header >
    );
};
