import { useState } from "react";
import Section from "./section/section";
import Statistic from "./statistics/statictics";
import FeedbackOptions from "./feedbackOptions/feedbackOptions";
import Notification from "./notification/notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = `${Math.round((good/total) * 100)}%`;

  return (
    <>
    <Section title="Please leave feedback">
      <FeedbackOptions
      options={{good, neutral, bad}}
      onButtonClick={onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
      {total ? (
        <Statistic 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback"/>
      )}
    </Section>
    </>
  );
};

export default App;
