import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})

export class ServerComponent {
  serverId: number = 10; // string binding，最後一定會被轉成或是 return string
  serverStatus: string = "offline";

  getServerStatus() {
    return this.serverStatus
  }
}