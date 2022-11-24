import { createContext, useState } from "react"

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const userTest = {
        name: "Nathan",
        email: "sadenachbinathan@gmail.com",
        typeID: 1,
        storeID: 1
    }
    const [user, setUser] = useState(userTest)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider