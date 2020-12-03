<a name="top"></a>
# EEplus website api v1.0.0

EE+ api文件

 - [In/account](#inaccount)
   - [重設密碼](#重設密碼)
 - [Out/account](#outaccount)
   - [isLogin](#islogin)
   - [login](#login)
   - [loginFB](#loginfb)
   - [logout](#logout)
   - [register](#register)
   - [registerFB](#registerfb)
 - [Out/forget](#outforget)
   - [activation](#activation)
   - [forget](#forget)
 - [Test](#test)
   - [testClient](#testclient)
   - [testRoute](#testroute)

___


# In/account

## 重設密碼
[Back to top](#top)

重設密碼

```
POST /chPassword
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| oldPsw | `String` | 原本密碼 |
| newPsw | `String` | 新密碼 |

### Success response

#### Success response - `204`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - |  |  |

### Error response

#### Error response - `401`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 原始密碼錯誤 |

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 帳號不存在 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

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
| description | `String` | 密碼錯誤 |

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 帳號不存在 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## loginFB
[Back to top](#top)

登入by facebook

```
POST /loginFB
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| facebookID | `String` | facebook ID |

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | 登入者名字 |

### Error response

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 帳號不存在 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

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
| description | `String` | 請添加照片 |

#### Error response - `403`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 帳號已存在 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## registerFB
[Back to top](#top)

註冊(by facebook ID)

```
POST /registerFB
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
| username | `String` | 使用者名字 |
| file | `File` | 身分證明的照片(FB登入好像不用照片，做管理員api時跟我討論一下) |

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | 使用者名字 |

### Error response

#### Error response - `400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 請添加照片 |

#### Error response - `403`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 帳號已存在 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

# Out/forget

## activation
[Back to top](#top)

檢查激活碼，忘記密碼重設

```
POST /activation
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| account | `String` | 學號 |
| active | `String` | 激活碼(附在信箱的連結裡) |
| password | `String` | 要重設的密碼 |

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - |  |  |

### Error response

#### Error response - `401`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 驗證碼已不存在 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## forget
[Back to top](#top)

忘記密碼，寄信

```
POST /forget
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| account | `String` | 學號 |

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` |  <li>使用者填寫的email</li> <li>&quot;您的私人信箱&quot;</li>  |

### Error response

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` |  <li>帳號不存在</li> <li>未設定信箱，請聯絡管理員</li>  |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` |  <li>資料庫錯誤</li> <li>信件範本讀取失敗</li> <li>寄信失敗</li>  |

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
