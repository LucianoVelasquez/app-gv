import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface productoI {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  descripcion: string
}

export interface productosI {
  productos : productoI[]
  copyProductos : productoI[]
}

const initialState : productosI = {
  productos: [],
  copyProductos: []
}

export const productosSlice = createSlice({
  name: "productosState",
  initialState,
  reducers: {
    addAllProducts: (state, action: PayloadAction<productoI[]>) => {
      state.productos = action.payload;
      state.copyProductos = action.payload;
    },
    removeProducById : (state, action : PayloadAction<string>) =>{
      state.productos = state.productos.filter((e) => e.id != action.payload)
    },
    removeSelected: (state,action: PayloadAction<productoI[]>) => {
      const ids = action.payload.map(e => e.id);
      
      for (let i = 0; i < ids.length; i++) {
        state.productos = state.productos.filter(e => e.id != ids[i]);
      }

    }
  },
})


export const { removeSelected,removeProducById, addAllProducts } = productosSlice.actions;

export default productosSlice.reducer
