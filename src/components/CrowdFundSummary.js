import React from "react";
import Container from "./wrapper/Container";
import FlexWrapper from "./wrapper/FlexWrapper";
import CrowdFundData from "./CrowdFundData";
import ProgressBar from "./ProgressBar";

const CrowdFundSummary = React.memo(({ totalPledge, totalBackers }) => {
    const numberFormat = new Intl.NumberFormat("en");

    return (
        <Container>
            <FlexWrapper type="col-mb">
                <CrowdFundData data={`$${numberFormat.format(totalPledge)}`} description="of $100,000 backed" />
                <CrowdFundData data={`${numberFormat.format(totalBackers)}`} description="total backers" />
                <CrowdFundData data="56" description="days left" />
            </FlexWrapper>

            <ProgressBar totalPledge={totalPledge} />
        </Container>
    );
})
 
export default CrowdFundSummary;