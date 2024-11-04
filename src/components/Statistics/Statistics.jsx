import PropTypes from "prop-types";

/**
 * Statistics renders the statistics of feedback.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.good - The number of good feedbacks.
 * @param {number} props.neutral - The number of neutral feedbacks.
 * @param {number} props.bad - The number of bad feedbacks.
 * @param {number} props.total - The total number of feedbacks.
 * @param {number} props.positivePercentage - The percentage of positive feedbacks.
 * @returns {JSX.Element} The rendered statistics.
 */
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div >
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};