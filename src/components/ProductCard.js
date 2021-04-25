import Button from "./Button";
import FlexWrapper from "./wrapper/FlexWrapper";

const ProductCard = ({ productName, minPledge, productDesc, stocks }) => {
    return (
        <div className={`container__card ${stocks === 0 ? 'container__card--unavailable' : ''}`}>
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
                    type={`${stocks !== 0 ? 'primary' : 'unavailable'}`}
                    label={`${stocks !== 0 ? 'Select Reward' : 'Out of Stock'}`}
                />
            </FlexWrapper>
        </div>
    );
}
 
export default ProductCard;