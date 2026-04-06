import { BrowserRouter, Route, Routes } from "react-router"
import Components from "./pages/components"
import { LayoutMain } from "./pages/layout-main"
import { Home } from "./pages/home"
import { PhotoDetails } from "./pages/photo-details"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/fotos/:id" element={<PhotoDetails />} />
          <Route path="/componentes" element={<Components />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}