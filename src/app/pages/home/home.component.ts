import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';

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
}
