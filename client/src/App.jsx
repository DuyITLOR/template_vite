import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepages from "./pages/Homepages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepages/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router = {router}/>
}

export default App