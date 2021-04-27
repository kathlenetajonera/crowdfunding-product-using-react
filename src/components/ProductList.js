import { useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const products = useContext(ProductContext);
    const { handleClick } = useContext(ProductSelectionContext);
    const productCards = useMemo(() => (
        products && products.map(product => (
            <ProductCard 
                productName={product.name}
                minPledge={product.minPledge}
                productDesc={product.description}
                stocks={product.stocks}
                handleClick={handleClick}
                key={product.id}
            />
        ))
    ), [products, handleClick]);

    return (
        <>
            { productCards }
        </>
    );
}
 
export default ProductList;