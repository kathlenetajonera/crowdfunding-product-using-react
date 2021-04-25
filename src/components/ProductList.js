import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
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
        <>
            { products && products.map(product => (
                <ProductCard 
                    productName={product.name}
                    minPledge={product.minPledge}
                    productDesc={product.description}
                    stocks={product.stocks}
                    key={product.id}
                />
            )) }
        </>
    );
}
 
export default ProductList;