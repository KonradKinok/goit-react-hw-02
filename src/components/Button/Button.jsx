import PropTypes from "prop-types";

/**
 *  * ButtonControl renders a button with specified properties.
 *
 * @param {Object} props - The properties object.
 * @param {function} props.changeValue - The function to call when the button is clicked.
 * @param {string} props.label - The label to display on the button.
 * @param {string} [props.style] - The CSS class to apply to the button (optional).
 * @param {string} props.name - The name attribute for the button.
 * @returns {JSX.Element} The rendered button component.
 */
export const ButtonControl = ({ changeValue, label, style, name }) => (
    <button name={name} className={style} type="button" onClick={changeValue}>
        {label}
    </button>
);

ButtonControl.propTypes = {
    changeValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};