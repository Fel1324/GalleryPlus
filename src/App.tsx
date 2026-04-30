import { BrowserRouter, Route, Routes } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Components } from "./pages/components"
import { LayoutMain } from "./pages/layout-main"
import { Home } from "./pages/home"
import { PhotoDetails } from "./pages/photo-details"
import { NuqsAdapter } from "nuqs/adapters/react-router/v7"
import { Toaster } from "sonner"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <Toaster position="bottom-center" />
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route index element={<Home />} />
              <Route path="/fotos/:id" element={<PhotoDetails />} />
              <Route path="/componentes" element={<Components />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  )
}