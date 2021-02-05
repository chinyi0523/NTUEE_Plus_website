<a name="top"></a>
# EEplus website api v1.0.0

EE+ api文件

 - [In/account](#inaccount)
   - [重設密碼](#重設密碼)
   - [顯示帳號私人資訊](#顯示帳號私人資訊)
 - [In/career](#incareer)
   - [刪除職缺](#刪除職缺)
   - [尋找職缺](#尋找職缺)
   - [新增職缺](#新增職缺)
   - [顯示所有職缺](#顯示所有職缺)
 - [In/column](#incolumn)
   - [hashtag關鍵字查詢](#hashtag關鍵字查詢)
   - [存column照片](#存column照片)
   - [拿column照片](#拿column照片)
   - [拿Detail資料](#拿detail資料)
   - [拿Outline資料](#拿outline資料)
   - [管理員新增文章](#管理員新增文章)
 - [In/profile](#inprofile)
   - [搜尋porfile](#搜尋porfile)
   - [更新porfile](#更新porfile)
   - [顯示個人profile](#顯示個人profile)
 - [In/study](#instudy)
   - [配對](#配對)
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

## 顯示帳號私人資訊
[Back to top](#top)

```
POST /showPersonal
```

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username |  | 使用者名字 |
| account |  | 使用者學號 |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

# In/career

## 刪除職缺
[Back to top](#top)

```
DELETE /deleteRecruitment
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| _id | `String` | 要刪除職缺的mongodb _id |

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data |  | 刪除職缺標題 |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 尋找職缺
[Back to top](#top)

```
POST /searchRecruitment
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| title | `String` | 職缺標題 (optional) |
| company_name | `String` | 公司名稱 (optional) |
| work_type | `String` | 職位 (optional) |
| salary | `String` | 薪資 (optional) |
| experience | `String` | 經驗要求 (optional) |
| diploma | `String` | 學系要求 (optional) |
| requirement | `String` | 技能要求 (optional) |
| description | `String` | 其他描述 (optional) |

### Success response example

#### Success response example - `Success-Response:`

```json
	HTTP/1.1 201 Created
	[{
     _id: String,
		title: {
         title: String,
         company_name: String,
         work_type: String
     },
     info: {
            salary: String,
            experience: String,
            diploma: String
     },
		spec: {
            requirement: String,
            description: String
     },
        image: String
	},...]
```

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 新增職缺
[Back to top](#top)

```
POST /addRecruitment
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| title | `String` | 職缺標題 |
| company_name | `String` | 公司名稱 |
| work_type | `String` | 職位(ex.前端工程師) |
| salary | `String` | 薪資 |
| experience | `String` | 經驗要求 |
| diploma | `String` | 學系要求 |
| requirement | `String` | 技能要求 |
| description | `String` | 其他描述 |

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data |  | 職缺標題 |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 顯示所有職缺
[Back to top](#top)

```
POST /showRecruitment
```

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - | `Object[]` | 職缺們 |
| &ensp;_id | `String` | mongodb _id(for delete) |
| &ensp;title | `Object` | 標題相關 |
| &ensp;&ensp;title | `String` | 標題 |
| &ensp;&ensp;company_name | `String` | 公司名稱 |
| &ensp;&ensp;work_type | `String` | 職位(ex.前端工程師) |
| &ensp;info | `Object` | 工作資訊 |
| &ensp;&ensp;salary | `String` | 薪資 |
| &ensp;&ensp;experience | `String` | 經驗要求 |
| &ensp;&ensp;diploma | `String` | 學院要求 |
| &ensp;spec | `Object` | 詳細描述 |
| &ensp;&ensp;requirement | `String` | 技能要求 |
| &ensp;&ensp;description | `String` | 工作的其他描述 |
| &ensp;image | `String` | 公司頭像(Ex. <code>&lt;img src={image}/&gt;</code>) |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

# In/column

## hashtag關鍵字查詢
[Back to top](#top)

```
POST /column/search
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| keyword | `String` |  |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP/1.1 200 OK
[{
	title:String
	hashtag:String
	sections:[{
		bigtitle:String,
		sections:[{
			title:String,
			section:String
		}]
	}]
	annotation:["特別感謝:...","撰寫:...","校稿:...",...]
	id:["column_yymm"]
},...]
```

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 存column照片
[Back to top](#top)

```
POST /addImg
```

### Header examples
config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| filename | `String` | 檔名 |
| file | `String` | 照片檔 |

### Success response

#### Success response - `204`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - |  |  |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 拿column照片
[Back to top](#top)

```
POST /getImg
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| filename | `String` | 檔名 |

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data |  | 照片url(Ex. <code>&lt;img src={url}/&gt;</code>) |

### Error response

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 照片不存在 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 拿Detail資料
[Back to top](#top)

```
POST /getDetail
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | column_yymm |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP/1.1 200 OK
{
	title:String
	hashtag:String
	sections:[{
		bigtitle:String,
		sections:[{
			title:String,
			section:String
		}]
	}]
	annotation:["特別感謝:...","撰寫:...","校稿:...",...]
	id:["column_yymm"]
}
```

### Error response

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 找不到資料 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 拿Outline資料
[Back to top](#top)

```
POST /getOutline
```

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP/1.1 200 OK
{
	filename:["yymm"]
	anno:["作者1 作者2 作者3...","| yyyy/mm/dd 星期x"]
	title:["yyyy級 採訪者姓名 (目前職位)"...]
	exp:["採訪者姓名 現任:目前職位"...]
	edu:["採訪者姓名 學士/碩士/博士:....(畢業年分)",...]
	intro:["內文段落1","內文段落2"...]
	id:["Column_Block_yymm"]
}
```

### Error response

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 找不到資料 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 管理員新增文章
[Back to top](#top)

```
POST /addColumn
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| title | `String[]` | 文章標題 (xxxx 級 xxx (公司名稱與職位)) |
| detail_id | `String` | 文章在column_details的編號 (column_yymm) |
| hashtags | `String[]` | 文章的hashtag (文章類別，訪問者姓名、級別、工作、相關組織與企業) |
| sections | `Object[]` |  |
| &ensp;bigtitle | `String` | (一、標題，二、求學階段...) |
| &ensp;sections | `Object[]` |  |
| &ensp;&ensp;title | `String` | (各bigtitle的小主題) |
| &ensp;&ensp;section | `String` | (文章內容) |
| annotation | `String[]` | 參與人員 (工作:人員) |
| filename | `String` | (yymm) |
| anno | `String[2]` | ([所有採訪人員姓名,| yyyy/mm/dd 星期x]) |
| exp | `String[]` | 採訪者的姓名與現任職位 |
| edu | `String[]` | 採訪者的學歷 (學士:校系(畢業年分) 碩士:校系(畢業年分) 博士:校系(畢業年分)) |
| intro | `String[]` | 簡介 (1個element是一段) |
| outline_id | `String` | 文章在column_outlines的id (Column_Block_yymm) |

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| title | `String` | post的title |
| filename | `String` | post的filename |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

# In/profile

## 搜尋porfile
[Back to top](#top)

```
POST /searchVisual
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| account | `String` | 學號(用'x'進行模糊搜尋, ex.'b079010xx') |
| username | `String` | 名字 |
| nickname | `String` | 綽號 |
| profile | `String` | 自介 |
| publicEmail | `String` | 公開信相 |
| office | `String` | 公司電話 |
| homephone | `String` | 家裡電話 |
| cellphone | `String` | 手機 |
| CC | `String` | city and country |
| web | `String` | 個人部落格 |
| facebook | `String` | facebook |
| Linkedin | `String` | Linkedin |
| education | `Object` | 學位 |
| &ensp;major | `String` | 主修(或者'education.major') |
| &ensp;double_major | `String` | 雙主修(或者'education.double_major') |
| &ensp;minor | `String` | 輔修(或者'education.minor') |
| &ensp;master | `String` | 碩士(或者'education.master') |
| &ensp;doctor | `String` | 博士(或者'education.doctor') |
| Occupation | `Object` | 工作(COP3個中也可以只填1個或2個) |
| &ensp;C | `String` | 公司 |
| &ensp;O | `String` | 部門 |
| &ensp;P | `String` | 職位 |

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `Object[]` | Visual資料(請用res.data.data拿到) |
| &ensp;userimage | `String` | 大頭貼(使用<code>&lt;img src={userimage}/&gt;</code>) |
| &ensp;account | `String` | 學號 |
| &ensp;username | `String` | 名字 |
| &ensp;nickname | `String` | 綽號 |
| &ensp;profile | `String` | 自介 |
| &ensp;publicEmail | `String` | 公開信相 |
| &ensp;office | `String` | 公司電話 |
| &ensp;homephone | `String` | 家裡電話 |
| &ensp;cellphone | `String` | 手機 |
| &ensp;CC | `String` | city and country |
| &ensp;web | `String` | 個人部落格 |
| &ensp;facebook | `String` | facebook |
| &ensp;Linkedin | `String` | Linkedin |
| &ensp;education | `Object` | 學位 |
| &ensp;&ensp;major | `Object` | 學士 |
| &ensp;&ensp;&ensp;SD | `String` | school and department 學校&amp;系 |
| &ensp;&ensp;&ensp;Note | `String` | 備註, ex.在學、畢業 |
| &ensp;&ensp;double_major | `Object` | 雙主修 {SD,Note} |
| &ensp;&ensp;minor | `Object` | 輔系 {SD,Note} |
| &ensp;&ensp;master | `Object` | 碩士 {SD,Note} |
| &ensp;&ensp;doctor | `Object` | 博士 {SD,Note} |
| &ensp;Occupation | `Object[]` | 職業 |
| &ensp;&ensp;C | `String` | 公司() |
| &ensp;&ensp;O | `String` | 部門 |
| &ensp;&ensp;P | `String` | 職稱 |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 更新porfile
[Back to top](#top)

```
POST /chVisual
```

### Header examples
header-config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| userimage | `File` | 大頭貼 |
| account | `Obejct` | 學號(可以只有show或data) |
| &ensp;data | `String` | 學號(或用'account.data') |
| &ensp;show | `Boolean` | 是否顯示學號(或用'account.show') |
| username | `Object` | 名字 {show,data} |
| nickname | `Object` | 綽號 {show,data} |
| profile | `Object` | 自介 {show,data} |
| publicEmail | `Object` | 公開信相 {show,data} |
| office | `Object` | 公司電話 {show,data} |
| homephone | `Object` | 家裡電話 {show,data} |
| cellphone | `Object` | 手機 {show,data} |
| CC | `Object` | city and country {show,data} |
| web | `Object` | 個人部落格 {show,data} |
| facebook | `Object` | facebook {show,data} |
| Linkedin | `Object` | Linkedin {show,data} |
| education | `Object` | 學位 |
| &ensp;major | `Object` | 主修 |
| &ensp;&ensp;show | `Boolean` | 是否顯示(或用'education.major.show') |
| &ensp;&ensp;SD | `String` | school and department(或用'education.major.SD') |
| &ensp;&ensp;Note | `String` | 備註(或用'education.major.Note') |
| &ensp;double_major | `Object` | 雙主修 {show,SD,Note} |
| &ensp;minor | `Object` | 輔修 {show,SD,Note} |
| &ensp;master | `Object` | 碩士 {show,SD,Note} |
| &ensp;doctor | `Object` | 博士 {show,SD,Note} |
| Occupation | `Object[]` | 工作(因為array運算複雜，請直接給我完整的覆蓋) |
| &ensp;show | `Boolean` | 是否顯示 |
| &ensp;C | `String` | 公司 |
| &ensp;O | `String` | 部門 |
| &ensp;P | `String` | 職位 |

### Success response

#### Success response - `204`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - |  |  |

### Error response

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 帳號不存在 |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

## 顯示個人profile
[Back to top](#top)

```
POST /showVisual
```

### Success response

#### Success response - `201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `Object` | Visual資料(請用res.data.data拿到) |
| &ensp;userimage | `String` | 大頭貼(使用<code>&lt;img src={userimage}/&gt;</code>) |
| &ensp;account | `Object` | 學號 {data,show} |
| &ensp;username | `Object` | 名字 {data,show} |
| &ensp;nickname | `Object` | 綽號 {data,show} |
| &ensp;profile | `Object` | 自介 {data,show} |
| &ensp;publicEmail | `Object` | 公開信相 {data,show} |
| &ensp;office | `Object` | 公司電話 {data,show} |
| &ensp;homephone | `Object` | 家裡電話 {data,show} |
| &ensp;cellphone | `Object` | 手機 {data,show} |
| &ensp;CC | `Object` | city and country {data,show} |
| &ensp;web | `Object` | 個人部落格 {data,show} |
| &ensp;facebook | `Object` | facebook {data,show} |
| &ensp;Linkedin | `Object` | Linkedin {data,show} |
| &ensp;education | `Object` | 學位 |
| &ensp;&ensp;major | `Object` | 學士 |
| &ensp;&ensp;&ensp;show | `Boolean` | 是否公開 |
| &ensp;&ensp;&ensp;SD | `String` | school and department 學校&amp;系 |
| &ensp;&ensp;&ensp;Note | `String` | 備註, ex.在學、畢業 |
| &ensp;&ensp;double_major | `Object` | 雙主修 {show,SD,Note} |
| &ensp;&ensp;minor | `Object` | 輔系 {show,SD,Note} |
| &ensp;&ensp;master | `Object` | 碩士 {show,SD,Note} |
| &ensp;&ensp;doctor | `Object` | 博士 {show,SD,Note} |
| &ensp;Occupation | `Object[]` | 職業 |
| &ensp;&ensp;show | `Boolean` | 是否顯示 |
| &ensp;&ensp;C | `String` | 公司 |
| &ensp;&ensp;O | `String` | 部門 |
| &ensp;&ensp;P | `String` | 職稱 |

### Error response

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| description | `String` | 資料庫錯誤 |

# In/study

## 配對
[Back to top](#top)

給學長姊跟學弟妹留學配對的.xlsx檔，幫他們配對

```
POST /study_matching
```

### Header examples
config

```json
{ "content-type": "multipart/form-data" }
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| senior | `File` | 學長姐的.xlsx |
| junior | `File` | 學弟妹的.xlsx |

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| - | `File` | output.xlsx |

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
