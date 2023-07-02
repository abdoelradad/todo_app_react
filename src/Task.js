export const Task = (props) => {
  return (
    <div className="list__container">
      <h1>{props.taskName}</h1>
      <button>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>delete</button>
    </div>
  );
};
