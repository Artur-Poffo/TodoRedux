import React, { useState } from 'react'
import './App.css'
import Topbar from "./components/Topbar/Topbar"
import List from './components/List/List'
import Modal from './components/Modal/Modal'

import { createStore } from "redux"
import { Provider } from 'react-redux'

import TodoReducer from './reducers/TodoReducer'

import { persistentState, loadState } from './LocalStorage/storage'

const store = createStore(TodoReducer, loadState())

store.subscribe(() => {
  persistentState(store.getState())
})

function App() {
  const [show, setShow] = useState(false)

  return (
    <main>
      <Provider store={store} >
        <Modal showModal={show} setShow={setShow} ></Modal>

        <Topbar setShowModal={setShow} ></Topbar>
        <List></List>
      </Provider>
    </main>
  )
}

export default App
