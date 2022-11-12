import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FIREBASE_ICON_URL } from '../../internal/icons';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toolbar" role="banner">
      <img height="40" alt="Firebase" [src]="firebaseIconUrl" />
      <span>{{ title }}</span>
    </div>
  `,
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  firebaseIconUrl = FIREBASE_ICON_URL;

  @Input() title!: string;
}
