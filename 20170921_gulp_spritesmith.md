<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [sprite image](#sprite-image)
	- [1. install](#1-install)
		- [1.1. npm, gulp](#11-npm-gulp)
		- [1.2. install spritesmith](#12-install-spritesmith)
	- [2. gulp.js](#2-gulpjs)
		- [2.1. gulp.callback](#21-gulpcallback)
		- [2.2. gulp.task](#22-gulptask)
			- [2.2.1. gulp.task.src](#221-gulptasksrc)
			- [2.2.2. gulp.task.spritesmith](#222-gulptaskspritesmith)
	- [3. Folder structure](#3-folder-structure)
	- [4. gulp sprite](#4-gulp-sprite)

<!-- /TOC -->


#sprite image
스플라이트 이미지를 운영하기 위해 gulp.spritesmith 사용해보았다.  
사용자는 여러개의 이미지를 한폴더에 모아두면 gulp.spritesmith를 통해 한개의 sprite image 로 만들어 주며 css 또는 scss 로 좌표값을 생성해준다.   
그외에도 레티나용 이미지도 생성 가능하다.  
  
  
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
[09:35:14] CLI version 3.9.1
```
버전이 각각 나오지 않는다면 `npm` 과 `gulp` 를 설치 하자. 
설치 과정은 인터넷으로!

`npm` 과 `gulp` 과 정상 설치 되어 있다면  
테스트로 `D:\@Document\spritesmith` 라는 폴더를 생성한다.   
cmd 에서 해당 폴더의 경로로 이동한 후 아래 명령어를 입력한다.

`npm init`

```

D:\@Document\spritesmith>npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (spritesmith)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\@Document\spritesmith\package.json:

{
  "name": "spritesmith",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes)

D:\@Document\spritesmith>
```
대충 이런 형태로 나온다면 성공한것이다.  
`npm init` 은 해당 프로젝트에 npm에 관한 기본설정을 하는 것이다.  
  
위 과정이 끝나면 프로젝트 폴더에는 `package.json` 폴더가 생성 된다.  


다음으로는 `npm install gulp --save-dev` 를 입력하여 `npm init`으로 만들어진 `package.json` 파일에  gulp 모듈에 대한 정보를 모두 기록하도록 한다.  
그래야 프로젝트를 다른 사람과 협업할때 동일한 환경을 구성할수 있다.  
  
`npm install gulp --save-dev`  
  
```

D:\@Document\spritesmith>npm install gulp --save-dev

npm WARN package.json spritesmith@1.0.0 No description
npm WARN package.json spritesmith@1.0.0 No repository field.
npm WARN package.json spritesmith@1.0.0 No README data
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
gulp@3.9.1 node_modules\gulp
├── interpret@1.0.4
├── pretty-hrtime@1.0.3
├── deprecated@0.0.1
├── archy@1.0.0
├── minimist@1.2.0
├── semver@4.3.6
├── v8flags@2.1.1 (user-home@1.1.1)
├── tildify@1.2.0 (os-homedir@1.0.2)
├── chalk@1.1.3 (escape-string-regexp@1.0.5, supports-color@2.0.0, ansi-styles@2.2.1, has-ansi@2.0.0, strip-ansi@3.0.1)
├── orchestrator@0.3.8 (stream-consume@0.1.0, sequencify@0.0.7, end-of-stream@0.1.5)
├── gulp-util@3.0.8 (array-differ@1.0.0, lodash._reescape@3.0.0, lodash._reevaluate@3.0.0, lodash._reinterpolate@3.0.0, beeper@1.1.1, array-uniq@1.0.3, object-assign@3.0.0, replace-ext@0.0.1, dateformat@2.2.0
, fancy-log@1.3.0, vinyl@0.5.3, gulplog@1.0.0, lodash.template@3.6.2, through2@2.0.3, multipipe@0.1.2)
├── vinyl-fs@0.3.14 (strip-bom@1.0.0, defaults@1.0.3, vinyl@0.4.6, graceful-fs@3.0.11, mkdirp@0.5.1, through2@0.6.5, glob-stream@3.1.18, glob-watcher@0.0.6)
└── liftoff@2.3.0 (lodash.isplainobject@4.0.6, lodash.isstring@4.0.1, lodash.mapvalues@4.6.0, rechoir@0.6.2, extend@3.0.1, flagged-respawn@0.3.2, fined@1.1.0, resolve@1.4.0, findup-sync@0.4.3)

D:\@Document\spritesmith>
```
    
이 과정을 끝내면 폴더 구조는 아래와 같다
```
root (spritesmith)
└── node_modules
    ├── .bin
    └── gulp
```

### 1.2. install spritesmith
이제 spritesmith 설치 해보자.  
gulp.spritesmith 홈페이지를 들어가면 아래 코드를 이동하여 설치 하라고 안내해준다.  
  
`npm install my-engine-smith@latest --save-dev`  
  
오류가 난다면 위 코드로 설치하라.  
  
`npm install gulp.spritesmith --save-dev`
  
  
  
```
D:\@Document\spritesmith>npm install gulp.spritesmith --save-dev

npm WARN package.json spritesmith@1.0.0 No description
npm WARN package.json spritesmith@1.0.0 No repository field.
npm WARN package.json spritesmith@1.0.0 No README data
gulp.spritesmith@6.5.1 node_modules\gulp.spritesmith
├── underscore@1.8.3
├── minimatch@3.0.4 (brace-expansion@1.1.8)
├── through2@2.0.3 (xtend@4.0.1, readable-stream@2.3.3)
├── url2@1.0.4 (url@0.10.2)
├── gulp-util@3.0.8 (array-differ@1.0.0, lodash._reevaluate@3.0.0, lodash._reescape@3.0.0, array-uniq@1.0.3, beeper@1.1.1, lodash._reinterpolate@3.0.0, object-assign@3.0.0, replace-ext@0.0.1, dateformat@2.2.0, minimist@1.2.0, h
as-gulplog@0.1.0, fancy-log@1.3.0, vinyl@0.5.3, gulplog@1.0.0, chalk@1.1.3, lodash.template@3.6.2, multipipe@0.1.2)
├── spritesheet-templates@10.2.1 (underscore@1.4.4, json-content-demux@0.1.3, handlebars-layouts@1.1.0, underscore.string@3.0.3, handlebars@4.0.10)
├── spritesmith@3.1.1 (semver@5.0.3, concat-stream@1.5.2, layout@2.2.0, pixelsmith@2.1.1)
└── async@2.1.5 (lodash@4.17.4)

D:\@Document\spritesmith>
```
> [gulp.spritesmith 페이지][1]  

**하지만  실행을 담당하는 파일은 본인이 직접 만들어야 한다.**   
해당 파일을 생성하는 과정은 아래를 참고.  

## 2. gulp.js
spritesmith를 설치 했다면 폴더 구조는 아래와 같을 것이다.   
  
```
root (spritesmith)
├── node_modules
│    ├── .bin
│    ├── gulp
│    └── gulp.spritesmith
└── package.json
```
  
  
`root` 에  `gulpfile.js` 생성한다.  
단순 javascript 파일이며, `gulpfile` 이란 파일명은 마음대로 작성해도 문제 없다.  
단지 파일명을 보면 해당 파일이 gulp의 이벤트를 작성한 파일이라는것을 알수 있는것이 좋다  
  
```
root (spritesmith)
├── node_modules
│    ├── .bin
│    ├── gulp
│    └── gulp.spritesmith
├── package.json
└── gulpfile.json
```
  
그럼 이제 `gulpfile.js`에 적어야할 이벤트들을 알아보자   
`gulpfile.js`을 atome 으로 열어 아래 순서 대로 작성한다.  


### 2.1. gulp.callback
`gulp` 를 먼저 호출한다.  

```javascript
var gulp = require('gulp');
```
  
  
그 후 설치한 `gulp.spritesmith`을 호출하자  

```javascript
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
```
  
이제 실제로 gulp.spritesmith 를 실행하고 sprite image 를 만들수 있다  
하지만 그전에 폴더 구조를  [3. Folder structure](#3-folder-structure) 에서 확인 하고 아래를 진행하자  

### 2.2. gulp.task
task 를 추가하자.  
전체 코드는 아래와 같다.  


```javascript
gulp.task('watch', function() {
  gulp.watch(['./sprite/*.png'], ['sprite', 'sass']);
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('./sprite/*.png').pipe(spritesmith({
    imgName: 'shop_sprite.png',
    imgPath: 'img/shop_sprite.png',
    cssName: '_sprite.scss',
    algorithm: 'top-down',
    padding: 10
  }));
 
  var imgStream = spriteData.img
    .pipe(gulp.dest('./img/'));

  var cssStream = spriteData.css
    .pipe(gulp.dest('./css/'));

});
```
  
spritesmith 를 실행하는 방법은 `cmd` 에서 `gulp sprite` 라고 입력하면 된다.  
`sprite` 란 단어는 아래 task 에서 적어준 단어이며 임의로 변경가능하다  

```javascript
gulp.task('sprite', function () {})
```	
  
cmd 에서는 아래와 같이 보이면 성공이다  
  
```
D:\@Document\spritesmith>gulp sprite

[17:45:10] Using gulpfile D:\@Document\spritesmith\gulpfile.js
[17:45:10] Starting 'sprite'...
[17:45:10] Finished 'sprite' after 7.86 ms

D:\@Document\spritesmith>
```

	
	
#### 2.2.1. gulp.task.src  
생성할 이미지의 재료이미지 경로, 파일형태를 말한다.  
  
```javascript
gulp.src('./assets/sprite/*.png')
```
#### 2.2.2. gulp.task.spritesmith
옵션을 추가하는 부분이다.  
  
```javascript
spritesmith();
```
  
매개변수로 주는 목록은 옵션과 값이다.  
  
```javascript
imgName: 'shop_sprite.png',
imgPath: 'img/shop_sprite.png',
cssName: '_sprite.scss',
algorithm: 'top-down',
padding: 10
```
  
- imgName : sprite 이미지의 파일명, 파일형태  
- imgPath : 경로. 파일명은 imgName 의 것을 사용  
- cssName : css/scss 의 파일명, 파일형태. css 사용할 경우  `sprite.css`  
- algorithm : 정렬 방식  
- padding : 이미지간 간격  
  
> 그외에 다수의 옵션이 있으므로 찾아서 써보는것도 좋다. 특히 algorithm!

```javascript
var imgStream = spriteData.img
	.pipe(gulp.dest('./img/'));

var cssStream = spriteData.css
	.pipe(gulp.dest('./css/'));
```
- 만들어질 sprite 이미지와 css/scss 가 저장 할 곳의 경로를 지정해준다.  


## 3. Folder structure
폴더 구조는 아래와 같이 img, sprite, css 를 추가 한다  
  
```
root (fileinclude)
├── css
├── img
└── sprite
```
  
**img**  
> sprite가 생성되어 저장되는곳. 페이지 전체 이미지 폴더이기도 하다.
  
**sprite**  
> sprite재료 이미지를 모아두는 폴더.  
  
**css**  
> spriteImage 의 좌표값을 받은 css 또는 scss가 저장 되는 위치
> scss 쓴다면면 css 로 변환후 저장할 폴더를 따로 설정하는것이 좋다


## 4. gulp sprite
- 위 과정이 모두 오류 없이 실행하였다면 img 폴더와 css 폴더에 파일이 생성 되었을것이다.  
- css 의 경우 파일명을 클래스명으로 사용한다.  
- 참고로 ico- 로 클래스명이 시작한다.  
- scss 나 css 는 2차 가공하여 사용해도 무방하다. 
- 이미지가 추가되거나 삭제 될때 기존의 sprite를 유지하고 추가 제가 하는방법은...없다.

[1]: https://www.npmjs.com/package/gulp.spritesmith "gulp.spritesmith"
