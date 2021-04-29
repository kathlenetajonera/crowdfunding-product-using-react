import { useContext } from "react";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import CrowdFundingSummary from "./CrowdFundSummary";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Modal from "./wrapper/Modal";
import ProductSelection from "./ProductSelection";
import CompletedPledge from "./CompletedPledge";
import { FundingSummaryContext } from "../context/FundingSummaryContext";

const Main = () => {
    const { selectedReward, isModalOpen, setIsModalOpen } = useContext(ProductSelectionContext);
    const { totalPledge, totalBackers } = useContext(FundingSummaryContext);

    return (
        <div className="main">
            <div className="main__inner">
                <Product
                    setIsModalOpen={setIsModalOpen}
                />
                <CrowdFundingSummary 
                    totalPledge={totalPledge}
                    totalBackers={totalBackers}
                />
                <ProductDetails />
            </div>

            { isModalOpen.name === "product selection" &&
                <Modal selectedReward={selectedReward} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                    <ProductSelection 
                        selectedReward={selectedReward}
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