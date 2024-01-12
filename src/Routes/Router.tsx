import { Route, Routes } from "react-router-dom";
import { DeafaultLayout } from "../layouts/DefaultLayout";
import { Feed } from "../pages/Feed";
import { Post } from "../pages/Post";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DeafaultLayout />}>
                <Route path="/" element={<Feed/>}/>
                <Route path="/post/:id" element={<Post/>}/>
            </Route>
        </Routes>
    )
}