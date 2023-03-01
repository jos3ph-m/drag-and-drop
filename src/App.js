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
    'Shohei Ohtani',
    'Aaron Judge',
    'Mike Trout',
    'Mookie Betts',
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
            <SortableItem key={language} id={language} />
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log('Drag end called');
    const { active, over } = event;
    console.log('ACTIVE: ' + active.id);
    console.log('OVER: ' + over.id);

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        arrayMove();
        // items: [0, 1, 2, 3]
        // array move helps us reposition those based on dragging
      });
    }
  }
}

export default App;
