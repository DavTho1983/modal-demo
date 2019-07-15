import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "modal-app";
  visible: boolean;

  // @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.visible = true;
  }

  showModal() {
    this.visible = !this.visible;
  }
}
