import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTodo } from '../features/todoSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.description);

  const handleSave = () => {
    dispatch(editTodo({ id: task.id, description: text }));
    setEdit(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleDone(task.id))}
      />
      {edit ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
