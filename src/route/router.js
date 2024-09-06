import { createBrowserRouter } from "react-router-dom";
import TodosPage from "../pages/todos";
import Layout from "./../layout/Layout";
import WritePage from "../pages/Write";
import EditPage from "../pages/Edit";
import { Result } from "antd";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TodosPage />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/edit",
        element: <EditPage />,
      },
    ],
    errorElement: (
      <Result status="404" title="404 : 유효하지 않은 페이지입니다." />
    ),
  },
]);

export default router;
