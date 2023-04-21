import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  options = [
    {title: "sam"},
    {title: "varun"},
    {title: "Jasmine"}]
}
