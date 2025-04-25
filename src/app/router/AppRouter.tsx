import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import RootLayout from "../layout/RootLayout";

const AppRouter = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        Component: RootLayout,
        children: [
          {
            path: "/clothing",
            lazy: async () => {
              const module = await import("../../pages/clothing/ui/Page")
              return {Component: module.default};
            },
        },
        {
          path: "/food",
          lazy: async () => {
            const module = await import("../../pages/food/ui/Page")
            return {Component: module.default};
          },
      },
      {
        path: "/electronics",
        lazy: async () => {
          const module = await import("../../pages/electronics/ui/Page")
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

  

  
  