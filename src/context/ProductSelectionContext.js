import React, { useState, useEffect } from "react";

export const ProductSelectionContext = React.createContext();

export const ProductSelectionProvider = ({ children }) => {
    const [selectedReward, setSelectedReward] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (e) => {
        const selectedProduct = e.target.closest(".container__card").dataset.reward;

        setSelectedReward(selectedProduct)
    }

    useEffect(() => {
        if (selectedReward) setIsModalOpen({ name: "product selection", isOpen: true });
    }, [selectedReward])

    useEffect(() => {
        !isModalOpen && setSelectedReward(null);
    }, [isModalOpen])

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