import React, { useState, useEffect } from "react";

export const ProductSelectionContext = React.createContext();

export const ProductSelectionProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = (e) => {
        const productName = e.target.closest(".container__card").dataset.product;

        setSelectedProduct(productName)
    }

    useEffect(() => {
        if (selectedProduct) setIsModalOpen(true);
    }, [selectedProduct])

    useEffect(() => {
        !isModalOpen && setSelectedProduct(null);
    }, [isModalOpen])

    return (
        <ProductSelectionContext.Provider 
            value={{
                selectedProduct,
                setSelectedProduct,
                isModalOpen,
                setIsModalOpen,
                handleClick
            }}
        >
            { children }
        </ProductSelectionContext.Provider>
    )
}