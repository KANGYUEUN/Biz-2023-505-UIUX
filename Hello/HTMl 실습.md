# HTMl 실습(2023-05-31)
- h1 = # 한개 (1~6까지 사용가능) 글씨 점점 작아짐 h7 부턴 인식 하지 않음.(box tag)
- 브라우저에 쓰고 싶을땐 <body> tag 사이에 넣으면 됨.
- 웹 주소에서 제일 뒤으 index.html 은 생략됨
- 홈페이지의 첫 화면 은 `index page` 라고 부름. ( = 랜딩페이지) ( = 파킹페이지)
- <P> : `문단`
	시작에서 끝까지 한 문장으로 표현되고 끝이 되면 자동으로 다음줄로 넘어감.
	아무리 enter를 눌러도 표시가 남지 않음. 줄바꿈 안됌
	한칸의 빈칸을 만듬.
- <div> : 일종의 문단
	문단과 문단사이에 빈칸을 남기지 않고 출력하는 tag 가장 많이 사용된다.
- <img src="image.jpg" width="100px" /> : 사진 넣기 ( self closeing)
	width 로 사진 크기를 조정할 수 있다.

## tag = class = odject
- tag안의 속성 변수들은 이미 기본적으로 만들어진 Dto class 다.
- 이미 안에 여러 도구 들이 존재 해 있음.

### html 문서 만들기
- ! + Enter
- 언어를 `ko`로 바꿔주기 

#### style 도구 사용하기 : 브라우저 화면에 content 를 표현하는것.
- style 은 HTML 이 아니라 CSS라고 한다. = inline style
- 두가지 언어를 사용하므로 코드 개념에서는 좋지 않음.
-  <div style="color: blue">1. 홍길동</div> : 
-  <div style="background-color: yellow">2. 이몽룡</div>

### 화면설계 에서 박스 만들기
- 필요한 안내 메세지를 박스안에 보여주기 (인라인 tag)
- <input placeholder="이메일을 입력 해 주세요 " />
- <input placeholder="비밀번호를 입력해 주세요" />

### 화면설계 로그인 버튼 만들기
- <button>로그인</button>


## login.html 확인

### div tag 안에 input tag 넣기
- 큰 화면박스가 만들어지고 inline tag 가 만들여져서 화면 구현이 가능하다.
- `div*?>intput`
- > 는 div box 안에 넣고싶은거 쓰기 (코드빨리작성하기)

### 다른 페이지로 링크 연결하기 ( `Hyper Text`)
-  <a href="join.html"> 회원가입</a> | <a href="loss id.html">ID PW 찾기</a>
- 회원가입을 클릭하면 join.html로 넘어감

### style tag 쓰기 : tag 모두에 공통으로 적용된다.
- h1 {
        /* h1 tag box 의 배경색은 노랑 */
        background-color: yellow;
        /* h1 tag box 의 text 색은 블루 */
        color: blue;
         /* h1 tag box 의 글자 크기 조정하기 */
        font-size: 30pt; (글자크기를 임의로 내가 바꾸고 싶을때 사용)
        /* h1 tag box 의 글자 문양 조정하기 */
        font-style: italic;
      }
-  input {
        /* 입력할 글자의 색 변하기*/
        color: blue;
        /* 입력할 박스의 크기 조정*/
        padding: 10px;
        /* 박스간 간격 조정 */
        tag 간 교집합 만들어서 조정한다.
        margin: 5px;
      }
### id 속성 이용하기 
- id 는 유일한 식별자 이기 때문에 중복으로 사용 할수 없다.
-  /* input tag id가 email인 것 변경 */
      /* input#email.color = red */
      input#email {
        /* 이미 input tag 의 컬러가 blue 이나 무시되고 red 로 됨*/
        color: red;
      }
      /* input tag id가 passxord인 것 변경 */
      input#password {
        /* 이미 input tag 의 컬러가 blue 이나 무시되고 plum 로 됨*/
        color: plum;
      }
###
-  div {
	 /*
        1px : 선의 굵기
        soid : 실선
        green : 색지정
        */
        /* tag의 테두리 색을 지정하기 */
        border: 1px solid green;
      }
## index.html
- 특수문자 사용 `&`
-  <footer>
      <address>CopyRight &copy yu1128eun@kakao.com</address>
    </footer>

- 모듈화 작업
- <link rel="stylesheet" href="main.css" />

- 컬러상속 받기 :  `inherit`
- a {
  color: inherit;
}

- 컬러속성 지정하기 : `rgba()`
- red green bule 각각 알파값을 이용해 컬러를 표현하게 해주는 도구 
- background-color: rgba(0, 0, 0, 0.1); : 원하는 만큼 명도지정

-  padding: 1rem;
- 화면에 나타나는 비율 나타내기 1:1

- `a tag`
- display: inline-block;
  border: 1px solid wheat;
- a tag 는 크기 조정을 display 속성을 통해 해야함.
- 속성이 원해 inline 인데 속성을 inline-block로 바꾼것임.

- 박스간 좌우 정렬 : `*`
-   * {
        /* 컴퓨터 코딩에서 (*)별표는 와일드카드 라고 하며 
                모든것 이라는 의미로 표현
            */
        box-sizing: border-box;
      }
- 한라인에 박스 정렬하기
- display: inline-block;

- `padding `:  top 기준 시계방향으로 
- article > div:nth-of-type(3) {
        /* Top, Right, Bottom, Left */
        padding: 20px 30px 40px 50px;
        위의 방법과 하단의 방법 모두 사용가능하다.
        padding-top: 20px;
        padding-bottom: 40px;
        padding-left: 50px;
        padding-right: 30px;
      }
- article > div:nth-of-type(2) {
        background-color: yellowgreen;
        /* top과 bottom : 20px
            left, right : 10px
            */
        padding: 20px 10px;
      }