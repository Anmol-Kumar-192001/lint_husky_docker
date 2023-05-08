import React, { createContext } from 'react'
import ComA from './ComA'
// import ComB from './ComB'

const FirstName = createContext();
   const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Anmol"}>
        <LastName.Provider value={"Kumar"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App;
export { FirstName,LastName }