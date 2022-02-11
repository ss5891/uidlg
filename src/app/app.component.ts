import { Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import accordionData from '../assets/faqs.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Have a Question? We can Help';
  data: any = accordionData;
    
  constructor(@Inject(DOCUMENT) document) {
    
  }
  ngOnInit() {
    
  }
  toggleAccordian(index, item) {
      var element = document.querySelector('#section_'+item);
      element.classList.toggle('active');
      if(this.data[index].isActive) {
        this.data[index].isActive = false;
      } else {
        this.data[index].isActive = true;
      }
      document.querySelector('#section_'+item + ' svg').classList.toggle("rotate-close");  
      element.nextElementSibling.classList.toggle('panel-max');    
  }

}
