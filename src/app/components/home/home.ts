import { Component } from '@angular/core';
import { KanbanContainerComponent } from "../home/kanban-container/kanban-container.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [KanbanContainerComponent, KanbanContainerComponent, HeaderComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
