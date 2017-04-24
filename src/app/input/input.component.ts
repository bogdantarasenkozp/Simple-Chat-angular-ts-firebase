import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: "inputComponent",
  templateUrl: "./input.component.html"
})

export class inputComponent {

  @Output() onSend = new EventEmitter<any>();

  chatSend(text: string){
    this.onSend.emit(text);
  }
}
