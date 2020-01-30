# NTUEE_Plus_website

### 0126進度 By 君輔
* 新增.gitignore(拜託大大們不要再把node_module傳上來了，看了很難過)
* 架構我參考了https://github.com/rishipr/teams
* 後端一律在/api下工作，要新增功能請在routes/api.js中修改
* local端可在同一個port下工作(關鍵在於使用react bulid再用express static分析)
* 共同網頁版可到https://ntueeplus.herokuapp.com/測試
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
*新增express-validation套件，在routes/validation下先檢驗傳入的資料是否合法再進入資料庫(/srcs)管理
*若資料不合法則從(validation/controll.js)回傳422error，前端需再依error訊息顯示提醒
