import { useToggle } from "react-use"

export const AffiliateModal = ({
    pending,
    isShow,
    changeShow
}: {
    isShow: boolean
    changeShow: any
    pending: boolean
    username?: string
    comment?: string
}) => {

    return (
        <div className={`${isShow ? "" : "hidden"}`}>
            <div className="h-screen fixed inset-0 flex flex-col max-w-md mx-auto">
                <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden w-full max-h-full h-full">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow ">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                <h3 className="text-xl font-semibold text-gray-900 ">
                                    PR(広告)
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                    data-modal-hide="static-modal"
                                    onClick={() => changeShow(false)}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <a href="https://www.infotop.jp/click.php?aid=420670&iid=100059" >
                                    <div className="m-2 border-1" >
                                        <div rel="sponsored">
                                            <p className="text-center font-bold">意識書き換えダイエット【再販権付・マスターリセールライト】</p>
                                        </div>
                                        <div rel="sponsored"><img src="https://www.infotop.jp/img/banner1_100059.png" /></div>
                                    </div>
                                </a>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                                {pending ? (
                                    <button
                                        data-modal-hide="static-modal"
                                        type="button"
                                        onClick={() => changeShow(false)}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center">
                                        <span className="mr-2">送信中です...</span>
                                        <div role="status">
                                            <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                        </div>
                                    </button>
                                ) : (
                                    <button
                                        data-modal-hide="static-modal"
                                        type="button"
                                        onClick={() => changeShow(false)}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                        戻る
                                    </button>
                                )}

                                <a href="https://www.infotop.jp/click.php?aid=420670&iid=100059" >
                                    <button
                                        data-modal-hide="static-modal"
                                        type="button"
                                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                        内容を見る
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
