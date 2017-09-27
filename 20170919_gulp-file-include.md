<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [fileInclude](#fileinclude)
	- [1. install](#1-install)
		- [1.1. npm, gulp](#11-npm-gulp)
		- [1.2. install fileinclude](#12-install-fileinclude)
	- [2. gulp.js](#2-gulpjs)
		- [2.1. gulp.callback](#21-gulpcallback)
		- [2.2. gulp.task](#22-gulptask)
			- [2.2.1. src](#221-src)
			- [2.2.2. option](#222-option)
			- [2.2.3. dest](#223-dest)
		- [2.3. watch](#23-watch)
	- [3. Folder structure](#3-folder-structure)
	- [4. include](#4-include)
		- [4.1. default](#41-default)
			- [4.1.1. html folder](#411-html-folder)
			- [4.1.2. include folder](#412-include-folder)
			- [4.1.3. @@include](#413-include)
			- [4.1.4. multiple](#414-multiple)
	- [5. var](#5-var)
		- [5.1. scenario_1](#51-scenario1)
			- [5.1.1. main.html](#511-mainhtml)
			- [5.1.2. text.html](#512-texthtml)
			- [5.1.3. result](#513-result)
		- [5.2. scenario_2](#52-scenario2)
			- [5.2.1. main.html](#521-mainhtml)
			- [5.2.2. text.html](#522-texthtml)
			- [5.2.3. result](#523-result)
	- [6. if](#6-if)
		- [6.1. scenario](#61-scenario)
			- [6.1.1. main.html, sub.html](#611-mainhtml-subhtml)
			- [6.1.2. text.html](#612-texthtml)
			- [6.1.3. result](#613-result)
	- [7. for](#7-for)
		- [7.1. scenario_1](#71-scenario1)
			- [7.1.1. main.html](#711-mainhtml)
			- [7.1.2. text.html](#712-texthtml)
			- [7.1.3. result.html](#713-resulthtml)
		- [7.2. scenario_2](#72-scenario2)
			- [7.2.1. main.html](#721-mainhtml)
			- [7.2.2. text.html](#722-texthtml)
			- [7.2.3. result](#723-result)
		- [7.3. scenario_3](#73-scenario3)
			- [7.3.1 main.html](#731-mainhtml)
			- [7.3.2 text.html](#732-texthtml)

<!-- /TOC -->


# fileInclude
변수, 조건문, 반복문 등을 사용할수 있는 gulp include api.  

## 1. install

### 1.1. npm, gulp
우선 `npm` 과 `gulp` 가 인스톨 되어 있는지 확인!  
`cmd` 창에서 아래 명령어를 입력한다  

`npm -v`
`gulp -v`

```
D:\경로>npm -v
2.15.9

D:\경로>gulp -v
[10:01:45] CLI version 1.2.2
```
버전이 각각 나오지 않는다면 `npm` 과 `gulp` 를 설치 하자. 
설치 과정은 인터넷으로!

`npm` 과 `gulp` 과 정상 설치 되어 있다면  
테스트로 `D:\@Document\fileinclude` 라는 폴더를 생성한다.   
cmd 에서 해당 폴더의 경로로 이동한 후 아래 명령어를 입력한다.

`npm init`

```

D:\@Document\fileinclude>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (fileinclude)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\@Document\fileinclude\package.json:

{
  "name": "fileinclude",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) y
```
대충 이런 형태로 나온다면 성공한것이다.  
`npm init` 은 해당 프로젝트에 npm에 관한 기본설정을 하는 것이다.  
  
위 과정이 끝나면 프로젝트 폴더에는 `package.json` 폴더가 생성 된다.  


다음으로는 `npm install gulp --save-dev` 를 입력하여 `npm init`으로 만들어진 `package.json` 파일에  gulp 모듈에 대한 정보를 모두 기록하도록 한다.  
그래야 프로젝트를 다른 사람과 협업할때 동일한 환경을 구성할수 있다.  
  
`npm install gulp --save-dev`  
  
```
D:\@Document\fileinclude>npm install gulp --save-dev
npm WARN package.json fileinclude@1.0.0 No description
npm WARN package.json fileinclude@1.0.0 No repository field.
npm WARN package.json fileinclude@1.0.0 No README data
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
gulp@3.9.1 node_modules\gulp
├── interpret@1.0.4
├── pretty-hrtime@1.0.3
├── deprecated@0.0.1
├── archy@1.0.0
├── minimist@1.2.0
├── tildify@1.2.0 (os-homedir@1.0.2)
├── semver@4.3.6
├── v8flags@2.1.1 (user-home@1.1.1)
├── chalk@1.1.3 (escape-string-regexp@1.0.5, supports-color@2.0.0, ansi-styles@2.2.1, strip-ansi@3.0.1, has-ansi@2.0.0)
├── orchestrator@0.3.8 (stream-consume@0.1.0, sequencify@0.0.7, end-of-stream@0.1.5)
├── gulp-util@3.0.8 (array-differ@1.0.0, array-uniq@1.0.3, lodash._reescape@3.0.0, lodash._reinterpolate@3.0.0, beeper@1.1.1, lodash._reevaluate@3.0.0, object-assign@3.0.0, dateformat@2.0.0, replace-ext@0.0.1, has-gulplog@0.1.0
, fancy-log@1.3.0, vinyl@0.5.3, gulplog@1.0.0, lodash.template@3.6.2, through2@2.0.3, multipipe@0.1.2)
├── vinyl-fs@0.3.14 (strip-bom@1.0.0, defaults@1.0.3, vinyl@0.4.6, graceful-fs@3.0.11, mkdirp@0.5.1, through2@0.6.5, glob-stream@3.1.18, glob-watcher@0.0.6)
└── liftoff@2.3.0 (lodash.isplainobject@4.0.6, lodash.isstring@4.0.1, lodash.mapvalues@4.6.0, rechoir@0.6.2, extend@3.0.1, flagged-respawn@0.3.2, fined@1.1.0, resolve@1.4.0, findup-sync@0.4.3)

D:\@Document\fileinclude>
```
    
이 과정을 끝내면 폴더 구조는 아래와 같다
```
root (fileinclude)
└── node_modules
    ├── .bin
    └── gulp
```


### 1.2. install fileinclude
이제 fileinclude를 설치 해보자.  
해당 폴더에서 cmd 를 열고 아래 명령어를 입력한다.  

`npm install gulp-file-include`  

  
```

D:\@Document\fileinclude>npm install gulp-file-include
gulp-file-include@1.2.0 node_modules\gulp-file-include
├── balanced-match@1.0.0
├── flatnest@1.0.0
├── extend@3.0.1
├── through2@2.0.3 (xtend@4.0.1, readable-stream@2.3.3)
├── concat-stream@1.6.0 (inherits@2.0.3, typedarray@0.0.6, readable-stream@2.3.3)
└── gulp-util@3.0.8 (array-differ@1.0.0, beeper@1.1.1, array-uniq@1.0.3, lodash._reescape@3.0.0, object-assign@3.0.0, lodash._reinterpolate@3.0.0, lodash._reevaluate@3.0.0, dateformat@2.0.0, replace-ext@0.0.1, minimist@1.2.0, h
as-gulplog@0.1.0, fancy-log@1.3.0, vinyl@0.5.3, gulplog@1.0.0, chalk@1.1.3, lodash.template@3.6.2, multipipe@0.1.2)

D:\@Document\fileinclude>

```
> [gulp-file-include 페이지][1]  

**하지만  실행을 담당하는 파일은 본인이 직접 만들어야 한다.**   
해당 파일을 생성하는 과정은 아래를 참고.  
  
## 2. gulp.js
설치를 했다면 폴더 구조는 아래와 같을 것이다.

```
root (fileinclude)
├── node_modules
│    ├── .bin
│    ├── gulp
│    └── gulp-file-include
└── package.json
```
  
  
`root` 에  `gulpfile.js` 생성한다.  
단순 javascript 파일이며, `gulpfile` 이란 파일명은 마음대로 작성해도 문제 없다.  
단지 파일명을 보면 해당 파일이 gulp의 이벤트를 작성한 파일이라는것을 알수 있는것이 좋다  
  
```
root (fileinclude)
├── node_modules
│    ├── .bin
│    ├── gulp
│    └── gulp-file-include
├── package.json
└── gulpfile.js
```
  
그럼 이제 `gulpfile.js`에 적어야할 이벤트들을 알아보자   
`gulpfile.js`을 atome 으로 열어 아래 순서 대로 작성한다.  

### 2.1. gulp.callback
`gulp` 를 먼저 호출한다.  

```javascript
var gulp = require('gulp');
```
  

그 후 설치한 `gulp-file-include`을 호출하자
```javascript
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
```
  
이제 실제로 fileinclude 를 실행하고 인클루드시키고 합쳐진 페이지를 생성해야 한다.  
하지만 그전에 폴더 구조를  [3. Folder structure](#3-folder-structure) 에서 확인 하고 아래를 진행하자  


### 2.2. gulp.task

gulp 도 fileinclude 도 호출하였다.  
이제는 실행해야 하는 과정, 즉 task 를 적어보자.  
  
전체 코드는 아래와 같다.  
```javascript
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
  

gulp.task('fileinclude', function() {
  gulp.src(['markup/html/*.*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./markup/result'));
});

```

#### 2.2.1. src
대상을 지정한다.

```javascript
gulp.src(['markup/html/*.*'])
```
> `/*/` 모든 폴더, 하지만 우린 중간 폴더가 없다. 삭제!  
> `*.*` 모든 파일명, 파일형태  
  
  
#### 2.2.2. option


```javascript
.pipe(fileinclude({
  prefix: '@@',
  basepath: '@file'
}))
```

`prefix: '@@'` :  fileinclude 내부에 사용하는 언어를 구분하는 옵션 이다.  
if, loop, for 등을 사용할때 gulp include 의 js 인지  실제 웹에서 사용하는 js 인지를 구분하기 위해서다.  
  
`basepath: '@file' ` :  링크나 파일간 호출에서 기본이 되는 경로를  호출한 파일 기준으로 하겠다는 옵션이다.  
다른 옵션으로 `@root` 로 할경우 프로젝트 최상위 폴더가 기본이 된다.  

#### 2.2.3. dest
  
```javascript
.pipe(gulp.dest('./markup/result'));
```
   
합쳐진 파일 (`html` + `include`) 을 생성하는 최종 폴더 `result` 설정한다.  
그러므로 브라우저에는 result 폴더에 있는 파일을 열어두고 작업을 진행 하면 된다.


### 2.3. watch

파일을 매번 수정할때 마다 `fileinclude` 를 실행하기 보다는 `watch`에 `fileinclude`를 사용하는것이 효과적이다.  


```javascript
gulp.task('watch', function() {
	// 할일
})
```
  
> task 에 watch 를 호출한다.  
  
```javascript
gulp.watch(['./markup/include/*.html', './markup/html/**/*.html'], ['fileinclude']);
```

> 



최종 코드는 아래와 같다.  

```javascript
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
  

gulp.task('watch', function() {
  gulp.watch(['./markup/include/*.html', './markup/html/**/*.html'], ['fileinclude']);
});

gulp.task('fileinclude', function() {
  gulp.src(['markup/html/*.*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./markup/result'));
});

```
  
차후 sass, spritesimith 나 fileinclude 를 동시에 사용 해야 할경우 아래와 같이 작성하면 된다


```javascript
gulp.task('watch', function() {
  gulp.watch(['./assets/scss/*.scss', './assets/scss/**/*.scss'], ['sass']);
  gulp.watch(['./markup/include/*.html', './markup/html/**/*.html'], ['fileinclude']);
  gulp.watch(['./assets/sprite/*.png'], ['sprite', 'sass']);
});
```




## 3. Folder structure
폴더 구조는 아래와 같다.  
  
```
root (fileinclude)
└── markup
    ├── html
    ├── include
    └── result
```
  
**html**  
> 실제 바디가 될 html 파일  
  
**include**  
> include 될 파일을 모아두는 폴더  
  
**result**  
> html과 include를 합쳐 만들어진 결과물을 보여줄 result 폴더  



## 4. include
include 를 하기 위해서는 파일들이 존재해야 한다.  
단순 연결, 다중 연결 방법을 알아 보자  


### 4.1. default
간단한 사용법 부터 알아보자.  
불러올 곳. 파일에서 아래코드로  불러올 파일을 호출한다.  
  
`@@include('대상')`  
  
`html`, `include` 폴더에 아래 파일을 생성하자.  


#### 4.1.1. html folder
`markup` -> `html` 폴더에 아래 파일을 생성한다.  
파일명은 `main.html` 

```html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>fileinclude</title>
</head>
<body>
	
</body>
</html>
```
> main.html

#### 4.1.2. include folder
`markup` -> `include` 폴더에 아래 파일을 생성한다.  
파일명은 `text.html`  

```html
<p>해더</p>
```
>  text.html


#### 4.1.3. @@include
파일 생성을 완료 하였다면 아래와 같은 구조가 되어 있을것이다.  

```
root (fileinclude)
├── node_modules
│    ├── .bin
│    ├── gulp
│    └── gulp-file-include
├── markup
│    ├── html
│    │   └── main.html
│    ├── include
│    │   └── text.html
│    └── result
├── package.json
└── gulpfile.js
```

`markup` 폴더 내부에는 `main.html` 과 `text.html` 이 생성 되었고  
`main.html` 에 인클루드 시켜보자!  


```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>
  @@include('../include/text.html')
  
</body>
</html>

```

지금은 단순 `<body>` 내부에 `text.html` 파일의 내용을 불러오는 코드이다  
위 내용을 작성하고 파일 저장 후 gulp fileinclude 를 실행하자.   
프로젝트 폴더에서 cmd 를 실행하고 아래 코드를 입력하자.  

```
D:\@Document\fileinclude>gulp fileinclude
[11:18:29] Using gulpfile D:\@Document\fileinclude\gulpfile.js
[11:18:29] Starting 'file'...
[11:18:29] Finished 'file' after 7.68 ms

D:\@Document\fileinclude>
```
user, starting, finished 가 정상적으로 진행되었다면 `result`폴더에 `main.html` 파일이 생성 될것이다  

```
root (fileinclude)
├── node_modules
│    ├── .bin
│    ├── gulp
│    └── gulp-file-include
├── markup
│    ├── html
│    │   └── main.html
│    ├── include
│    │   └── text.html
│    └── result
│        └── main.html
├── package.json
└── gulpfile.js
```
  
생성된 파일의 내용을 보면 아래와 같이 결합되어 있는것을 볼수 있다.  
  
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>
  <p>해더</p>
  
</body>
</html>
```
  
끝.

#### 4.1.4. multiple
그럼 본격적으로 여러 등분하여 써보자.  
참고로 `watch` 로 걸어 두고 사용 중 신규 파일을 생성 했다면 watch 종료 후 다시 실행해야 한다.  

```
root (fileinclude)
└── markup
    └── html
       └── main.html
```
main.html 내용은 아래와 같다.  

```html
@@include('../include/header.html')
@@include('../include/text.html')
@@include('../include/footer.html')
```

include 에는 각각 해더와 footer 를 가진 폴더를 생성해준다.
```html
root (fileinclude)
└── markup
     └── include
         ├── header.html
         ├── footer.html
         └── text.html
```

## 5. var
fileInclude는 변수, 매개변수를 사용할수 있다.
이는 클래스명으로 사용하거나 조건문 반복문에 트리거로도 사용할 수 있다.
우선 변수, 매개변수로 사용하는것부터 알아보자.

### 5.1. scenario_1
main.html 에서 text.html 로  매개변수를 던져주고 이를 <p> 의 컨텐츠 와 클래스명으로 사용해보자

#### 5.1.1. main.html

```html
@@include('../include/header.html')

@@include('../include/text.html', {
  "class": "t_class",
  "text": "t_text"
})

@@include('../include/footer.html')

```

- 매개변수를 배열 형태로 던진다.
- "" 로 감싸야 한다.

#### 5.1.2. text.html

```html
<p class="@@class">@@text</p>
```

배열형태로 주었기 때문에 `@@` 문자열 뒤에 키값을 넣어주면 값이 어느페이지 에서 변하던 `text.html` 은 그대로 가져다 쓸 수 잇다.


#### 5.1.3. result


```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>

<p class="t_class">t_text</p>

</body>
</html>

```

추가 하자면, `html` 폴더에서 `main.html`을 복사하여 `sub.html` 을 만들고 배열의 내용을 바꾸어 테스트해보자.

### 5.2. scenario_2
text.html 내부에 텍스트와 main.html 에서 변수로 던져준 값을 합쳐서 텍스트로 사용하자.


#### 5.2.1. main.html

```html
@@include('../include/header.html')

@@include('../include/text.html', {
  "class": "t_class",
  "text": "t_text"
})

@@include('../include/footer.html')

```
이전과 동일 

#### 5.2.2. text.html

```html
<p class="@@class">@@text테스트</p>
```

단순 `@@text` 뒤에 사용하고자하는 텍스트를 쓰기만 하면 된다.  


#### 5.2.3. result

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>
<p class="t_class">t_text_테스트</p>
</body>
</html>
```

단순 텍스트 결합은 문제 없이 이루어진다.  
단지 if, for 가 들어가면 문자간 결합이 살짝 신경써줘야 한다.  
다음 예로 알아보자.

## 6. if
조건문 이다. 매우 유용하다.  
일단 드리대보자.  
  
### 6.1. scenario
`main.html` 과 `sub.html` 에서 던져주는 매개변수값에 따라 `text.html` 의 태그를 바꾸어서 사용하자.


#### 6.1.1. main.html, sub.html

**main.html**  
> test_val에  `ture` 라는 문자열을 담아 보낸다.  

```html
@@include('../include/header.html')
@@include('../include/text.html', { "test_val": true })
@@include('../include/footer.html')
```


**sub.html**  
> test_val에  `false` 라는 문자열을 담아 보낸다.  

```html
@@include('../include/header.html')
@@include('../include/text.html', { "test_val": false })
@@include('../include/footer.html')
```

#### 6.1.2. text.html

`text.html` 에서는 조건에 따라 노출될 문구를 `@@if(){}` 에 작성해둔다

```html
@@if( test_val === true ){
  <p>ture 입니다.</p>
}
@@if( test_val === false ){
  <div>false 입니다.</div>
}
```

#### 6.1.3. result
> 이제 프로젝.....그만하자...이제 알아서 할수 있잖아..
> gulp fi....

`main.html`, `sub.html` 을 만들어서 돌렸기때문에 `result` 폴더에도 두개의 결과물이 있다.
내용은 아래와 같다.

**main.html**
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>

  <p>ture 입니다.</p>



</body>
</html>
```
  
  
**sub.html**
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>


  <div>false 입니다.</div>


</body>
</html>
```

그런대 한가지 사소한 문제점이 발생한다.  
바로 줄넘김.  
이부분은 `text.html` 에서 `if` 간의 줄넘김을 그대로 가져와서 그렇다.  
아래 코드처럼 바꿔보자!

```html
@@if( test_val === true ){
  <p>ture 입니다.</p>
}@@if( test_val === false ){
  <div>false 입니다.</div>
}
```

그러면 같은 줄에 `p` 와 `div` 가 나오긴 하지만 위아래로 불필요한 줄넘김이 있는것을 볼수 있다.  

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>

  <p>ture 입니다.</p>


</body>
</html>
```

이는 `text.html` 에서 `@@if` 와 `}` 부분의 뒤 엔터를 공간으로 보기 때문이다.  
아래처럼 바꿔주면 없어진다.

```html
@@if( test_val === true ){ <p>ture 입니다.</p> }@@if( test_val === false ){ <div>false 입니다.</div> }
```

처음부터 한줄로 쓰기 보다는 개행상태로 작업을 진행하고 나중에 한줄로 만드는것을 추천한다.  
> 한줄로 만드는 단축키  CTRL + j (editor - lines - Join Lines)

## 7. for
반복문이다.  
  
### 7.1. scenario_1
li를 한개만 만든후 for 문을 돌려 10개 생성.  

#### 7.1.1. main.html
main 에서는 호출만 한다.  
```html
@@include('../include/header.html')
@@include('../include/text.html')
@@include('../include/footer.html')
```
#### 7.1.2. text.html

```html
<ul>
  @@for( var i = 0; i < 10; i++) {
  <li>집에가고 싶다</li>
  }
</ul>
```

`@@for( 초기화; 조건; 증감 ) {}`  
    
기본 형태는 위와 같고 `{}` 안에 반복할 내용을 담고 있다    
    
`var i = 0`  i 를 생성하고 0 을/ 시작점으로 할당한다  
`i < 10`  i 가 10보다 작을때까지 조건을 건다. 0~9 까지 돌기 때문에 10개가 돈다  
`i++` 한번 실행할때 마다 i 를 1씩 증가시킨다.  
  
  
  
#### 7.1.3. result.html
  
**cmd - gulp f...**  
  
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>
<ul>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
  <li>집에가고 싶다</li>
  
</ul>

</body>
</html>

```
li 간 여백을 줄이고 싶다면???  
text.html 을 압축하자!  

### 7.2. scenario_2
1번 li만 클래스명(active)를 가지자.   

#### 7.2.1. main.html

```html
@@include('../include/header.html')
@@include('../include/text.html')
@@include('../include/footer.html')
```
......뭐없다...

#### 7.2.2. text.html

```html
<ul>
  @@for( var i = 0, j = 'active'; i < 10; i++, j = '') {
      <li class="`+j+`">`+i+`</li>
  }  
</ul>
```

- i 와 j 는 변수로서 사용하며 i 는 인덱스, j 는 클래스 명이다.  
- j는 한번만 사용 후 바로 초기화하여 더 클래스명을 삽입하지 못하도록 막는다.  
- fileinclude 는 for 의 i 를 if 조건문으로 던져주지 못한다. 최대 단점이기도 하다.  


#### 7.2.3. result

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>fileinclude</title>
</head>
<body>
<ul>
  
      <li class="active">0</li>
  
      <li class="">1</li>
  
      <li class="">2</li>
  
      <li class="">3</li>
  
      <li class="">4</li>
  
      <li class="">5</li>
  
      <li class="">6</li>
  
      <li class="">7</li>
  
      <li class="">8</li>
  
      <li class="">9</li>
    
</ul>

</body>
</html>
```

### 7.3. scenario_3
  main.html 에서 던지는 **배열 갯수** 만큼 li 로 목록을 만들자.  
  그리고 해당 배열의 값을들 목록에 노출시키자.  

#### 7.3.1 main.html

```html
@@include('../include/header.html')
@@include('../include/text.html', {
  "step_class": "step-3",
  "step_title": "교환 단계",
  "step_contents": ["교환요청", "수거정보<br> 입력", "교환비용 <br>결제", "교환요청 <br>완료"]
})
@@include('../include/footer.html')
```

#### 7.3.2 text.html

```html
<h2 class="xe-sr-only">@@step_title</h2>

<div class="step-ui @@step_class">
 <ul>
   @@for ( var i = 0; i < step_contents.length; i++) {
     <li>
       <span>0`+[i+1]+` </span>`+step_contents[i]+` 
     </li>
   }
 </ul>
</div>
```

---

---


이 가이드는 누구나 수정 가능하다. 


[1]: https://www.npmjs.com/package/gulp-file-include "gulp-file-include"