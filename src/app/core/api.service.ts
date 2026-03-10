import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5103/api/ApiTest'; // 換成你 C# 啟動後的實際 Port

  getApiTest() {
    // 回傳的是字串，所以使用 responseType: 'text' 或後端回傳 JSON
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }

  postMenuData() {
    const url = 'http://localhost:5103/api/headMenu';

    // 即使後端不需要參數，POST 規範建議也要傳一個空物件 {}
    const body = {};

    // post<回傳型別>(網址, 資料本體)
    return this.http.post<any>(url, body);
  }
}
