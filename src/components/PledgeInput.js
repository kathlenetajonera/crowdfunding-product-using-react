import { useContext, useRef, useState } from "react";
import { FundingSummaryContext } from "../context/FundingSummaryContext";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import Button from "./Button";
import FlexWrapper from "./wrapper/FlexWrapper";

const PledgeInput = ({ minPledge }) => {
    const [pledgeValue, setPledgeValue] = useState(null);
    const [isInvalid, setIsInvalid] = useState(false);
    const { setIsModalOpen } = useContext(ProductSelectionContext);
    const { setTotalPledge, setTotalBackers } = useContext(FundingSummaryContext);
    const fieldRef = useRef();

    const handleSubmit = (e) => {
        if (pledgeValue >= minPledge) {
            e.stopPropagation();
            setTotalPledge(current => current + pledgeValue);
            setTotalBackers(current => current + 1);
            setIsModalOpen({ name: "completed", isOpen: true });
        } else setIsInvalid(true)
    }

    const handleClick = () => fieldRef.current.focus();

    return (
        <div className="pledge">
            <FlexWrapper type="col-mb pledge__wrapper">
                <p 
                    className="container__body-text container__body-text--centered"
                    onClick={handleClick}
                >
                    Enter your pledge
                </p>

                <FlexWrapper type="sb-c">
                    <div className="pledge__input">
                        <span className="pledge__currency">$</span>
                        <input 
                            type="text" 
                            className={`pledge__field ${isInvalid && `pledge__field--invalid`}`}
                            onChange={e => setPledgeValue(parseInt(e.target.value))}
                            ref={fieldRef}
                        />
                    </div>
                    <Button 
                        type="primary-no-flex" 
                        label="Continue"
                        handleClick={handleSubmit}
                    />
                </FlexWrapper>
            </FlexWrapper>
        </div>
    );
}
 
export default PledgeInput;