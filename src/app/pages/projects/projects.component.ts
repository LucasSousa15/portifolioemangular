import { Component } from '@angular/core';
import {ProjectCardsComponent} from './project-cards/project-cards.component'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
