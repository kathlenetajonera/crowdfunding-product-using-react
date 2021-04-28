import React from "react";
import Container from "./wrapper/Container";
import ProductList from "./ProductList";

const ProductDetails = React.memo(() => {
    return (
        <Container>
            <h3 className="container__main-text">
                About this project
            </h3>

            <p className="container__body-text">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                <br /><br />
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>

            <ProductList />
        </Container>
    );
});
 
export default ProductDetails;