import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Card from 'react-bootstrap';

export function SortableItem(props) {
  // props.id
  // JavaScript

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
}
