import { Route, Routes } from "react-router-dom";
import { DeafaultLayout } from "../layouts/DefaultLayout";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DeafaultLayout />}/>
                {/* <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/> */}
            <Route />
        </Routes>
    )
}