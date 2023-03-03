import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styles: [`
  #child{height: 20vh;
  width: 20vw;
    background-color: grey;
}
  `]
})
export class ChildComponentComponent {
@Input() childItem = ''


@Output() greetEE = new EventEmitter()
callParentFN() {
  this.greetEE.emit('This text is coming from the child, and being received and displayed in the console by the parent')
}
}
