import "./styles/app.css";
import Header from './components/Header';
import Main from "./components/Main";
import Attribution from "./components/Attribution";
import { ProductProvider } from "./context/ProductContext";
import { ProductSelectionProvider } from "./context/ProductSelectionContext";

function App() {
  return (
    <>
      <Header />
      <ProductProvider>
        <ProductSelectionProvider>
          <Main />
        </ProductSelectionProvider>
      </ProductProvider>
      <Attribution />
    </>
  );
}

export default App;
