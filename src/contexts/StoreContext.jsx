import { createContext, useState } from "react"

export const StoreContext = createContext()

const StoreContextProvider = ({children}) => {
    const storeTest = {
        id: 1,
        libele: "Douala",
        address: "Makepe, total",
        contact: "656296992"
    }
    const [store, setStore] = useState(storeTest)

    return (
        <StoreContext.Provider value={{store, setStore}}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider