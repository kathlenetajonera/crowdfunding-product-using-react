import React, { useState, useEffect } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/productList.json");
            const data = await response.json();

            setProducts(data)
        }

        fetchData();
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}