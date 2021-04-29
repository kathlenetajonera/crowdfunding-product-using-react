import React, { useContext } from "react";
import { FundingSummaryContext } from "../context/FundingSummaryContext";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import Button from "./Button";
import PledgeInput from "./PledgeInput";
import FlexWrapper from "./wrapper/FlexWrapper";

const ProductSelectionCard = ({ productName, minPledge, productDesc, stocks }) => {
    const { selectedReward, setIsModalOpen, handleClick } = useContext(ProductSelectionContext);
    const { setTotalBackers } = useContext(FundingSummaryContext);
    const handleSubmit = () => {
        setTotalBackers(current => current + 1);
        setIsModalOpen({ name: "completed", isOpen: true });
    };
    const isUnavailable = stocks === 0;
    const isSelected = productName === selectedReward; 

    return (
        <div 
            className={`container__card ${
                isUnavailable 
                ? 'container__card--unavailable'
                : isSelected
                ?  'container__card--selected'
                : ''
            }`} 
            data-reward={productName}
            onClick={handleClick}
        >
            <FlexWrapper type="ac">
                <div className={`radio__custom ${isSelected ? 'radio__custom--active' : ''}`} />
                
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
                <div className="stocks">
                    <FlexWrapper type="ac">
                        <h3 className="container__main-text">
                            { stocks }
                        </h3>

                        <p className="container__body-text container__body-text--left">
                            left
                        </p>
                    </FlexWrapper>
                </div>
            }
            
            { isSelected && selectedReward !== "Pledge with no reward" &&
                <PledgeInput minPledge={minPledge} /> 
            }

            { isSelected && selectedReward === "Pledge with no reward" &&
                <div className="pledge">
                    <Button 
                        type="primary-margin-top" 
                        label="Continue"
                        handleClick={handleSubmit}
                    /> 
                </div>
            }

        </div>
    );
}
 
export default ProductSelectionCard;