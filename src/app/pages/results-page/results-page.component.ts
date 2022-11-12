import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { LetModule } from '@rx-angular/template';
import { Observable, tap } from 'rxjs';
import { TerminalComponent } from '../features';
@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [CommonModule, TerminalComponent, LetModule],
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsPageComponent {
  results$: Observable<unknown>;

  constructor(db: Firestore) {
    const resultsCollection = collection(db, 'items');
    this.results$ = collectionData(resultsCollection);
    this.results$.pipe(tap(console.log));
  }
}
