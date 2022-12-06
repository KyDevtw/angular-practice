import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-servers', // 這裏類似於 css 選擇器，也可以用[app-servers]選擇特定 attr 標籤，.app-servers 選擇 class 為 app-servers 的標籤
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <hr>
  // <app-server></app-server>`, // 也可以直接把 template html 節點直接寫在這，也可以直接用樣板字串 `${}`
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNweServer = false;
  serverCreationStatus = "No Server was created";
  serverName= "TestServer";
  serverCreated= false;
  servers = ['TestServer', 'TestServer2'];
  // decorator @Input() : 輸入屬性，通常為接收數據資料，也就是就是讓Parent將資料傳送到Child中使用。
  // 反之有 @Output() : 輸出屬性，通常提供事件給外部呼叫回傳使用，也就是讓Child將資料傳回Parent中使用。
  // 括號內可以重新命名 property 到外部使用 ex [srvElement] = '母元件 props'，空值就是使用原名稱 element
  @Input('srvElement') element: {type: string, name: string, content: string};
  // 創立新事件 EventEmitter
  // passing out props 用 Output，get props in 用 Input
  @Output() serverCreatedPropsPassing = new EventEmitter<string>();

  constructor() {
    setTimeout(()=>{
      this.allowNweServer = true;
    },2000)
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    // this.servers.push(this.serverName);
    this.servers.push(String(new Date()));
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    // .emit() 用來射出內容
    this.serverCreatedPropsPassing.emit(this.serverName)
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
