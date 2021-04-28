import React from "react"
import AppRouter from "./AppRouter"
import { ChakraProvider, theme } from "@chakra-ui/react"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  )
}

export default App;
