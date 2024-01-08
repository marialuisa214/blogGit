import { Route, Routes } from "react-router-dom";
import { DeafaultLayout } from "../layouts/DefaultLayout";
import { Post } from "../pages/Post";
import { Feed } from "../pages/Feed";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DeafaultLayout />}>
                <Route path="/" element={<Feed/>}/>
                <Route path="/post" element={<Post/>}/>
            </Route>
        </Routes>
    )
}