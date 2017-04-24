import { Component, Input } from "@angular/core";

@Component({
  selector: 'msgListComponent',
  templateUrl: './msglist.component.html'
})

export class msgListComponent {
  @Input() msgs:any;
}
