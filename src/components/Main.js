import { useContext } from "react";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import CrowdFundingSummary from "./CrowdFundSummary";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Modal from "./wrapper/Modal";
import ProductSelection from "./ProductSelection";
import CompletedPledge from "./CompletedPledge";

const Main = () => {
    const { isModalOpen, setIsModalOpen } = useContext(ProductSelectionContext);

    return (
        <div className="main">
            <div className="main__inner">
                <Product
                    setIsModalOpen={setIsModalOpen}
                />
                <CrowdFundingSummary />
                <ProductDetails />
            </div>

            { isModalOpen.name === "product selection" &&
                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                    <ProductSelection 
                        setIsModalOpen={setIsModalOpen}
                    />
                </Modal>
            }

            { isModalOpen.name === "completed" &&
                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                    <CompletedPledge />
                </Modal>
            }
        </div>
    );
};
 
export default Main;