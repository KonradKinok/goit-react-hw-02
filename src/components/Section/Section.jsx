import PropTypes from "prop-types";
import scss from "./Section.module.scss";
/**
 * Section component renders a section with a title and children components.
 *
 * @param { Object } props - The properties object.
 * @param { string } props.title - The title of the section.
 * @param { React.ReactNode } props.children - The child components to render within the section.
 * @returns { JSX.Element } The rendered section component.
 */
export const Section = ({ title, description, children }) => (
    <section className={scss.feedbackCard}>
        <h2 className={scss.title}>{title}</h2>
        <h2 className={scss.description}>{description}</h2>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node,
};