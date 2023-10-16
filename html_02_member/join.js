const INPUT_INDEX = {
  ID: 0,
  PASSWORD: 1,
  RE_PASSWORD: 2,
};

document.addEventListener("DOMContentLoaded", () => {
  const join = () => {
    const join_inputs = document.querySelectorAll("#join_form input");
    if (!join_inputs[INPUT_INDEX.ID].value) {
      alert("ID 은 필수 항목입니다");
      join_inputs[INPUT_INDEX.USERNAME].focus();
      return false;
    }

    const input_password = join_inputs[INPUT_INDEX.PASSWORD].value;
    if (!input_password) {
      alert("PW 는 필수 항목입니다");
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }

    const password_check =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (!password_check.test(input_password)) {
      alert(
        "비밀번호는 특수문자, 영문대소문자, 숫자 포함하여 8 ~15 자리형식으로 입력하세요"
      );
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }

    const re_password = join_inputs[INPUT_INDEX.RE_PASSWORD].value;
    if (!re_password) {
      alert("비밀번호 확인을 입력하세요");
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }

    if (input_password !== re_password) {
      alert("비밀번호와 비밀번호 확인값이 일치 하지 않습니다.");
      join_inputs[INPUT_INDEX.PASSWORD].value = "";
      join_inputs[INPUT_INDEX.RE_PASSWORD].value = "";
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }
  };
  document.querySelector("#join_button").addEventListener("click", join);
});
