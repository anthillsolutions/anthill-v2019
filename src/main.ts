import { AppBrowserModule } from '.././src/app/app.browser.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  const script = document.createElement('script');
  script.innerHTML = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-80773733-1');`;
  document.head.appendChild(script);
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
                    platformBrowserDynamic()
                      .bootstrapModule(AppBrowserModule)
                      .catch(err => console.log(err));
                  });
