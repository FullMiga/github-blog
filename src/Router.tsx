import { Route, Routes } from "react-router";

import { Blog } from "./pages/blog";
import { Post } from "./pages/post";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {

  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blog />}/>
          <Route path="/post/:postNumber" element={<Post />} />
        </Route>
    </Routes>
  )
}