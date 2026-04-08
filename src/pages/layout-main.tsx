import { Outlet } from "react-router";
import { MainHeader } from "../components/main-header";
import { MainContent } from "../components/main-content";

export function LayoutMain() {
  return (
    <>
      <MainHeader className="mt-9 max-md:gap-5"/>
      
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  )
}
