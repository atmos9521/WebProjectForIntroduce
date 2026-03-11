import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/api.service';
import { SHARED_IMPORTS } from '../../../../shared/imports/shared.imports';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-album-upload',
  imports: [...SHARED_IMPORTS, MegaMenuModule, AvatarModule],
  templateUrl: './album-upload.component.html',
  styleUrl: './album-upload.component.css',
})
export class AlbumUploadComponent {
  private apiService = inject(ApiService);
  selectedFile: File | null = null;
  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
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
}
