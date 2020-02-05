# NTUEE_Plus_website

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

### 0129進度 By君輔
* 用express-session，login後會在後端新增session(似乎會產生一個session/資料夾)
* 後端新增/api/logout、/api/showPersonal
* 前端在Home下方產生三個方塊：'logout按鈕'、'隱私資訊變更(安全問題)'、'公開資訊變更(尚未完成，請前端先設計table樣式)'
* 只是暫時放在Home下(因為我不想自己加連結，之後merge會很麻煩)，之後前端人員應該會要把它移到 in/ (?
* 後端srcs也設成in/、out/兩個資料夾，方便管理(?
> **一些話:**
>* 我不太會打MD，有空ㄉ人可以幫我排版一下XD

### 0130進度 By君輔
* 新增express-validation套件，在routes/validation下先檢驗傳入的資料是否合法再進入資料庫(/srcs)管理
* 若資料不合法則從(validation/controll.js)回傳422error，前端需再依error訊息顯示提醒

### 0131進度 By君輔
* 前端接收到validation的訊息後會跳alert(統一當message===false時跳data.description中的內容)
* 後端validation架構改變，針對每一種欄位有獨自的檔案規定格式(/Name)，但ConfirmPassword要用到req會噴bug，還在修正中
> **一些話**
> * 前端趕快生登入後頁面給我啦

### 0201進度 By友廷
* 前端profile頁面處理中

### 0202進度 By君輔
* 後端validation處理完成，只需修改validation.js的mat{}，即會運行對應的validate
* 後端新增/api/showVisual(init用)、/api/chVisual(儲存用，尚未完善)，由於/Schemas/user_visual.js格式有更動，資料傳輸內容須再討論(即post的data)
* Profile在Home下做測試
* 前端頁面改用value={this.state.\<id or name\>}(我也不知道為何範例code用.value)
* 前端id和name的意義可以統一一下，像是id拿來管理css、name管理this.state和post之類的(onchange中用target.id或target.name都可喔)

### 0203進度 By友廷
* Profile的name與id功用分離
* 前端新增App_in, pages_in, AppBar_in, Home_in
* 關於App 與 App_in 兩個路由之間的切換還在工作中
* Home_in 的排版完成, style細節再討論, 以及expand button的顯示優化工作中
* 測試Home_in 請先在Index.js內import App_in,然後將原本的App改成App_in

### 0203進度 By君輔
* 前端profile的div hr0、hr1訊息可以完整傳送，接下來會嘗試在onchange做修改，讓只有被修改過的欄位才會回傳，加速資料傳遞
* 後端依profile.js新增資料庫欄位(facebook,....)，接下來會加上validation


### 0204進度 By君輔
* 前端register新增照片上傳按鈕，可上傳證件證明
* 後端用multer解析照片，限制檔案大小與格式(jpg,jpeg,png)，並以Buffer儲存在Mongo裡
* 前端LoginChange.js新增顯示照片區(到時候應該是管理員授權註冊的頁面要顯示)，以src={this.state.img}顯示
* 後端用'data:image/png;base64,<buffer_data>'送出資料，可直接被前端img src使用
>  **一些話**
> * 預設照片的部分再請前端人員設定
> * 前端profile待新增上傳大頭照的按鈕，方法參照register；post的部分涉及檔案傳輸，要改成FormData(這部分可留給後端人員做，只是介面要先出來)