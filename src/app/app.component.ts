import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadfileComponent } from "./uploadfile/uploadfile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Excel to PDF Converter';
  description = 'Convert your Excel files to PDF format easily and quickly.';
}
