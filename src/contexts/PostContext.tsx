import { createContext, useEffect, useState } from "react"

interface PostInfo {
    title: string,
    body: string,
    created_at: string,
    comments: number,
    html_url: string
    
}


interface PostsContextType {
    posts: PostInfo[]
    // fechPost: () => (Promise<void> )// função assicrona(Promise) sem nenhum retorno
    // createTransaction: (data: TransactionInputForm) => Promise<void>
}
  
interface TransactionsProviderProps {
    children: React.ReactNode
}


export const PostContext = createContext({} as PostsContextType)

export function PostProvider({children}: TransactionsProviderProps){

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
    }, [])

    return (
        <PostContext.Provider 
            value={{
                posts
                }}
        >
            {children}           
        </PostContext.Provider>
    )
}