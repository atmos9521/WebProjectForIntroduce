import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/imports/shared.imports';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-test-page-2',
  imports: [...SHARED_IMPORTS],
  templateUrl: './test-page-2.component.html',
  styleUrl: './test-page-2.component.css',
})
export class TestPage2Component {
  private apiService = inject(ApiService);

  showAlert() {
    this.apiService.getApiTest().subscribe({
      next: (res) => alert(res), // 這裡會 alert: "API 正常運作 - 我的電商系統"
      error: (err) => console.error('連線失敗', err),
    });
  }
}
