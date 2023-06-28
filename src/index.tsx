import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { FromCollection } from "./components/from-collection/from-collection"
import { FromLocal } from "./components/from-local/from-local"
import { Layout } from "./components/layout"
import "./index.css"

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
  { basename: process.env.PUBLIC_URL },
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
