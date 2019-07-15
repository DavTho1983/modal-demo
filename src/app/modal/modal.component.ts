import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  // tslint:disable-next-line: no-output-native
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() {}

  hide() {
    this.close.emit();
  }

  ngOnInit() {}
}
