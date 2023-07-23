const checkEmail = (myemail) => {
  if (myemail === undefined || myemail.includes("@") === false) {
    console.log("error check @");
    return false;
  } else {
    return true;
  }
};

function getWelcomeTemplate({ name, age, school, createdAt }) {
  const mytemplate = `
        <html>
            <body>
                <h1>$wellcome {name}!!!</h1>
                <hr />
                <div>date: ${createdAt}</div>
            </body>
        </html>
    `;
  return mytemplate;
}

function sendTemplateToEmail(myemail, result) {
  console.log(
    myemail + "이메일로 가입환영템플릿 " + result + "를 전송합니다!!!"
  );
}

function createUser({ name, age, school, email, createdAt }) {
  const isValid = checkEmail(email);
  if (isValid === false) return;

  const mytemplate = getWelcomeTemplate({ name, age, school, createdAt });

  sendTemplateToEmail(email, mytemplate);
}

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "a@a.com";
const createdAt = "2022-10-02";
createUser({ name, age, school, email, createdAt });
