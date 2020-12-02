<a name="top"></a>
# EEplus website api v1.0.0

EE+ api文件

 - [Out/account](#out/account)
   - [isLogin](#islogin)
   - [login](#login)
   - [logout](#logout)
   - [register](#register)
 - [Test](#test)
   - [testClient](#testclient)
   - [testRoute](#testroute)

___


# Out/account

## isLogin
[Back to top](#top)

檢查是否有登入

```
POST /isLogin
```

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| account | `String` | 登入者學號 |

### Error response

#### Error response - `403`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | &quot;未登入&quot; |

## login
[Back to top](#top)

登入

```
POST /login
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| account | `String` | 學號 |
| password | `String` | 密碼(以後建議在前端加密) |

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | 登入者名字 |
| account | `String` | 登入者學號 |

### Error response

#### Error response - `401`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | &quot;密碼錯誤&quot; |

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | &quot;帳號不存在&quot; |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | &quot;資料庫錯誤&quot; |

## logout
[Back to top](#top)

登出

```
POST /logout
```

### Success response

#### Success response - `204`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - |  |  |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | &quot;session destroy失敗&quot; |

## register
[Back to top](#top)

註冊(by 學號 &amp; email)

```
POST /register
```

### Header examples
config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| account | `String` | 學號 |
| password | `String` | 密碼(以後建議在前端加密) |
| username | `String` | 使用者名字 |
| Email | `String` | 信箱 |
| file | `File` | 身分證明的照片 |

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | 使用者名字 |

### Error response

#### Error response - `400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | &quot;請添加照片&quot; |

#### Error response - `403`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | &quot;帳號已存在&quot; |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | &quot;資料庫錯誤&quot; |

# Test

## testClient
[Back to top](#top)

前端的測試頁面，建議改用postman測試

```
GET /testClient
```

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - | `file` | 測試頁面 |

## testRoute
[Back to top](#top)

給定post，回傳一樣的內容

```
POST /testRoute
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - | `any` | 任何東西 |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - | `any` | 回傳一樣的內容 |
