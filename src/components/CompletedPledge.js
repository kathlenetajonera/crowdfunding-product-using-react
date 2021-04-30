import Container from "./wrapper/Container";
import Button from "./Button";
import check from "../images/icon-check.svg";
import { useContext } from "react";
import { ProductSelectionContext } from "../context/ProductSelectionContext";

const CompletedPledge = () => {
    const { setIsModalOpen, setSelectedReward } = useContext(ProductSelectionContext);
    const handleClose = () => {
        setIsModalOpen(false);
        setSelectedReward(null);
    };

    return (
        <Container>
            <img src={check} alt="success" className="container__img"/>

            <h3 className="container__main-text container__main-text--centered">
                Thanks for your support!
            </h3>

            <p className="container__body-text container__body-text--centered">
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
            </p>

            <Button 
                type="primary-centered" 
                label="Got it"
                handleClick={handleClose}
            />
        </Container>
    );
}
 
export default CompletedPledge;