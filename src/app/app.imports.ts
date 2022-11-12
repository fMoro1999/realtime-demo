import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './app-shell';

export const APP_IMPORTS = [RouterModule, BrowserModule, CommonModule];
export const APP_COMPONENTS_IMPORTS = [BannerComponent];
