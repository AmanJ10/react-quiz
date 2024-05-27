import Options from "./Options";

function Question({ question, dispatch, answer }) {
  // question is an object which contains keys like question, options, points, correctOption
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
