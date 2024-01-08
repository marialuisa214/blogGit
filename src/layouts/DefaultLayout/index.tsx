import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DeafaultLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}