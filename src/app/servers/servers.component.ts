import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // 這裏類似於 css 選擇器，也可以用[app-servers]選擇特定 attr 標籤，.app-servers 選擇 class 為 app-servers 的標籤
  // templateUrl: './servers.component.html',
  template: `
  <app-server></app-server>
  <hr>
  <app-server></app-server>`, // 也可以直接把 template html 節點直接寫在這，也可以直接用樣板字串 `${}`
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

}
