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
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container>
        <h3>The best baseball players!</h3>
      </Container>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log('Drag end called');
  }
}

export default App;
