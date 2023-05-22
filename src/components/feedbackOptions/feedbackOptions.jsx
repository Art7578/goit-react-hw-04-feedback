import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css'

export default function FeedbackOptions({options, onButtonClick}) {
    return (
        <div className={css.container}>
            {Object.keys(options).map(option => {
                return (
                    <button 
                    key={option}
                    type="button"
                    name={option}
                    className={css.button}
                    onClick ={event => {
                        onButtonClick(event.currentTarget.name);
                    }}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onButtonClick: PropTypes.func.isRequired,
};