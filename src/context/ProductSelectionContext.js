import React, { useState } from "react";

export const ProductSelectionContext = React.createContext();

export const ProductSelectionProvider = ({ children }) => {
    const [selectedReward, setSelectedReward] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (e) => {
        const selectedProduct = e.target.closest(".container__card").dataset.reward;

        setSelectedReward(selectedProduct)
        setIsModalOpen({ name: "product selection", isOpen: true })
    }

    return (
        <ProductSelectionContext.Provider 
            value={{
                selectedReward,
                setSelectedReward,
                isModalOpen,
                setIsModalOpen,
                handleClick
            }}
        >
            { children }
        </ProductSelectionContext.Provider>
    )
}