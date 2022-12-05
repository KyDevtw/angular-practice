import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {
  serverId: number = 10; // string binding，最後一定會被轉成或是 return string
  serverStatus: string = "offline";

  // constructor 會在 class 成立時執行
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor(){
    return this.serverStatus === "online" ? "green": "red";
  }
}