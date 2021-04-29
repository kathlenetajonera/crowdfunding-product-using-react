import "./styles/app.css";
import Header from './components/Header';
import Main from "./components/Main";
import Attribution from "./components/Attribution";
import { ProductSelectionProvider } from "./context/ProductSelectionContext";
import { FundingSummaryProvider } from "./context/FundingSummaryContext";

function App() {
  return (
    <>
      <Header />
      <FundingSummaryProvider>
        <ProductSelectionProvider>
          <Main />
        </ProductSelectionProvider>
      </FundingSummaryProvider>
      <Attribution />
    </>
  );
}

export default App;
