# NTUEE_Plus_website

### 0220一驗 By謹譯
* 新增新的進度請放在最上面，由上而下為時間由近而遠。
> **前端**
> Profile 
> Column 
>> * Nav Bar 會擋到最新一篇的上半 
>> * 圖片需可以個別更換 
>> * 日期採訪人置右 

> **後端**
>

### 0206進度 By友廷
* expand欄位的bug修好(發現是transition與display的conflict,以及ReactDOM在onChange的時候會重新render)
> **補充**
> * DeepCopy在一堆obj包在一起的時候好像很吃效能，所以有人建議用[ImmutableJS](https://github.com/kdchang/reactjs101/blob/master/Ch06/react-immutable-introduction.md)，保持state的不變，而是每次都回傳新的state
> * 分開component再結合的dataflow好像用Flux或[Redux](https://github.com/kdchang/reactjs101/blob/master/Ch07/react-redux-introduction.md)的結構會比較好管理? 雖然我也不太會XD

### 0206進度 By君輔
* Profile頭像傳輸完成(因為user_visual資料量多，想直接回傳obj，但image先在後端預處理完會比較乾淨，然後我就被深拷貝坑了好久...)
> **一些話**
> * 預設頭像的部分要再研究，後端目前是如果不存在的話會回傳''，看是要哪裡做判斷(目前沒想到漂亮的方法
> * expand欄位的onChange有bug(一次refresh只能打一個字)，請前端人員修正(這個不是很急
> * profile.js現在檔案累積到有點大了，要不要各個div分開寫再render在一起?但這樣state的設置就得研究一下

### 0205進度 By友廷
* Profile新增上傳大頭照按鈕
* Register的照片上傳按鈕style修正
* Profile expand顯示優化


### 0204進度 By君輔
* 前端register新增照片上傳按鈕，可上傳證件證明
* 後端用multer解析照片，限制檔案大小與格式(jpg,jpeg,png)，並以Buffer儲存在Mongo裡
* 前端LoginChange.js新增顯示照片區(到時候應該是管理員授權註冊的頁面要顯示)，以src={this.state.img}顯示
* 後端用'data:image/png;base64,<buffer_data>'送出資料，可直接被前端img src使用
>  **一些話**
> * 預設照片的部分再請前端人員設定
> * 前端profile待新增上傳大頭照的按鈕，方法參照register；post的部分涉及檔案傳輸，要改成FormData(這部分可留給後端人員做，只是介面要先出來)

### 0203進度 By君輔
* 前端profile的div hr0、hr1訊息可以完整傳送，接下來會嘗試在onchange做修改，讓只有被修改過的欄位才會回傳，加速資料傳遞
* 後端依profile.js新增資料庫欄位(facebook,....)，接下來會加上validation

### 0203進度 By友廷
* Profile的name與id功用分離
* 前端新增App_in, pages_in, AppBar_in, Home_in
* 關於App 與 App_in 兩個路由之間的切換還在工作中
* Home_in 的排版完成, style細節再討論, 以及expand button的顯示優化工作中
* 測試Home_in 請先在Index.js內import App_in,然後將原本的App改成App_in

### 0202進度 By君輔
* 後端validation處理完成，只需修改validation.js的mat{}，即會運行對應的validate
* 後端新增/api/showVisual(init用)、/api/chVisual(儲存用，尚未完善)，由於/Schemas/user_visual.js格式有更動，資料傳輸內容須再討論(即post的data)
* Profile在Home下做測試
* 前端頁面改用value={this.state.\<id or name\>}(我也不知道為何範例code用.value)
* 前端id和name的意義可以統一一下，像是id拿來管理css、name管理this.state和post之類的(onchange中用target.id或target.name都可喔)

### 0201進度 By友廷
* 前端profile頁面處理中

### 0131進度 By君輔
* 前端接收到validation的訊息後會跳alert(統一當message===false時跳data.description中的內容)
* 後端validation架構改變，針對每一種欄位有獨自的檔案規定格式(/Name)，但ConfirmPassword要用到req會噴bug，還在修正中
> **一些話**
> * 前端趕快生登入後頁面給我啦

### 0130進度 By君輔
* 新增express-validation套件，在routes/validation下先檢驗傳入的資料是否合法再進入資料庫(/srcs)管理
* 若資料不合法則從(validation/controll.js)回傳422error，前端需再依error訊息顯示提醒

### 0126進度 By 君輔
* 新增.gitignore(拜託大大們不要再把node_module傳上來了，看了很難過)
* 架構我參考了https://github.com/rishipr/teams
* 後端一律在/api下工作，要新增功能請在routes/api.js中修改
* local端可在同一個port下工作(關鍵在於使用react bulid再用express static分析)
* 共同網頁版可到https://ntueeplus.herokuapp.com/ 測試
* clone完後執行方式：
>* npm install && cd client && npm install
>* 開啟mongodb server(詳細請看舊版github教學)
>* npm run local(=開mongodb server + build + start)
>* 或者npm run local_mac(=build + start)

> **一些話：**
>* question在HOME改比較好
>* fb登入交給大家研究了
>* 前後端的merge方法要討論一下，不然現在都是我重複把前端頁面clone下來貼進來心很累；找人研究submodule，然後前端有餘力的話看一下我的axios然後自己寫一下提交表單^^
>* 大家新年快樂~
