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
import { SortableItem } from './SortableItem';

function App() {
  const [languages, setLanguages] = useState([
    'JavaSript',
    'Python',
    'TypeScript',
  ]);
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container className="p-3" style={{ 'width': '50%' }} align="center">
        <h3>The best baseball players</h3>
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {languages.map((language) => (
            <SortableItem key={language} />
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log('Drag end called');
  }
}

export default App;
