import { configureStore } from '@reduxjs/toolkit'

import tarefaReducer from './reducers/Tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefaReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
