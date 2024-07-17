import React from 'react'
import Layout from '../pages/Layout'
import Topparticipant from '../pages/Topparticipant'
import Queen from '../pages/Queen'
import King from '../pages/King'

import Category from '../pages/Category'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:"/",
            element: <Category/>,
        }, {
            path:"/King",
            element: <King/>,
        },
        {
            path:"/Queen",
            element: <Queen/>,
        },
        {
          path:"/Top",
          element: <Topparticipant/>,
      }
      ]
    }
  ]);
export default router;