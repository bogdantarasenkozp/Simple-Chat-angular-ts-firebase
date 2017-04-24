import { Component, Input } from "@angular/core";

@Component({
  selector: 'msgListComponent',
  templateUrl: './msglist.component.html',
  styleUrls: ['./msglist.component.css']
})

export class msgListComponent {
  @Input() msgs:any;
}
