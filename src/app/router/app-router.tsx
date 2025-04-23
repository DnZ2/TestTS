import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import RootLayout from "../layout/root-layout";

const AppRouter = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        Component: RootLayout,
        children: [
          {
            path: "/clothing",
            lazy: async () => {
              const module = await import("../../pages/clothing-page")
              return {Component: module.default};
            },
        },
        {
            path: "/electronics",
            lazy: async () => {
              const module = await import("../../pages/electronics-page")
              return {Component: module.default};
            },
        },
        {
            index: true,
            path: "/food",
            lazy: async () => {
              const module = await import("../../pages/food-page")
              return {Component: module.default};
            },
        },
        ]
      }
       
      ]);
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter

  

  
  