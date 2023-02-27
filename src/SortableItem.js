import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Card from 'react-bootstrap';

export function SortableItem(props) {
  // props.id
  // JavaScript

  useSortable({ id: props.id });
}
