import "./styles/app.css";
import Header from './components/Header';
import Main from "./components/Main";
import Attribution from "./components/Attribution";
import { ProductSelectionProvider } from "./context/ProductSelectionContext";

function App() {
  return (
    <>
      <Header />
      <ProductSelectionProvider>
        <Main />
      </ProductSelectionProvider>
      <Attribution />
    </>
  );
}

export default App;
