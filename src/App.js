import { ThemeProvider } from "styled-components";
import ProductPage from "./pages/ProductPage";
import { GlobalStyles } from "./styles/GlobalStyles";
import { mainTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles/>
      <ProductPage/>
    </ThemeProvider>
  );
}

export default App;
