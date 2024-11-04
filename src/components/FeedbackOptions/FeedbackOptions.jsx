import PropTypes from "prop-types";
import { ButtonControl } from "../Button/Button";
import buttonScss from "../../globalStyles/buttonStyles.module.scss";
import scss from "./FedbackOptions.module.scss";

/**
 * FeedbackOptions renders a set of feedback buttons.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.scssClass - The CSS class to apply to the buttons.
 * @param {function} props.onLeaveFeedback - The function to call when any feedback button is clicked.
 * @param {number} props.total - The function to call when any feedback button is clicked.
 * @returns {JSX.Element} The rendered set of feedback buttons.
 */
export const FeedbackOptions = ({ scssClass, onLeaveFeedback, total }) => (
    <div className={scss.buttons}>
        <ButtonControl style={buttonScss[scssClass]} name={"good"} label="Good" changeValue={onLeaveFeedback} />
        <ButtonControl style={buttonScss[scssClass]} name={"neutral"} label="Neutral" changeValue={onLeaveFeedback} />
        <ButtonControl style={buttonScss[scssClass]} name={"bad"} label="Bad" changeValue={onLeaveFeedback} />
        {total > 0 &&
            <ButtonControl style={buttonScss[scssClass]} name={"reset"} label="Reset" changeValue={onLeaveFeedback} />
        }
    </div>
);

FeedbackOptions.propTypes = {
    scssClass: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};