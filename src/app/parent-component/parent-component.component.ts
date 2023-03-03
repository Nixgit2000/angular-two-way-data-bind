import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styles: [`
  #div2 {
    height: 30vh;
    width: 30vw;
    background-color: transparent;
  

  }
  `]
})
export class ParentComponentComponent {
 parentItem = "THIS text came from parent"

 greetFN(text: string){
  console.log(text)
 }
}
