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
      error: (err) => {
        let errorMessage = '';

        if (err.status === 0) {
          // A: 客戶端/網路錯誤 (例如：CORS 沒開、Server 沒起、URL 寫錯)
          errorMessage = '無法連線至伺服器，請檢查後端是否啟動或 CORS 設定。';
        } else {
          // B: 後端回傳的錯誤 (例如：404, 500, 400)
          // err.error 可能是字串或後端回傳的 JSON 物件
          errorMessage = `後端錯誤 (${err.status}): ${err.error?.message || err.message}`;
        }

        alert(errorMessage);
        console.log('完整錯誤物件:', err);
      },
    });
  }
}
