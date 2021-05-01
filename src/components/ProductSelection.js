import { useRef } from "react";
import useProducts from "../hooks/useProducts";
import ProductSelectionCard from "./ProductSelectionCard";
import Container from "./wrapper/Container";
import FlexWrapper from "./wrapper/FlexWrapper";

const ProductSelection = ({ setIsModalOpen }) => {
    const { products } = useProducts();
    const listRef = useRef();

    const handleClose = () => {
        setIsModalOpen({ name: "product selection", isOpen: false });
    };

    return (
        <Container>
            <FlexWrapper type="sb-c">
                <h2 className="container__main-text">
                    Back this project
                </h2>

                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        className="modal__close" 
                        onClick={handleClose}
                        d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/>
                </svg>
            </FlexWrapper>

            <p className="container__body-text">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>

            <div ref={listRef}>
                { 
                products && products.map(product => (
                    <ProductSelectionCard 
                        productName={product.name}
                        minPledge={product.minPledge}
                        productDesc={product.description}
                        stocks={product.stocks}
                        listRef={listRef}
                        key={product.id}
                    />
                )) 
                }
            </div>
        </Container>
    );
}
 
export default ProductSelection;