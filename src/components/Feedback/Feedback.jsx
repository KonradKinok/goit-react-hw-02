import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Notification } from "../Notification/Notification";
import { Section } from "../Section/Section";
const LOCAL_STORAGE_KEY_STATISTICS = "statistics-localstorage"
const INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0
};

/**
 * Component representing a feedback form.
 * Allows users to submit feedback and displays statistics.
 */
export const Feedback = () => {
    const [state, setState] = useState(loadLocalStorage(LOCAL_STORAGE_KEY_STATISTICS
    ) || INITIAL_STATE);

    useEffect(() => {
        saveLocalStorage(LOCAL_STORAGE_KEY_STATISTICS, {
            ...state,
        });
    }, [state]);



    /**
     * Updates the feedback state based on the clicked rating.
     * @param {Event} evt - Click event.
     */
    const updateValue = (evt) => {
        const { name } = evt.target;
        if (name === "reset") {
            setState(INITIAL_STATE);
        }
        else {
            setState((prevState) => {
                const newValue = prevState[name] + 1;
                const newTotal = prevState.total + 1;
                const newPercentage = ((prevState.good + (name === 'good' ? 1 : 0)) / newTotal) * 100;

                return {
                    ...prevState,
                    [name]: newValue,
                    total: newTotal,
                    percentage: Number((newTotal > 0 ? newPercentage : 0).toFixed()),
                };
            });
        }

    };

    const { good, neutral, bad, total, percentage } = state;

    return (
        <Section title="Sip Happens Café" description="Please leave your feedback about our service by selecting one of the options below.">
            <FeedbackOptions scssClass={"button-30"} onLeaveFeedback={updateValue} total={state.total} />
            {total === 0 ? (
                <Notification message="There is no feedback" />
            ) : (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={percentage}
                />
            )}
        </Section>
    );
};

Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
    updateValue: PropTypes.func,
};


/**
 * LocalStorage saveLocalStorage
 * @param {string} key
 * @param {object} value
 */
const saveLocalStorage = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
};

/**
 * localStorage load
 * @param {string} key
 * @returns {object | undefined}
 */
const loadLocalStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
        return undefined;
    }
};