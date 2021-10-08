function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log(options);
  const buttonNames = Object.keys(options);
  console.log(buttonNames);
  return (
    <div>
      {buttonNames.map(button => (
        <button>{button}</button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
