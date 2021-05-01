import React, { useState, useContext, useEffect } from "react";
import { animateScroll as scroller } from "react-scroll";
import { FundingSummaryContext } from "../context/FundingSummaryContext";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import Button from "./Button";
import PledgeInput from "./PledgeInput";
import FlexWrapper from "./wrapper/FlexWrapper";

const ProductSelectionCard = ({ productName, minPledge, productDesc, stocks, listRef }) => {
    const [cardPosition, setCardPosition] = useState(null);
    const { selectedReward, setIsModalOpen, handleClick } = useContext(ProductSelectionContext);
    const { setTotalBackers } = useContext(FundingSummaryContext);
    const isUnavailable = stocks === 0;
    const isSelected = productName === selectedReward; 
    const handleSubmit = (e) => {
        e.stopPropagation();
        setTotalBackers(current => current + 1);
        setIsModalOpen({ name: "completed", isOpen: true });
    };

    useEffect(() => {
        if (selectedReward) {
            const listItems = listRef.current.children;
            const selectedCard = [...listItems].find(item => item.classList.contains("container__card--selected"))
            const currentPosition = (selectedCard.getBoundingClientRect().top + window.pageYOffset) - 100;

            setCardPosition(currentPosition);
        }
    }, [selectedReward, listRef])

    useEffect(() => {
        scroller.scrollTo(cardPosition)
    }, [cardPosition])
    
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