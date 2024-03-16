"use client"
import { Tweet } from "react-twitter-widgets"

export const EmbeddedTweet = ({ id }: { id: string }) => {
    return (<Tweet tweetId={id} />)
}