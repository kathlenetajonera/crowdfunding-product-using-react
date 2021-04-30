import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const { products } = useProducts("productsOnly");

    return (
        products && products.map(product => (
            <ProductCard 
                productName={product.name}
                minPledge={product.minPledge}
                productDesc={product.description}
                stocks={product.stocks}
                key={product.id}
            />
        ))
    );
}
 
export default ProductList;