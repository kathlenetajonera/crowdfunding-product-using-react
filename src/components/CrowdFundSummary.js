import React from "react";
import Container from "./wrapper/Container";
import FlexWrapper from "./wrapper/FlexWrapper";
import CrowdFundData from "./CrowdFundData";
import ProgressBar from "./ProgressBar";

const CrowdFundSummary = React.memo(() => {
    return (
        <Container>
            <FlexWrapper type="col-mb">
                <CrowdFundData data="$89,914" description="of $100,000 backed" />
                <CrowdFundData data="5,007" description="total backers" />
                <CrowdFundData data="56" description="days left" />
            </FlexWrapper>

            <ProgressBar />
        </Container>
    );
})
 
export default CrowdFundSummary;