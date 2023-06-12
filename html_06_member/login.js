document.addEventListener("DOMContentLoaded", () => {
  const login = () => {
    const login_form = document.querySelector("form#login_form");

    // id 나 calss 가 부착 되지 않은 input tag 를 select 하는 방법
    const username = login_form.querySelector("input[name='username']");
    const password = login_form.querySelector("input[name='password']");
    if (!username.value) {
      alert("username 은 반드시 입력해야 합니다.");
      username.focus();
      return false;
    }
    if (!password.value) {
      alert("password 는 반드시 입력 해야합니다.");
      password.focus();
      return false;
    }
    login_form.submit();
  }; // end login 함수

  // 함수 chainning 방식
  document.querySelector("#login_button").addEventListener("click", login);

  document.querySelector("#join_button").addEventListener("click", () => {
    // 회원가입 버튼이 클릭되면 "join.html" 로 가라
    // script 에서 a link 를 클리한 것처럼 페이지 바꾸기
    document.location.href = "join.html";
  });
});
