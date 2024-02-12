
import {useState} from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Wallet from './pages/Wallet'
import CreateTask from './pages/CreateTask'
import DeleteTask from './pages/DeleteTask'
import UpdateTask from './pages/UpdateTask'
import ViewAllTask from './pages/ViewAllTask'
import ViewTask from './pages/ViewTask'

import './App.css'

function App() {
  const [state, setState] =useState({web3:null,contract:null,account:null})
  const saveState =({web3,contract,account})=>{
    setState({web3,contract,account})
  }


  const router= createBrowserRouter([
    {path:'/',element:<Wallet saveState={saveState}/>},
    {path:'/view-all-task',element:<ViewAllTask/>},
    {path:'/view-task',element:<ViewTask/>},
    {path:'/update-task',element:<UpdateTask state={state}/>},
    {path:'/delete-task',element:<DeleteTask state={state}/>},
    {path:'/create-task',element:<CreateTask state={state}/>},

  ])

 


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
