import { Component } from '@angular/core';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@Component({
  selector: 'app-kanban-container',
  standalone: true,
  imports: [DragDropComponent],
  templateUrl: './kanban-container.component.html',
  styleUrl: './kanban-container.component.scss'
})
export class KanbanContainerComponent {

}
