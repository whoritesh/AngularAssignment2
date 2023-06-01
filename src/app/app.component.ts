import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carousal';
  slides: any[] = [];
  newSlide: any = {};

  addSlide() {
    this.slides.push({ ...this.newSlide });
    this.newSlide = {};
  }

  deleteSlide(slide: any) {
    const index = this.slides.indexOf(slide);
    if (index > -1) {
      this.slides.splice(index, 1);
    }
  }
}
