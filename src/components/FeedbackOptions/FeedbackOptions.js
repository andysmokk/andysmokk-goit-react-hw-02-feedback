import shortid from 'shortid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonNames = Object.keys(options);
  return (
    <div>
      {buttonNames.map(button => (
        <button
          key={shortid.generate()}
          name={button}
          onClick={onLeaveFeedback}
          type="button"
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
