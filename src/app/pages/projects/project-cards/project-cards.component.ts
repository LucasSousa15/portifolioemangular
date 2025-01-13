import { Component, input, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css'
})
export class ProjectCardsComponent {
  @Input() title:string = "";
  @Input() imageURL: string = "";
  @Input() description: string = "";
  @Input() list:string[] = [];
}
