import { useContext, useState } from "react";
import { ProductSelectionContext } from "../context/ProductSelectionContext";
import Button from "./Button";
import FlexWrapper from "./wrapper/FlexWrapper";

const PledgeInput = ({ minPledge }) => {
    const [pledgeValue, setPledgeValue] = useState(null);
    const { setIsModalOpen } = useContext(ProductSelectionContext);

    const handleSubmit = () => {
        if (parseInt(pledgeValue) >= minPledge) {
            setIsModalOpen({ name: "completed", isOpen: true })
        }
    }

    return (
        <div className="pledge">
            <p className="container__body-text container__body-text--centered">
                Enter your pledge
            </p>

            <FlexWrapper type="sb-c">
                <div className="pledge__input">
                    <span className="pledge__currency">$</span>
                    <input 
                        type="text" 
                        className="pledge__field"
                        onChange={e => setPledgeValue(e.target.value)}
                    />
                </div>
                <Button 
                    type="primary-no-flex" 
                    label="Continue"
                    handleClick={handleSubmit}
                />
            </FlexWrapper>
        </div>
    );
}
 
export default PledgeInput;