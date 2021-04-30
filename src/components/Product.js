import logo from "../images/logo-mastercraft.svg";
import BookmarkBtn from "./BookmarkBtn";
import Button from "./Button";
import Container from "./wrapper/Container";
import FlexWrapper from "./wrapper/FlexWrapper";

const Product = ({ setIsModalOpen }) => {
    const handleOpen = () => setIsModalOpen({ name: "product selection", isOpen: true });
    return (
        <Container>
            <img src={logo} alt="mastercraft" className="container__logo"/>

            <h1 className="container__main-text container__main-text--product-title">
                Mastercraft Bamboo Monitor Riser
            </h1>

            <p className="container__body-text container__body-text--product-desc">
                A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>

            <FlexWrapper type="sb-c">
                <Button 
                    type="primary" 
                    label="Back this project"
                    handleClick={handleOpen}
                />
                <BookmarkBtn />
            </FlexWrapper>
        </Container>
    );
}
 
export default Product;