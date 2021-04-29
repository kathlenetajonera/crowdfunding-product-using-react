import React, { useState } from "react";

export const FundingSummaryContext = React.createContext();

export const FundingSummaryProvider = ({ children }) => {
    const [totalPledge, setTotalPledge] = useState(89914);
    const [totalBackers, setTotalBackers] = useState(5007);

    const values = { totalPledge, setTotalPledge, totalBackers, setTotalBackers };

    return (
        <FundingSummaryContext.Provider value={values}>
            { children }
        </FundingSummaryContext.Provider>
    )
}

