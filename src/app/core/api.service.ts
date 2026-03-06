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
}
