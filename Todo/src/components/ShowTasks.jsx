import React, { useEffect } from "react";
import SingleTask from "./SingleTask";

const ShowTasks = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return (
    <div className="bg-white p-5 w-[800px] mx-auto rounded-lg">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <SingleTask
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            key={task.id}
            toggleComplete={toggleComplete}
          />
        ))
      ) : (
        <p className="text-2xl text-red-600">No task found!</p>
      )}
    </div>
  );
};

export default ShowTasks;
