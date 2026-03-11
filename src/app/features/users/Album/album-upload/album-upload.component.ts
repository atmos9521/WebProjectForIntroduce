import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/api.service';
import { SHARED_IMPORTS } from '../../../../shared/imports/shared.imports';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-album-upload',
  imports: [...SHARED_IMPORTS],
  templateUrl: './album-upload.component.html',
  styleUrls: ['./album-upload.component.css'],
  providers: [MessageService],
})
export class AlbumUploadComponent {
  constructor(private messageService: MessageService) {}

  private apiService = inject(ApiService);
  selectedFile: File | null = null;
  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload_single() {
    // 單筆
    if (this.selectedFile) {
      this.apiService.uploadFile('AlbumUpload', this.selectedFile).subscribe({
        next: (res) => alert('上傳成功！'),
        error: (err) => alert('上傳失敗：' + err.message),
        complete: () => (this.selectedFile = null),
      });
    }

    if (this.selectedFiles) {
      this.apiService
        .uploadMultipleFiles('AlbumMultipleUpload', this.selectedFiles)
        .subscribe({
          next: (res) => alert('所有檔案上傳成功！'),
          error: (err) => console.error(err),
          complete: () => (this.selectedFiles = []),
        });
    }
  }

  onFilesSelected(event: any) {
    // 將 FileList 轉為一般陣列
    this.selectedFiles = Array.from(event.target.files);
  }
  onPrimeNGFilesSelected(event: any) {
    // PrimeNG 的 (onSelect) 會直接把檔案放在 event.currentFiles 或 event.files 中
    // 它們本身就已經是陣列（或類陣列），通常不需要再用 Array.from 轉換

    if (event.currentFiles) {
      this.selectedFiles = event.currentFiles;
    } else if (event.files) {
      this.selectedFiles = event.files;
    }
  }

  // 當後端成功回傳時觸發
  onUpload(event: FileUploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: '上傳成功',
      detail: '檔案已處理完畢',
    });
  }

  // 當發生錯誤時觸發 (例如後端噴 500 或 400)
  onError(event: any) {
    this.messageService.add({
      severity: 'error',
      summary: '上傳失敗',
      detail: event.error?.message || '伺服器連線錯誤',
    });
  }
}
