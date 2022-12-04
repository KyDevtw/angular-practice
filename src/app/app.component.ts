import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // 宣告這個 component 顯示在根 html 哪個標籤（客製的名稱，不予 原本 html 或是套件標籤 重複）
  templateUrl: './app.component.html', // 這個標籤所顯示的內容之檔案來源
  // styleUrls: ['./app.component.scss'] // 樣式來源，array 可以多個 url 引入
  styles: [`
    h1 {
      color: dodgerBlue;
    }
  `] // 樣式也可以透過 array 撰寫 inline style
})
export class AppComponent implements OnInit {
  title = 'my-app';
  name = "Kurt";

  ngOnInit(): void {
    
  }
}
