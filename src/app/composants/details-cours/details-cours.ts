import { Component, Input } from '@angular/core';
import { Cours } from '../liste-cours/liste-cours';
@Component({
  selector: 'app-details-cours',
  imports: [],
  templateUrl: './details-cours.html',
  styleUrl: './details-cours.css',
})
export class DetailsCours {
  @Input() cours: Cours | null = null;
}
