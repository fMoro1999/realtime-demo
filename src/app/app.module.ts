import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_IMPORTS, APP_COMPONENTS_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [APP_IMPORTS, APP_COMPONENTS_IMPORTS],
  providers: APP_PROVIDERS,
  bootstrap: [AppComponent],
})
export class AppModule {}
