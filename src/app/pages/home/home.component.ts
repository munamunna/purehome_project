
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  keyword = '';
  selectedType = '';
  selectedLocation = '';
  locationText = '';

  onSearch() {
    console.log('Searching with:', {
      keyword: this.keyword,
      type: this.selectedType,
      location: this.selectedLocation,
      locationText: this.locationText
    });

    // You can implement your actual search logic here
  }

  //##### section4

  @ViewChild('videoModal') videoModalRef!: TemplateRef<any>;
  showModal = false;
  sanitizedVideoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  openVideoModal(): void {
    // const videoId = 'dQw4w9WgXcQ'; 
    // const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
    this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    this.showModal = true;
    document.body.classList.add('modal-open');
  }

  closeVideoModal(): void {
    this.sanitizedVideoUrl = '';
    this.showModal = false;
    document.body.classList.remove('modal-open');
  }
}
