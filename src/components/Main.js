import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import { FundingSummaryContext } from "../context/FundingSummaryContext";
import CrowdFundingSummary from "./CrowdFundSummary";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Modal from "./wrapper/Modal";
import ProductSelection from "./ProductSelection";
import CompletedPledge from "./CompletedPledge";

const Main = () => {
    const { isModalOpen, setIsModalOpen } = useContext(ProductSelectionContext);
    const { totalPledge, totalBackers } = useContext(FundingSummaryContext);
    const selectionRef = useRef();
    const completedRef = useRef();

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

            <CSSTransition
                nodeRef={selectionRef}
                in={isModalOpen.isOpen && isModalOpen.name === "product selection"}
                timeout={200}
                classNames="modal"
                unmountOnExit
            >
                <Modal 
                    ref={selectionRef}
                    isModalOpen={isModalOpen} 
                    setIsModalOpen={setIsModalOpen}
                >
                    <ProductSelection 
                        setIsModalOpen={setIsModalOpen}
                    /> 
                </Modal>
            </CSSTransition>

            <CSSTransition
                nodeRef={completedRef}
                in={isModalOpen.isOpen && isModalOpen.name === "completed"}
                timeout={200}
                classNames="modal--completed"
                unmountOnExit
            >
                <Modal 
                    ref={completedRef}
                    isModalOpen={isModalOpen} 
                    setIsModalOpen={setIsModalOpen}
                    type="completed"
                >
                    <CompletedPledge />
                </Modal>
            </CSSTransition>
            
        </div>
    );
};
 
export default Main;