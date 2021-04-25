const CrowdFundData = ({ data, description }) => {
    return (
        <div className="flex__item">
            <h1 className="container__main-text container__main-text--data">
                { data }
            </h1>
            <p className="container__body-text container__body-text--data">
                { description }
            </p>
        </div>
    );
}
 
export default CrowdFundData;