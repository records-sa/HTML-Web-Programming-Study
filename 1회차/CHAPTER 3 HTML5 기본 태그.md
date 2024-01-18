# CHAPTER 3. HTML5 기본 태그

# 01. 글자 태그

웹 페이지는 글자 태그의 비중이 가장 큽니다. 글자 태그는 종류가 매우 다양하므로 이 절에서 설명하는 분류 기준으로 기억하면 많은 도움이 될 것입니다.

## 1. 제목과 본문 글자 태그

문서에서 제목은 여섯 가지 제목 글자 태그로 표현합니다. 제목 글자 태그에서 h는 heading(제목)을 의미합니다. 본문 글자를 입력할 때는 p, br, hr 태그를 사용합니다. p 태그에서 p는 paragraph(단락), br은 break(줄 바꿈), hr은 horizontal rule(수평 줄)을 의미합니다.

- 제목 글자
    - h1: 첫 번째로 큰 제목 글자 생성
    - h2: 두 번째로 큰 제목 글자 생성
    - h3: 세 번째로 큰 제목 글자 생성
    - h4: 네 번째로 큰 제목 글자 생성
    - h5: 다섯 번째로 큰 제목 글자 생성
    - h6: 여섯 번째로 큰 제목 글자 생성
- 본문 글자
    - p: 본문 단락 생성
    - br: 줄 바꿈
    - hr: 수평 줄 삽입

### 기본 예제 3-1. 제목 표현

간단하게 제목 글자 태그를 활용해 보겠습니다. 여기서는 h1이 가장 큰 제목 태그고, h6이 가장 작은 제목 태그라는 것만 기억하면 됩니다. 웹 브라우저에 따라 기본 글꼴이 달라서 출력되는 글꼴도 다릅니다. 또 같은 웹 브라우저라도 운영체제에 따라 기본 글꼴이 다를 수 있습니다.

```html
<!DOCTYPE html>
<html>
<head>
	<title>HTML5 Text Basic Page</title>
</head>
<body>
	<h1>제목 글자 태그 1</h1>
	<h2>제목 글자 태그 2</h2>
	<h3>제목 글자 태그 3</h3>
	<h4>제목 글자 태그 4</h4>
	<h5>제목 글자 태그 5</h5>
	<h6>제목 글자 태그 6</h6>
</body>
</html>
```

### 기본 예제 3-2. 본문 단락 구분

앞서 다룬 제목 글자 대그와 본문 글자 태그를 사용해 보겠습니다. 여기에서는 지면상 p 태그 내부에 짧은 글자를 입력했지만, 실습을 진행할 때는 예제 소스처럼 글자를 많이 입력해 주세요. 각 p 태그가 하나의 단락이라는 점을 주의해서 살펴봅시다.

```html
<!DOCTYPE html>
<html>
<head>
	<title>HTML5 Text Basic Page</title>
</head>
<body>
	<h1>제목 글자</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	<p>Phasellus sem tortor, volutpat vitae euismod eget</p>
</body>
</html>
```

### 기본 예제 3-3. 제목과 본문 태그의 활용

제목과 본문 태그를 모두 활용해서 간단한 문서를 작성해 보겠습니다. 주의할 점은 br 태그는 다른 글자 태그 내부에 삽입할 수 있지만 hr 태그는 안 된다는 것입니다. 웹 브라우저가 유연하게 대처하므로 hr 태그가 다른 글자 태그 내부에 있어도 정상적으로 출력됩니다. 하지만 이는 웹 표준에 어긋납니다.

```html
<!DOCTYPE html>
<html>
<head>
	<title>HTML5 Text Basic Page</title>
</head>
<body>
	<h1>홍차</h1>
	<hr>
	<h1>정의</h2>
	<p>홍차는 백차, 녹차, 우롱차보다 더 많이 발효된 차의 일종이다. 동양에서는 찻물의 빛이 붉기 때문에 홍차라고 부르지만, 서양에서는 찻잎의 색깔 때문에 'black tea'라고 부른다.</p>
	<br>
	<h1>등급</h2>
	<p>홍차는 여러 가지로 등급이 매겨진다. 일반적으로 찻잎의 모양에 따른 등급과 가공 상태에 따른 등급을 조합하여 표시한다.</p>
	<p>- 브로큰 페코</p>
	<p>- 브로큰 페코 수숑</p>
	<p>- 브로큰 오렌지 페고 패닝</p>
</body>
</html>
```

- 특수 문자 표기
    
    공백, 괄호 등은 다음 특수 문자를 사용해 화면에 표시할 수 있습니다.
    
    ```html
    공백: &nbsp;
    <: &lt;
    >: &gt;
    &: &amp;
    ```
    
    예를 들어 HTML 태그 내부에 공백 3개를 연속으로 입력한 후 파일을 실행하면 연속한 공백 여러 개를 공백 1개로 인식하기에 공백 3개가 제대로 표시되지 않습니다. &nbsp;(non-breaking space)를 사용하면 모든 공백을 표시합니다.
    
    ```html
    <body>
    	<h1>공백이   있는   글자</h1>
    	<h1>공백이&nbsp;&nbsp;&nbsp;있는&nbsp;&nbsp;&nbsp;글자</h1>
    </body>
    ```
    

## 2. 앵커 태그

HTML(HyperText Markup Language)에서 가장 중요한 글자는 하이퍼텍스트를 의미하는 H입니다. 하이퍼텍스트는 사용자 선택에 따라 관련한 특정 정보로 이동할 수 있도록 조작된 문서를 의미합니다. HTML 페이지가 조직화된 문서 형태가 될 수 있는 이유는 a 태그 덕분입니다. a 태그는 anchor를 의미하며, 다른 웹 페이지나 웹 페이지 내부의 특정 위치로 이동할 때 사용합니다.

a 태그만으로는 어떤 웹 페이지로 이동할지 웹 브라우저에 알려 줄 수 없어 href 속성을 사용해 알려 줍니다. href는 hyper reference를 의미하고 웹 페이지나 파일의 위치를 나타내는 경로를 입력합니다.

```html
<a href='http://www.hanbit.co.kr'>한빛미디어</a>
```

### 기본 예제 3-4. 하이퍼링크 설정

a 태그를 사용해 특정 웹 페이지나 웹 페이지 내부의 특정 위치로 이동하는 링크를 생성해 보겠습니다.

1. 특정 웹페이지 연결하기
    
    아래 코드를 작성하고 실행한 후 하이퍼링크를 생성해 보겠습니다.
    
    ```html
    // text_anchor.html
    
    <!DOCTYPE html>
    <html>
    <head>
    	<title>HTML5 Text Basic Page</title>
    </head>
    <body>
    	<a href='http://www.hanbit.co.kr'>한빛미디어</a><br>
    	<a href='http://www.naver.com'>네이버</a><br>
    	<a href='http://www.daum.net'>다음</a><br>
    </body>
    </html>
    
    ```
    
2. 웹 페이지 내부에 연결하기
    
    웹 페이지 내부의 특정 태그로 이동하려면 id 속성을 추가로 사용합니다. 우선 h1 태그에 id 속성을 입력합니다. 이어서 a 태그의 href 속성에 ‘#id 속성’ 형태의 문자열을 입력합니다. 파일을 실행해서 alpha 부분 링크를 클릭하면 해당 내용으로 이동합니다. 여기에서는 p 태그에 입력되는 본문을 일부만 넣었습니다. 예제 소스를 참고하세요.
    
    ```html
    // text_anchor.html
    
    <!DOCTYPE html>
    <html>
    <head>
    	<title>HTML5 Text Basic Page</title>
    </head>
    <body>
    	// 이동하려는 태그의 id 속성을 href 속성에 '#d 속성' 형태로 입력합니다.
    	<a href='#alpha'>Alpha 부분</a>
    	<a href='#beta'>Beta 부분</a>
    	<a href='#gamma'>Gamma 부분</a>
    	<hr>
    	<h1 id='alpha'>Alpha</h1>
    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    	<h1 id='beta'>Beta</h1>
    	<p>Donec at pharetra orci. Ut tincidnut porta aliquam.</p>
    	<h1 id='gamma'>Gamma</h1>
    	<p>Integer nibh tellus, tristique quis blandit quis, consequat</p>
    </body>
    </html>
    
    ```
    
    id 속성이 중복되면 먼저 나오는 태그로 이동합니다. 하지만 id 속성을 중복해서 사용하는 것은 웹 표준에 어긋납니다.
    

## 3. 글자 모양 태그

HTML5는 글자 모양 태그를 사용해 웹 페이지의 글자에 형태와 의미를 부여합니다. HTML5에는 HTML4 버전까지 있었던 big 태그가 없습니다. small 태그가 있어 big 태그도 있다고 착각할 수 있으니 주의하세요.

- b(bold): 굵은 글자
- i(italic): 기울어진 글자
- small: 작은 글자
- sub(subscript): 아래 첨자
- sup(superscript): 위 첨자
- ins(insert): 밑줄 글자
- del(delete): 취소선이 그어진 글자

글자 보양 태그는 단독으로 사용하거나 제목 글자와 본문 글자 태그 내부 또는 다른 글자 모양 태그 내부에도 넣을 수 있습니다. 하지만 글자 모양 태그 내부에 제목 글자와 본문 글자 태그는 넣을 수 없습니다. 웹 브라우저가 표준 위반에 유연하게 대처하므로 실행은 됩니다.

### 기본 예제 3-5. 다양한 글자 모양

```html
<!DOCTYPE html>
<html>
<head>
	<title>HTML5 Text Basic Page</title>
</head>
<body>
	<h1><b>Lorem ipsum dolor sit amet</b></h1>
	<h1><i>Lorem ipsum dolor sit amet</i></h1>
	<h1><small>Lorem ipsum dolor sit amet</small></h1>
	<h1><b>Lorem ipsum dolor<sub>sit amet</sub></h1>
	<h1><b>Lorem ipsum dolor<sup>sit amet</sup></h1>
	<h1><ins>Lorem ipsum dolor sit amet</ins></h1>
	<h1><del>Lorem ipsum dolor sit amet</del></h1>
	<hr>
	<b>Lorem ipsum dolor sit amet</b></br>
	<i>Lorem ipsum dolor sit amet</i></br>
	<small>Lorem ipsum dolor sit amet</small><br>
	Lorem ipsum dolor<sub>sit amet</sub><br>
	Lorem ipsum dolor<sup>sit amet</sup><br>
	<ins>Lorem ipsum dolor sit amet</ins><br>
	<del>Lorem ipsum dolor sit amet</del><br>
</body>
</html>
```

# 02. 목록 태그

현대 웹 페이지에서 빠지지 않고 등장하는 요소가 있다면 바로 내비게이션 메뉴입니다. 내비게이션 메뉴는 웹 사이트의 다른 웹 페이지로 이동할 수 있는 버튼을 모아둔 것입니다.

내비게이션 메뉴를 만들 때는 주로 목록 태그를 사용합니다.

- ul(unordered list): 순서가 없는 목록 생성
- ol(ordered list): 순서가 있는 목록 생성
- li(list item): 목록 요소 생성

### 기본 예제 3-6. 목록 태그 활용

1. 순서가 없는 기본 목록 만들기
    
    ```html
    <body>
    	<ul>
    		<li>사과</li>
    		<li>바나나</li>
    		<li>오렌지</li>
    	</ul>
    </body>
    ```
    
2. 순서가 있는 목록 만들기
    
    ```html
    <body>
    	<ol>
    		<li>사과</li>
    		<li>바나나</li>
    		<li>오렌지</li>
    	</ol>
    </body>
    ```
    
3. 중첩 목록 만들기
    
    ```html
    <body>
    	<ul>
    		<!-- 첫 번째 목록 -->
    		<li>
    			<b>과일</b>
    			<ol>
    				<li>사과</li>
    				<li>바나나</li>
    				<li>오렌지</li>
    			</ol>
    		</li>
    		<!-- 두 번째 목록 -->
    		<li>
    			<b>채소</b>
    			<ol>
    				<li>상추</li>
    				<li>치커리</li>
    				<li>양배추</li>
    			</ol>
    		</li>
    	</ul>
    </body>
    ```
    

# 03. 테이블 태그

표를 만들 때는 테이블 태그를 사용합니다. 태그가 조금 많지만 차근차근 살펴봅니다.

- table: 표 삽입
- tr(table row): 표에 행 삽입
- th(table heading): 표의 제목 셀 생성
- td(table data): 표의 일반 셀 생성

### 기본 예제 3-7. 시간표 만들기

1. 표 만들기
    
    ```html
    <body>
    	<table>
    
    	</table>
    </body>
    ```
    
2. 표에 셀 추가하기
    
    ```html
    <body>
    	<table border='1'>
    		<thead>
    			<tr>
    				<th></th>
    				<th>월</th>
    				<th>화</th>
    				<th>수</th>
    				<th>목</th>
    				<th>금</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr>
    				<td>1교시</td>
    				<td>영어</td>
    				<td>국어</td>
    				<td>과학</td>
    				<td>미술</td>
    				<td>기술</td>
    			</tr>
    		</tbody>
    		<tbody>
    			<tr>
    				<td>2교시</td>
    				<td>도덕</td>
    				<td>체육</td>
    				<td>영어</td>
    				<td>수학</td>
    				<td>사회</td>
    			</tr>
    		</tbody>
    	</table>
    </body>
    ```
    

테이블 태그에는 속성이 있습니다. table 태그의 경우 HTML5 전에는 속성이 많았지만, 이제는 표의 테두리 굵기를 지정하는 border 속성만 가지고 있습니다. th 태그와 td 태그는 colspan 속성과 rowspan 속성을 사용해 표에서 차지하는 영역을 조절할 수 있습니다. colspan 속성을 사용하면 영역이 가로 방향으로 늘어나고, rowspan 속성을 사용하면 영역이 세로 방향으로 늘어납니다. 마이크로소프트 엑셀 등 스프레드시트 프로그램에 있는 셀 병합 기능과 유사합니다.

- table
    - border: 표의 테두리 굵기 지정
- th, td
    - colspan: 셀의 너비 지정
    - rowspan: 셀의 높이 지정

### 기본 예제 3-8. 행, 열 병합 표 생성

```html
<body>
	<table border='1'>
		<tr>
			<th colspan='2'>지역별 홍차</th>
		</tr>
		<tr>
			<th rowspan='3'>중국</th>
			<td>정산소종</td>
		</tr>
		<tr><td>기문</td></tr>
		<tr><td>운남</td></tr>
		<tr>
			<th rowspan='4'>인도 및 스리랑카</th>
			<td>이상</td>
		</tr>
		<tr><td>실론</td></tr>
		<tr><td>다질링</td></tr>
		<tr><td>닐기리</td></tr>
	</table>
</body>
```

# 04. 미디어 태그

지금까지는 웹 페이지에 글자를 사용하는 태그를 살펴보았습니다. 이 절에서는 이미지, 오디오, 비디오 등 멀티미디어를 넣는 방법을 알아보겠습니다. 이미지를 삽입할 때는 img 태그를 사용하고 음악을 삽입할 때는 audio 태그를 사용합니다. 비디오를 삽입할 때는 video 태그를 사용합니다. audio 태그와 video 태그는 HTML5에 추가된 기능이므로 인터넷 익스플로러8 이하에서는 사용할 수 없습니다.

img 태그는 내용을 가질 수 없는 태그이지만, audio 태그와 video 태그는 내용을 가질 수 있는 태그입니다.

멀티미디어에 필요한 추가 정보는 속성을 사용해 입력합니다.

- img 태그 `<img>`
    - src: 이미지의 경로 지정
    - alt: 이미지가 없을 때 나오는 글자 지정
    - width: 이미지의 너비 지정
    - height: 이미지의 높이 지정
- audio태그 `<audio></audio>`, video태그 `<video></video>`
    - src: 음악, 비디오 파일의 경로 지정
    - preload: 음악, 비디오를 준비 중일 때 데이터를 모두 불러올지 여부 지정
    - autoplay: 음악, 비디오의 자동 재생 여부 지정
    - loop: 음악, 비디오의 반복 여부 지정
    - controls: 음악, 비디오 재생 도구 출력 여부 지정
- video태그 `<video></video>`
    - width: 비디오의 너비 지정
    - height: 비디오의 높이 지정

### 기본 예제 3-9. 멀티미디어(이미지, 오디오, 비디오) 삽입

1. 이미지 삽입하기
    
    표시하고 싶은 이미지 파일을 HTML 페이지와 같은 폴더에 넣고 코드를 작성합니다.
    
    ```html
    <body>
    	// src에 웹에 있는 이미지 경로를 넣어도 됩니다.
    	<img src='Penguins.jpg' alt='펭귄' width='300'>
    	<img src='Nothing' alt='그림이 존재하지 않습니다' width='300'>
    </body>
    ```
    
2. 음악 삽입하기
    
    삽입하고 싶은 오디오 파일을 HTML 페이지와 같은 폴더에 넣고 코드를 작성합니다. 코드를 실행하면 웹 브라우저마다 컨트롤이 다르기 때문에 서로 다른 모습의 웹 페이지를 볼 수 있습니다.
    
    ```html
    <body>
    	<audio src='Kalimba.mp3' controls='controls'></audio>
    </body>
    ```
    
3. 웹 브라우저 제약이 없도록 음악 삽입하기
    
    웹 브라우저 세부 버전에 따라 위 코드가 실행되지 않을 수 있습니다. 웹 브라우저마다 지원하는 확장자 형식이 달라 나타나는 현상입니다. 게임기와 텔레비전에 들어가는 웹 브라우저 모두 지원하는 확장자가 다릅니다. 웹 브라우저마다 지원하는 음악 파일 확장자가 다른 문제는 source 태그로 해결할 수 있습니다. source 태그는 audio 태그나 video 태그 내부에 입력합니다. HTML 페이지와 같은 폴더에 확장자가 OGG인 파일을 넣어 줍니다. 파일 변환 프로그램을 사용해도 되고 준비한 파일을 사용해도 됩니다.
    
    ```html
    <body>
    	<audio controls='controls'>
    		// type 속성을 입력하지 않으면 웹 브라우저가 음악 파일을 다운로드한 후 재생 가능한 파일인지 확인하는 작업이 필요하므로 꼭 지정합시다.
    		<source src='Kalimba.mp3' type='audio/mp3'>
    		<source src='Kalimba.ogg' type='audio/ogg'>
    	</audio>
    </body>
    ```
    
4. 동영상 삽입하기
    
    삽입하고 싶은 비디오 파일을 HTML 페이지와 같은 폴더에 넣고 코드를 작성합니다.
    
    ```html
    <body>
    	<video controls='controls'>
    		<source src='Wildlife.mp4' type='video/mp4'>
    		<source src='Wildlife.webm' type='video/webm'>
    	</video>
    </body>
    ```
    
5. 동영상을 불러오는 동안 다른 이미지 보여주기
    
    video 태그의 poster 속성을 사용해 동영상을 불러오는 동안 사용자에게 보여 줄 이미지를 지정할 수 있습니다. img 태그의 src 속성처럼 이미지 경로를 입력합니다.
    
    ```html
    <body>
    	<video controls='controls' poster='http://via.placeholder.com/1287x720'>
    		<source src='Wildlife.mp4' type='video/mp4'>
    		<source src='Wildlife.webm' type='video/webm'>
    	</video>
    </body>
    ```
    
    웹 페이지를 개발하다 보면 이미지를 넣을 공간을 미리 확보해야 하는 상황이 발생합니다. 이때는 의미 없는 이미지를 사용합니다. 이미지 경로에 ‘http://via.placeholder.com/너비x높이’ 형식으로 입력합니다. 이 외에도 유사한 웹 사이트가 많은데 ‘http://placekitten.com’도 기억해 두세요.