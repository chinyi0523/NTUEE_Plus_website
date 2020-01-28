# NTUEE_Plus_website

## 0126進度 By 君輔
### 新增.gitignore(拜託大大們不要再把node_module傳上來了，看了很難過)
### 架構我參考了https://github.com/rishipr/teams
### 後端一律在/api下工作，要新增功能請在routes/api.js中修改
### local端可在同一個port下工作(關鍵在於使用react bulid再用express static分析)
### 共同網頁版可到https://ntueeplus.herokuapp.com/測試
### clone完後執行方式：
#### npm install && cd client && npm install
#### 開啟mongodb server(詳細請看舊版github教學)
#### npm run local(=開mongodb server + build + start)
#### 或者npm run local_mac(=build + start)

### 一些話：
#### question在HOME改比較好
#### fb登入交給大家研究了
#### 前後端的merge方法要討論一下，不然現在都是我重複把前端頁面clone下來貼進來心很累；找人研究submodule，然後前端有餘力的話看一下我的axios然後自己寫一下提交表單^^
#### 大家新年快樂~
