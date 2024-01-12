import { createContext, useEffect, useState } from "react"


interface PostInfo {
    title: string,
    body: string,
    created_at: string,
    comments: number,
    html_url: string
    
}

interface DataPost {
    allPosts: PostInfo[],
    totalCount: number;
}

interface PostsContextType {
    dataPost: DataPost
    fechPost: (query?:string) => (Promise<void> )// função assicrona(Promise) sem nenhum retorno
    // createTransaction: (data: TransactionInputForm) => Promise<void>
}
  
interface TransactionsProviderProps {
    children: React.ReactNode
}


export const PostContext = createContext({} as PostsContextType)

export function PostProvider({children}: TransactionsProviderProps){

    const [posts, setPosts] = useState<DataPost>({allPosts: [], totalCount: 0})

    async function loadPosts(query?:string | undefined) {
        
        if(query){
            const response = await fetch(`https://api.github.com/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`)

            const data = await response.json()
            const dataPost = {
                allPosts: data.items.map((post: PostInfo) => {
                    return {
                        title: post.title,
                        body: post.body,
                        created_at: post.created_at,
                        comments: post.comments,
                        html_url: post.html_url
                    };
                }),
                totalCount: data.total_count
            }
            setPosts(dataPost)
        }
        else{
            const response = await fetch('https://api.github.com/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge')

        const data = await response.json()
        const dataPost = {
            allPosts: data.items.map((post: PostInfo) => {
                return {
                    title: post.title,
                    body: post.body,
                    created_at: post.created_at,
                    comments: post.comments,
                    html_url: post.html_url
                };
            }),
            totalCount: data.total_count
        }
        setPosts(dataPost)


        }

        
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <PostContext.Provider 
            value={{
                dataPost: posts,
                fechPost: loadPosts
                }}
        >
            {children}           
        </PostContext.Provider>
    )
}