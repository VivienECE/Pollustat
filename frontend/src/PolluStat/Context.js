import React, {useState} from 'react'
const Context = React.createContext()

export default Context;

export const Provider = ({
  children
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  return (
    <Context.Provider value={{
      drawerVisible: drawerVisible,
      setDrawerVisible: setDrawerVisible,
    }}>{children}</Context.Provider>
  )
}