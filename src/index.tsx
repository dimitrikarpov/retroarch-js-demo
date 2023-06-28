import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/layout"
import { FromCollection } from "./components/from-collection/from-collection"
import { FromLocal } from "./components/from-local/from-local"

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <FromCollection />,
        },
        {
          path: "/local",
          element: <FromLocal />,
        },
      ],
    },
  ],
  // { basename: "/retroarch-js-demo" },
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)