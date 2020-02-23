# NTUEE_Plus_website


### 置頂文 0220工作分配 By謹譯 
第一次部聚前希望可以完成
> **前端**
> * 友廷：繼續完成Profile部分，我會幫你一起弄
> * 承樺、建琁：帶新加入的兩位一起完成Column各個訪問的內頁
> * 育楷：生出Find Job 雛形
> * 明翰：看目前所有網站，提供所有設計的點子

> **後端**
> 抱歉我暫時會幫忙前端處理一下事情
> * 君輔：Merge東西，處理Profile
> * 維恩＆宗倫：研究搜尋的相關/Find Job頁面
> * 建翰＆侃軒：研究FB登入/研究安全相關

### 0223進度 By君輔
* 新增route/src/in/readDB.js，管理obj和output/input的轉換，優化與profile的溝通
> * 如果回傳欄位是undefined就skip
> * 如果回傳資料是""就用update->$unset把它刪掉
> * 後端只會傳出除了""和undefined以外的資料減少網路流量消耗
> * 前端傳入資料用hasChanged讓被修改過的才傳回後端（包括變成""刪除資料庫）
> * profile圖片上傳的bug修正(原本按cancel會讓file變成undefined)
* 新增/api/test頁面可以充當前端
> * url代表目標網址
> * textarea寫post的data，\n區隔不同pair，一個pair用空格區分key/value
* 後端新增/api/searchVisual，依據除了工作以外的欄位可查詢其餘使用者
> * 該欄位必須使用者選擇show=true才會回傳
> * 先用/api/test玩
* 待修正/新增
> * occupation的資料傳輸(資料庫type用array希望讓使用者無限新增)
> * 研究mongo的ref，將jobID和findJob資料庫串聯

### 0222更新 By友廷&謹譯
> * Column
>> * 外觀改動
>> * 縮放時不會變動排版
>> * 新增column_app，包含router，要新增頁面請依照裡面範例，目前頁面已全數新增
>> * column 內頁設計需格式化，排版先以1910為主

### 0220更新 By友廷
> * Register
>> * 驗證問題輸入補上
>> * 新增FAQ欄及image preview section
>> * ID photo 的大小有新增限制，不會大幅改變排版

> * Forget
>> * NavBar已修正
>> * 按鈕樣式已改

> * Profile
>> * 已將ID photo去除
>> * 雙輔已改英文

> * Column
>> * 已在section上添加margin,不會被擋住
>> * Column圖片可以個別更改，改的方式請依照第一個範例
>> * 日期採訪人置右
>> * 字體修改
>> * 標題與box加陰影
>> * 新增read more

### 0220一驗 By謹譯
感謝君輔＆友廷寒假完成登入相關部分與個人資料的雛形，詳細問題如下述。我剛剛修正完Column外部頁面的大部分內容，後續仍有許多部分待大家努力。
* 新增新的進度請放在最上面，由上而下為時間由近而遠。
* Forget 設計怪怪的，太繁瑣，不過先不改

> **前端**

> * Register 已解決 0222
>> * 漏掉驗證問題的輸入
>> * ID 附註須有證件頭像與名字

> * Forget 已解決 0222
>> * Nav Bar 錯誤 ，應該為Out的 Nav
>> * 確認送出鈕顏色改透明藍底

> * Profile （需大改）
>> * 上傳的身分證照片不要顯示 已解決 0222
>> * Public 字跑掉
>> * 學歷展開後 Doctor 會被擋到
>> * 學歷輔雙改英文 已解決 0222
>> * 安全問題大修
>> * 縮放頁面跑掉

> * Column 已解決 0222
>> * Nav Bar 會擋到最新一篇的上半 
>> * 圖片需可以個別更換 
>> * 日期採訪人置右 
>> * 主標題顏色不明顯
>> * 新增 Read more 按鈕
>> * 圓弧角取代方框？

> * Find Job （沒看到）
> * 登入後首頁 暫時不處理 0222

> **後端**
> * Profile 個人資料實際操作需確定完全正確，我還沒測試
> * Register 目前註冊正確，可以嘗試加防呆註冊 
> * Find 嘗試研究如何搜尋與顯示人物

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
