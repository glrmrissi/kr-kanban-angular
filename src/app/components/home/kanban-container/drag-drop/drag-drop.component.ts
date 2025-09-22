import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {
  private plataformId = inject(PLATFORM_ID);
  constructor() { 
    if (isPlatformBrowser(this.plataformId)) {
      // Browser-specific logic
    } else {
      // Server-specific logic
    }
  }
  eventDrag(e: any){

  }
}
