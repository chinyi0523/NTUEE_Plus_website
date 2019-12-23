# NTUEE-_backend
### 試跑login頁面:

- windows

1. npm install
2. sudo service mongodb start / brew services start mongodb-community(for mac)
3. node index.js

- mac(no brew)

1. npm install
2. 在一個terminal中輸入mongod
```
mongod
```
若執行時遇到如`[initandlisten] exception in initAndListen: 29 Data directory /data/db not found., terminating`的問題，執行下面幾行：
```
> cd
> sudo mkdir -p /data/db 
> sudo chown `id -u` /data/db
```
3. 在另外一個terminal cd到專案的目錄，跑 node index.js

then u can see the page at http://localhost:1993/

discription:
in Schemas, there are 3 schema(user_login, user_visual, job), use "require(./Schemas/filename)" to import it

### 查看db裡的資料:
- mongodb shell(看到database的全部內容): https://ithelp.ithome.com.tw/articles/10186483
```
> sudo service mongodb start
> mongo
> show dbs
> use mongoose
> show collections
> db.<collection name>.find() //看到全部內容
> db.<collection name>.deleteMany({<query>}) //手動刪除特定內容
```
- mongodb compass 
[載點](https://www.mongodb.com/download-center/compass)
1. 啟動mongodb
```
> mongod
```
2. 開啟compass應用程式
填入host及port(資料庫的host位置)即可看到所有資料庫裡的資料
### 新增:
11/19
加了forget.html
填好資料會透過jeff5120721@gmail.com寄送激活碼到指定mail
點擊連結可更換密碼

11/20
把app.get('/xxx')內的函式移到srcs/xxx.js

12/13
將管理頁面routing的函式移到routes/底下

12/23
完成登入後跳轉功能


