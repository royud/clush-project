import { ConfigProvider } from "antd";
import "./App.css";

import router from "./route/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#346ce5",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
