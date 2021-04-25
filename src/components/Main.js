import CrowdFundingSummary from "./CrowdFundSummary";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const Main = () => {
    return (
        <div className="main">
            <div className="main__inner">
                <Product />
                <CrowdFundingSummary />
                <ProductDetails />
            </div>
        </div>
    );
}
 
export default Main;