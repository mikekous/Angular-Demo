import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-app';
  username = '';
  showSecret = false;
  arr = [];
  loadedFeature= 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;

  }

  // showDetails(){
  //   this.showSecret=!this.showSecret;
  //   this.arr.push(this.arr.length + 1);
  // }
}
