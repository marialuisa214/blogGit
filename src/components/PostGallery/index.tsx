
import { PostContent, PostGalleryContainer, PostInfoBasic } from "./styles";
import { PostContext } from "../../contexts/PostContext";
import { useContext } from "react";


interface PostInfo {
    title: string,
    body: string,
    created_at: string,
    comments: number,
    html_url: string
    
}

export function PostGallery() {
    const {posts} = useContext(PostContext)
    return (
        <PostGalleryContainer>

            {posts.map((post: PostInfo) => {
                return(
                    <PostContent>
                        <PostInfoBasic>
                            <strong>{post.title}</strong>
                            <span>{post.created_at}</span>
                        </PostInfoBasic>
            
                        <p>{post.body}</p>
                    </PostContent>
                )
            })}
        </PostGalleryContainer>
    )
}