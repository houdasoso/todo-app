import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../features/todoSlice';

const ListTask = () => {
  const { list, filter } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const filtered = list.filter(task =>
    filter === 'done' ? task.isDone :
    filter === 'not' ? !task.isDone : true
  );

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('not'))}>Not Done</button>
      </div>
      {filtered.map(task => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default ListTask;
