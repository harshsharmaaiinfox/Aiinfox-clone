import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss'
})
export class TermsAndConditionsComponent {

  constructor() {
    
  }

  ngOnInit(): void {
  }
  
  pageTitleArea: pageTitle[] = [
      {
          title: 'Terms & Conditions'
      }
  ]
}
class pageTitle {
  title : string;
}