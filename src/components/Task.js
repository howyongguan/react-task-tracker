import Card from "@material-ui/core/Card";
import * as React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete }) => {
  return (
    <Card style={{ margin: "10px 0px" }} variant="outlined" className="task">
      <h5>
        {task.text} <FaTimes onClick={onDelete} />
      </h5>
      <p>{task.day}</p>
    </Card>
  );
};
export default Task;
