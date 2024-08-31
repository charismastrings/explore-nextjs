import { create } from 'zustand'

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

export const useAuth = create((set) => ({
  isLogin: false,
  data: [{
    email: 'testing@testing.com',
    password: 'testing'
  }],
  email: '',
  password: 'testing',
  getData: () => set((state) => ({ data: state.data})),
  setLogin: () => set((state) => ({ isLogin: state.isLogin = true })),
  setLogout: () => set((state) => ({ isLogin: state.isLogin = false })),
  setInputEmail: (input) => set((state) => ({ email: state.email = input })),
  setInputPassword: (input) => set((state) => ({ password: state.password = input })),
  setNewAccount: (input) => set((state) => ({data: [...state.data, ...input]}))
}))