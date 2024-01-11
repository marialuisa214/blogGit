import { useEffect, useState } from "react";
import { PostContext, PostGalleryContainer, PostInfoBasic } from "./styles";


interface PostInfo {
    title: string,
    body: string,
    created_at: string,
    comments: number,
    html_url: string
    
}

export function PostGallery() {
    const [posts, setPosts] = useState<PostInfo[]>([])

    async function loadPosts() {
        const response = await fetch('https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge')
        const data = await response.json()

        const allPosts = await data.items.map((post: PostInfo) => {
            return {
                title: post.title,
                body: post.body,
                created_at: post.created_at,
                comments: post.comments,
                html_url: post.html_url
            }
        })
        setPosts(allPosts)
    }

    useEffect(() => {
        loadPosts()
    })

    return (
        <PostGalleryContainer>

            {posts.map((post: PostInfo) => {
                return(
                    <PostContext>
                        <PostInfoBasic>
                            <strong>{post.title}</strong>
                            <span>{post.created_at}</span>
                        </PostInfoBasic>
            
                        <p>{post.body}</p>
                    </PostContext>
                )
            })}
        </PostGalleryContainer>
    )
}