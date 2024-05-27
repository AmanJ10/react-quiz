function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    // value in progress bar => if option is selected then it condition will be true then convert it to number (1) then add it to index
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
