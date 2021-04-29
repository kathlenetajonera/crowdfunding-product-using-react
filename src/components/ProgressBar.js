const ProgressBar = ({ totalPledge }) => {
    const targetAmount = 100000;
    const progressPercentage = totalPledge / targetAmount * 100;

    const progressWidth = {
        width: progressPercentage + "%"
    }

    return (
        <div className="progress-bar">
            <div className="progress-bar__progress" style={progressWidth} />
        </div>
    );
}
 
export default ProgressBar;