import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { providePrimeNG } from 'primeng/config';
import { AppComponent } from './app/app.component';
import Lara from '@primeng/themes/lara';

bootstrapApplication(AppComponent, {
  ...appConfig, // 保留原本 appConfig 裡的設定（如路由、HttpClient等）
  providers: [
    ...(appConfig.providers || []), // 展開原本的 providers
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: false 
        }
      }
    })
  ]
}).catch(err => console.error(err));