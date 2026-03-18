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

  uploadFile(function_name: string, file: File) {
    const formData = new FormData();
    formData.append('func', function_name);
    formData.append('file', file); // 名稱 'file' 必須與後端參數名一致

    return this.http.post(`http://localhost:5103/api/fileUpload`, formData);
  }

  uploadMultipleFiles(function_name: string, files: File[]) {
    const formData = new FormData();
    formData.append('func', function_name);
    // 重要：使用相同的 Key ('files') 附加多個檔案
    files.forEach((file) => {
      formData.append('files', file);
    });
    return this.http.post(`http://localhost:5103/api/fileUpload`, formData);
  }

  postAlbumGroupData() {
    const url = 'http://localhost:5103/api/albumGroup';

    // 即使後端不需要參數，POST 規範建議也要傳一個空物件 {}
    const body = {};

    // post<回傳型別>(網址, 資料本體)
    return this.http.post<any>(url, body);
  }
}
