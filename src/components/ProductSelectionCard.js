import FlexWrapper from "./wrapper/FlexWrapper";

const ProductSelectionCard = ({ productName, minPledge, productDesc, stocks, selectedProduct, setSelectedProduct }) => {
    const handleClick = (e) => {
        const productName = e.target.closest(".container__card").dataset.product;

        setSelectedProduct(productName);
    }

    return (
        <div 
            className={`container__card ${ stocks === 0 ? 'container__card--unavailable' : '' }`} 
            data-product={productName}
            onClick={handleClick}
        >
            <FlexWrapper type="ac">
                <div className={`radio__custom ${selectedProduct === productName ? 'radio__custom--active' : ''}`} />
                
                <FlexWrapper type="col-mb">
                    <p className="container__main-text container__main-text--card">
                        { productName }
                    </p>

                    <p className="container__body-text container__body-text--pledge">
                        {`Pledge $${minPledge} or more`}
                    </p>
                </FlexWrapper>
            </FlexWrapper>

            <p className="container__body-text">
                { productDesc }
            </p>

            <FlexWrapper type="ac">
                <h1 className="container__main-text container__main-text--card">
                    { stocks }
                </h1>

                <p className="container__body-text container__body-text--left">
                    left
                </p>
            </FlexWrapper>
        </div>
    );
}
 
export default ProductSelectionCard;