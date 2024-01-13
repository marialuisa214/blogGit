import React from "react"
import ReactMarkdown from "react-markdown"
import { ContentPost } from "./styles"

interface BodyPost {
    body: string
}

export function ContentPostInfo({body}: BodyPost) {
    
    return(
        <ContentPost>
            <ReactMarkdown>{body}</ReactMarkdown>
        </ContentPost>
    )
}