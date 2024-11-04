import PropTypes from "prop-types";

/**
 * Notification renders a notification message.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.message - The message to display in the notification.
 * @returns {JSX.Element} The rendered notification component.
 */
export const Notification = ({ message }) => (
    <div >
        <h3>Statistics</h3>
        <p>{message}</p>
    </div>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
