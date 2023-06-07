# HTML, CSS 의 display 속성

- tag 의 보여지는 성질을 변경 할 수 있는 속성
- 모든 tag는 자신만의 고유의 display 속성을 갖는다
- 기본속성은 block, inline 성질을 갖는다

## display : block 속성

- header, nav, div, section, p, article, footer 등의 속성은 기본성질 : block
- block성질은 box에 보여지는 모양과 달리 무조건 화면의 width 만큼의 영역을 차지하는 구조이다.
- block 성질을 갖는 tag 의 width 값을 변경하여도 보여지는 크기만 달라지지 실제 박스의 영역은 화면의 width 이다.
- block 성질을 가진 상태에서는 box 들을 가로 방향으로 배치할수 없다.
- css2 이전에는 block 성질을 가진 box들을 가로방향으로 배치 하기 위해 float 라는 속성을 트릭으로 사용 했었다.
- css 속성에 float 라는 속성을 사용하는 순간 화면개발이 어려워 진다.
- 만약 box 를 가로로 배치하면서 원하는 형태로 배열을 하는는 것은 정말 어려운 작업이었다.

## display : inline 속성

- a, span, strong, b, label, input, botton 등과 같이 글자단위의 표현 tag 이다.
- 실질적으로 tag의 width를 임의로 조절 할 수 없다.
- 이 tag 들의 width 는 tag 가 포함하는 Content(text)의 길이만큼 자동 설정 된다.
- 심지어 이 tag 들은 padding 도 설정이 안되는 경우가 있다.

## display : inline-block 속성

- block 속성의 성질과, inline 속성의 성질을 함께 포함하는 속성이다.
- 이 속성은 기본 display 속성을 변경하여 표현되는 성질을 변경한 것이다.
- block 속성의 tag 를 inline-block으로 변경한 후 width 속성을 설정하면 실제 보여지는 width와 영역 width가 같아진다.
- inline 속성의 tag 를 inline-block으로 변경하면 width지정이 가능하고, padding 등을 사용 할 수 있다.

## display : flex 속성

- css2에서 추가된 display 속성중에 flex,grid 속성이 있다.
- flex 속성은 화면 layout 을 만드는데 혁신적인 변화를 가져온 속성

- `display:flex` 속성은 부모 box tag 에 지정하는 style 이다.
- 부모 tag 에 이 속성이 지정되면 children tag 들은 자동으로 display:flex-item 속성으로 변경된다.
- `display:flex-item ` 속성을 받는 children tag 들은 기본적으로 inline-block 성질을 갖게되고 추가하여 독특하여 독특한 속성 성질을 부여 받게 된다.
