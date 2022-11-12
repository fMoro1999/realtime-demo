import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { TerminalComponent } from '../features';

@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [CommonModule, TerminalComponent],
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsPageComponent {
  results$: Observable<unknown>;

  constructor() {
    this.results$ = EMPTY;
  }
}
