import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => (
  <div style={{ padding: 20 }}>
    <h1>Redux ToDo App</h1>
    <AddTask />
    <ListTask />
  </div>
);

export default App;
