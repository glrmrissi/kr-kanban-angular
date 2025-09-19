import { Component } from '@angular/core';
import { KanbanContainerComponent } from "../home/kanban-container/kanban-container.component";

@Component({
  selector: 'app-home',
  imports: [KanbanContainerComponent, KanbanContainerComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
