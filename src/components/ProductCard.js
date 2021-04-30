import { useContext } from "react";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import Button from "./Button";
import FlexWrapper from "./wrapper/FlexWrapper";

const ProductCard = ({ productName, minPledge, productDesc, stocks }) => {
    const { handleClick } = useContext(ProductSelectionContext);
    const isUnavailable = stocks === 0;

    return (
        <div 
            className={`container__card ${ isUnavailable && 'container__card--unavailable' }`}
            data-reward={productName}
        >
            <FlexWrapper type="col-mb">
                <p className="container__main-text container__main-text--card">
                    { productName }
                </p>
                <p className="container__body-text container__body-text--pledge">
                    { `Pledge $${minPledge} or more `}
                </p>
            </FlexWrapper>

            <p className="container__body-text">
                { productDesc }
            </p>

            <FlexWrapper type="col-mb-fs">
                <FlexWrapper type="ac">
                    <h1 className="container__main-text">
                        { stocks }
                    </h1>

                    <p className="container__body-text container__body-text--left">
                        left
                    </p>
                </FlexWrapper>

                <Button 
                    type={`${ !isUnavailable ? 'primary' : 'unavailable'}`}
                    label={`${ !isUnavailable ? 'Select Reward' : 'Out of Stock'}`}
                    handleClick={handleClick}
                />
            </FlexWrapper>
        </div>
    );
}
 
export default ProductCard;