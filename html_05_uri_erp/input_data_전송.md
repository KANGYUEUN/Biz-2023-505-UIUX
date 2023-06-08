# 화면에서 입력한 데이터를 Server로 보내기(전송)

- html의 input tag를 사용하여 입력 box만들기
- input tag로 만들어진 입력 box는 개별 데이터 요소를 입력하는 화면 도구이다.
- input tag 들을 form tag로 감싸서 포장을 한다
- Server로 데이터를 보낼때는 개별로 보낼수 있으나, 일반적으로 form tag로 감싸서 한꺼번에 전송한다.

## input tag 구송요소

- `name 속성 `: 서버로 데이터 보낼때 개별 데이터 요소를 식별할 변수를 만드는 코드
- 생성된 코드를 form tag에 의해 하나의 묶음이 되어 server로 보내지진다.
- input box에 문자열을 입력한 후 `전송` 버튼을 클릭하면 자동으로 서버로 데이터를 보내느느 `submit`코드가 자동 생성되고, `전송`버튼을 클릭하면

```html
<form>
  <input name="d_name" />
</form>
```

## formtag로 감싸진 butto이 역할

- 기본 역할이 submit
- 아무런 코드를 작성하지 않아고 HTML문서의 기본 성질 중에서 buttion은 submit 코드를 싱행하는 역할들을 수행한다.

## button성질 부여 속성

- 버튼 성질 부여시 type = submit 과같은 속성을 사용한다.
- `type-submit` : form테그로 감싸진 경우 input box에 입력한 데이터를 서버로 봬내는 역할을 수행. 기본 설정값. type을 생략하면 자동으로 설정된다.

- `type=reset` 모두 clear 하는 역할을 수행

- `type=button` :
