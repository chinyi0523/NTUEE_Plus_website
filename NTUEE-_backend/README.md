# NTUEE-_backend
run:

-windows

1. npm install
2. sudo service mongodb start / brew services start mongodb-community(for mac)
3. node index.js

-mac(no brew)

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

mongodb shell(看到database的全部內容)：https://ithelp.ithome.com.tw/articles/10186483
```
>sudo service mongodb start
>mongo
>show dbs
>use mongoose
>show collections
>db.<collection name>.find() //看到全部內容
>db.<collection name>.deleteMany({<query>}) //手動刪除特定內容
```

11/19
加了forget.html
填好資料會透過jeff5120721@gmail.com寄送激活碼到指定mail
點擊連結可更換密碼

11/20
把app.get('/xxx')內的函式移到srcs/xxx.js

