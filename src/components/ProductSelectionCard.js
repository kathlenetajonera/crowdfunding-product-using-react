import React, { useContext } from "react";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import Button from "./Button";
import PledgeInput from "./PledgeInput";
import FlexWrapper from "./wrapper/FlexWrapper";

const ProductSelectionCard = ({ productName, minPledge, productDesc, stocks }) => {
    const { selectedReward, handleClick } = useContext(ProductSelectionContext);

    console.log("selection card");

    return (
        <div 
            className={`container__card ${ 
                stocks === 0 
                ? 'container__card--unavailable' 
                : productName === selectedReward 
                ? 'container__card--selected'
                : ''
            }`} 
            data-reward={productName}
            onClick={handleClick}
        >
            <FlexWrapper type="ac">
                <div className={`radio__custom ${selectedReward === productName ? 'radio__custom--active' : ''}`} />
                
                <FlexWrapper type="col-mb">
                    <p className="container__main-text container__main-text--card">
                        { productName }
                    </p>

                    { minPledge &&
                        <p className="container__body-text container__body-text--pledge">
                            {`Pledge $${minPledge} or more`}
                        </p>
                    }
                </FlexWrapper>
            </FlexWrapper>

            { productDesc &&
                <p className="container__body-text">
                    { productDesc }
                </p>
            }

            { stocks !== null && 
                <FlexWrapper type="ac">
                    <h1 className="container__main-text container__main-text--card">
                        { stocks }
                    </h1>

                    <p className="container__body-text container__body-text--left">
                        left
                    </p>
                </FlexWrapper>
            }
            
            { selectedReward === productName && selectedReward !== "Pledge with no reward" &&
                <PledgeInput minPledge={minPledge} /> 
            }

            { selectedReward === productName && selectedReward === "Pledge with no reward" &&
                <Button type="primary-no-flex" label="Continue" /> 
            }

        </div>
    );
}
 
export default ProductSelectionCard;