import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ServicesComponent } from '../services/services.component';
import { HomeSliderComponent } from '../home-slider/home-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AboutUsComponent, ServicesComponent, HomeSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
