import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-uploadfile',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './uploadfile.component.html',
  styleUrl: './uploadfile.component.css'
})
export class UploadfileComponent  {
 selectedFile: File | null = null;
  pdfDownloadUrl: string | null = null;
   

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.pdfDownloadUrl = null;
    }
  }

  convertToPDF(): void {
    if (!this.selectedFile) return;

    // Show loading or spinner if needed
    console.log('Uploading:', this.selectedFile);

    // Simulate API response
    setTimeout(() => {
      this.pdfDownloadUrl = '/assets/converted.pdf'; // Replace with real PDF link
    }, 1500);
  }

}
