import { ChakraProvider } from "@chakra-ui/react"
import { LanguageContextProvider } from "../core/contexts/languageContext"
import { theme } from "../styles/global"

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      <LanguageContextProvider>
        <Component {...pageProps} />
      </LanguageContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
