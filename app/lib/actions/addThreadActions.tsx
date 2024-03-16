"use server"

import { db } from "../firebase/admin"

const addDataSample = {
    title: "【令和の虎】バン仲村「本当に死んだんじゃねぇだろ」事実「死んでました」バン「亡くなってるんならいいや」←これwww",
    description: `バン中村、出演者の「身内の不幸」を信じず胸ぐらを掴み恫喝してしまう`,
    tags: ["令和の虎", "バン中村"],
    createdAt: new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000)),
    content: [
        {
            type: "text",
            section: {
                text: "これはひどい"
            }
        },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1758075244244562160",
        //     },
        // },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1758540840874778691",
        //     },
        // },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1758701320163426800",
        //     },
        // },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1758765501877273038",
        //     },
        // },
        // {
        //     type: "blockquote",
        //     section: {
        //         text: "通信の秘密は守られなければならない。被害者には誠意ある対応をしなければならない。声なき声に力を。新しい時代を。愛なき時代に愛を。",
        //         quoteSource: "唐澤貴洋Wiki",
        //         quoteUrl: "https://krsw-wiki.org/wiki/%E5%94%90%E6%BE%A4%E8%B2%B4%E6%B4%8B%E3%81%AE%E7%99%BA%E8%A8%80%E4%B8%80%E8%A6%A7",
        //     },
        // },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1740370035070414987",
        //     },
        // },
        // {
        //     type: "blockquote",
        //     section: {
        //         text: "【画像流出】松本人志の性加害疑惑を告発した女性「本当に素敵で…」「最後までとても優しくて」会合終わりにスピードワゴン小沢に送っていた“お礼メッセージ",
        //         quoteSource: "週刊女性PRIME",
        //         quoteUrl:
        //             "https://www.sankei.com/article/20240110-YMSLGXMAK5IKPBZQMHVWQSXOMA/",
        //     },
        // },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1743125444420137073",
        //     },
        // },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1744305176968892880",
        //     },
        // },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1744614735499472998",
        //     },
        // },

        // {
        //     type: "embeddedYoutube",
        //     section: {
        //         id: "cWx3kerRGpA",
        //     },
        // },

        // {
        //     type: "blockquote",
        //     section: {
        //         text: "政治資金 不記載収入の税務上の扱い“党の対応見守る” 財務相",
        //         quoteSource: "シェアニュースジャパン",
        //         quoteUrl:
        //             "https://sn-jp.com/archives/155030#goog_rewarded",
        //     },
        // },
        // {
        //     type: "embeddedTweet",
        //     section: {
        //         id: "1758339285038862827",
        //     },
        // },

    ],
}

export async function addThreadAction(formData: FormData) {
    try {
        const ref = db.collection("threads")
        await ref.add({
            image: ref.id + ".jpeg",
            ...addDataSample
        })
    } catch (error) {
        console.log(error)
    }
}
