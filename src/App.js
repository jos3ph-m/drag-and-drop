import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    'JavaSript',
    'Python',
    'TypeScript',
  ]);
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    ></DndContext>
  );

  function handleDragEnd(event) {}
}

export default App;
