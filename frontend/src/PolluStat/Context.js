import React, {useState} from 'react'
const Context = React.createContext()

export default Context;

export const Provider = ({
  children
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [tickFormatter, setTickFormatter] = useState('DD/MM')
  const [domain, setDomain] = useState(['auto', 'auto'])
  return (
    <Context.Provider value={{
      domain : domain,
      setDomain : setDomain,
      tickFormatter : tickFormatter,
      setTickFormatter : setTickFormatter,
      drawerVisible: drawerVisible,
      setDrawerVisible: setDrawerVisible,
    }}>{children}</Context.Provider>
  )
}