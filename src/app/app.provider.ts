import {
  provideRouter,
  withDisabledInitialNavigation,
  withInMemoryScrolling,
} from '@angular/router';
import { ROUTES } from './app.routing';
import { SCHEDULED_APP_INITIALIZER_PROVIDER } from './shared';

export const APP_PROVIDERS = [
  provideRouter(
    ROUTES,
    /**
     * **🚀 Perf Tip for TBT:**
     *
     * Disable initial sync navigation in router config and schedule it in router-outlet container component
     */
    withDisabledInitialNavigation(),
    withInMemoryScrolling({
      /**
       * **💡 UX Tip for InfiniteScroll:**
       *
       * Reset scroll position to top on route change, users could be
       * irritated starting a new list from the bottom of the page.
       *
       * also: otherwise infinite scroll isn't working properly
       */
      scrollPositionRestoration: 'top',
    })
  ),
  /**
   * **🚀 Perf Tip for TBT:**
   *
   * Chunk app bootstrap over APP_INITIALIZER.
   */
  SCHEDULED_APP_INITIALIZER_PROVIDER,
];
