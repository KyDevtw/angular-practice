import { 
  Component, 
  OnInit, 
  Input, 
  EventEmitter, 
  Output, 
  ViewEncapsulation, 
  ViewChild, 
  ElementRef, 
  OnChanges, 
  SimpleChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-servers', // 這裏類似於 css 選擇器，也可以用[app-servers]選擇特定 attr 標籤，.app-servers 選擇 class 為 app-servers 的標籤
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <hr>
  // <app-server></app-server>`, // 也可以直接把 template html 節點直接寫在這，也可以直接用樣板字串 `${}`
  styleUrls: ['./servers.component.scss'],
  // encapsulation angular 用來操作樣式屬性, none 取消 attr 賦予樣式會變 global, Emulated 預設, ShadowDom 通常用 Emulated 即可
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  allowNewServer = false;
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
  // 括號內部一樣可以重新命名 property
  @Output() serverCreatedPropsPassing = new EventEmitter<string>();
  // @ViewChild 內部填寫 refElement，也可以直接傳遞一個 Component 例如 ServerComponent (AppComponent 內註冊的 component)
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
    console.log('constructor called!')
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // changes 會是一個 Obeject 內有 currentValue, previousValue 可以做運算
    console.log('changes: ', changes, 'ngOnChanges called!')
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngDoCheck(): void {
    // 每次 angular 監測改變時，包括 value, event 他去監測時觸發
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(): void {
    // ngDoCheck 後觸發一次（content 指的是 ng-content）
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(): void {
    // content checked 後觸發
    console.log('ngAfterViewInit called!')
  }

  ngAfterViewChecked(): void {
    // content checked 後觸發
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }

  // Todo 盡量不要透過以下兩者方式更改 DOM input 值
  // 透過 ref 接收 html element
  onCreateServerWithViewChild(){
    // 接收 value 要用 nativeElement.value
    console.log(this.serverContentInput.nativeElement.value)
  }
  // 透過 ref 接收 html element
  onCreateServerWithRef(nameInput: HTMLInputElement){
    // input element value 直接 input.value
    console.log(nameInput.value)
  }
  // Todo 盡量不要透過以上兩者方式更改 DOM input 值

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
