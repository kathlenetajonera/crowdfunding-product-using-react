import { useContext } from "react";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import CrowdFundingSummary from "./CrowdFundSummary";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Modal from "./wrapper/Modal";
import ProductSelection from "./ProductSelection";

const Main = () => {
    const { selectedProduct, setSelectedProduct, isModalOpen, setIsModalOpen } = useContext(ProductSelectionContext);

    return (
        <div className="main">
            <div className="main__inner">
                <Product
                    setIsModalOpen={setIsModalOpen}
                />
                <CrowdFundingSummary />
                <ProductDetails />
            </div>

            { isModalOpen &&
                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                    <ProductSelection 
                        selectedProduct={selectedProduct} 
                        setSelectedProduct={setSelectedProduct}
                        setIsModalOpen={setIsModalOpen}
                    />
                </Modal>
            }
        </div>
    );
}
 
export default Main;