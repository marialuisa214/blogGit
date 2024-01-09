import { PostContext, PostGalleryContainer, PostInfoBasic } from "./styles";

export function PostGallery() {

    const array = [1,2,3,4,5,6,7,8,9,10]
    return (
        <PostGalleryContainer>

            {array.map(() => {
                return(
                    <PostContext>
                        <PostInfoBasic>
                            <strong>Post</strong>
                            <span>time</span>
                        </PostInfoBasic>
            
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero impedit quas excepturi optio, illum similique dignissimos ratione molestiae alias debitis exercitationem commodi iure ipsum atque asperiores perspiciatis laboriosam? Similique.</p>
                    </PostContext>
                )
            })}
        </PostGalleryContainer>
    )
}