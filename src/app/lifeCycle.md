## 這份檔案不關 Angular 結構，單純為了解釋 生命週期產生

- ngOnChanges 在 Component 或 Directive create 初始與 input 改值時觸發 // @Input
- ngOnInit constructor() 後觸發一次（在 Component 或 Directive create 初始後）
- ngDoCheck called during every change detection run in template，檢測 Component 或 Directive 的變化
# 以下週期只用在 Componen
- ngAfterContentIni 只用在Component，把ng-content的內容投射至Component的View之後呼叫，在首次ngDoCheck後發生，只呼叫一次 Called once after content (ng-content) has been checked
- ngAfterContentChecked 只用在Component，每次完成ng-content的變更檢測之後呼叫，ngAfterContentInit和每次NgDoCheck之後呼叫
- ngAfterViewInit 只用在 Component，初始化完 Component View 及 Child Component View 之後呼叫。 在首次ngAfterContentChecked後發生，且只會呼叫一次
- ngAfterViewChecked 只用在Component，每次做完Component View和Child Component的變更檢測之後呼叫， ngAfterViewInit和每次ngAfterContentChecked之後呼叫
- ngOnDestroy 在Angular銷毀Component及Directive前呼叫，(ex.透過 ngIf 銷毀 Component 或 Directive 時)
# 以上週期只用在 Componen