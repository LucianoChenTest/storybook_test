import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const dispatch = useDispatch();
  // const reduxState = useSelector((store) => store);
  // console.log(reduxState);
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items" onClick={() => dispatch({ type: "plus" })}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};
TaskList.defaultProps = {
  loading: false,
};
