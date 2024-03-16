import { addThreadAction } from "../lib/actions/addThreadActions";

export default function Page() {
    return (
        <div>
            <a href="https://www.infotop.jp/click.php?aid=420670&iid=100059" rel="sponsored">意識書き換えダイエット【再販権付・マスターリセールライト】</a>
            <a href="https://www.infotop.jp/click.php?aid=420670&iid=100059" rel="sponsored"><img src="https://www.infotop.jp/img/banner1_100059.png" /></a>
            <form action={addThreadAction}>
                <button type="submit">onSubmit</button>
            </form>
        </div>
    )
}