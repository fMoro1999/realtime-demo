import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BannerComponent } from './app-shell';
import { ResultsPageComponent } from './pages';

const firebase = environment.firebase;
export const APP_IMPORTS = [
  RouterModule,
  BrowserModule,
  CommonModule,
  provideFirebaseApp(() => initializeApp(firebase)),
  provideFirestore(() => getFirestore()),
];
export const APP_COMPONENTS_IMPORTS = [BannerComponent, ResultsPageComponent];
