import { Component, signal } from '@angular/core';
import {EnTete} from './composants/en-tete/en-tete';
import {ListeCours} from './composants/liste-cours/liste-cours';
import {PiedPage} from './composants/pied-page/pied-page';
import { Cours } from './composants/liste-cours/liste-cours';
import { DetailsCours } from './composants/details-cours/details-cours';
@Component({
  selector: 'app-root',
  imports: [
    EnTete,
    ListeCours,
    DetailsCours,
    PiedPage
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catalogue-cours');
  coursSelectionne: Cours | null = null;
onSelectionCours(c: Cours) {
this.coursSelectionne = c;
}
}

