const submitBtn = document.querySelector('.submit-btn');
const stackInput = document.querySelectorAll(".stack-input");
const civilInput = document.querySelector(".civil-input");
const name = document.querySelector('.name-field');
const email = document.querySelector('.email-field');
const emailDiv = document.querySelector('.email-div');
const phone = document.querySelector('.phone-field');
const phoneDiv = document.querySelector('.phone-div')
const about = document.querySelector('.about-field');
const form = document.querySelector('.form');
const body = document.querySelector('.middle-div');
const nameTitle = document.querySelector('.name-title');


let isEmailValid = false;
const emailAlert = document.createElement('p');
emailAlert.innerText = 'Digite um e-mail no formato: email@email.com.'
emailAlert.hidden = true;
emailDiv.appendChild(emailAlert);

let isphoneValid = false;
const phoneAlert = document.createElement('p');
phoneAlert.innerText = 'Digite um telefone no formato (xx) xxxxx-xxxx.'
phoneAlert.hidden = true;
phoneDiv.appendChild(phoneAlert);

submitBtn.disabled = true;

const fieldsArray = [name, email, phone, about, civilInput]

btnEnabler = () => {
    if (name.value
        && isEmailValid
        && isphoneValid
        && about.value
    ) {
        submitBtn.disabled = false;
        submitBtn.id = 'enabled';
    } else {
        submitBtn.disabled = true;
        submitBtn.id = '';
    }

}

fieldsArray.forEach((field) => {
    field.addEventListener('keydown', () => {
      btnEnabler(field);
      formValues();
    });
    field.addEventListener('change', () => {
        btnEnabler(field);
        formValues();
      });
});

email.addEventListener('keydown', (event) => {
  const { value } = event.target;
  console.log(value);
  const emailExpression = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
  if (emailExpression.test(value)) {
    isEmailValid = true;
    emailAlert.hidden = true;
  } else {
    emailAlert.hidden = false;
  }
});

phone.addEventListener('keyup', (event) => {
    let { value } = event.target;
    phone.value = phoneMask(value);
    if (value.length < 15) {
      phoneAlert.hidden = false;
    } else {
      phoneAlert.hidden = true;
      isphoneValid = true;
    }
});
  
const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

const stackValue = () => {
    let value = ''
    stackInput.forEach((radio) => {
        if (radio.checked) {
            value = radio.value
        }
    })
    return value
}

const formValues = () =>  {
  const values = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    civil: civilInput.value,
    stack: stackValue(),
    about: about.value,
  }
  console.log(values);
  return values
}

const newPage = (value) => {
  const newDiv = document.createElement("div");
  newDiv.className = "new-div";
  body.appendChild(newDiv);
  const nameElement = document.createElement("p");
  nameElement.innerText = "Nome: " + value.name;
  newDiv.appendChild(nameElement);
  const emailElement = document.createElement("p");
  emailElement.innerText = "Email: " + value.email;
  newDiv.appendChild(emailElement);
  const phoneElement = document.createElement("p");
  phoneElement.innerText = "Telefone: " + value.phone;
  newDiv.appendChild(phoneElement);
  const civilElement = document.createElement("p");
  civilElement.innerText = "Estado Civil: " + value.civil;
  newDiv.appendChild(civilElement);
  const stackElement = document.createElement("p");
  stackElement.innerText = "Stack: " + value.stack;
  newDiv.appendChild(stackElement);
  const aboutElement = document.createElement("p");
  aboutElement.innerText = "Sobre: " + value.about;
  newDiv.appendChild(aboutElement);
}

submitBtn.addEventListener('click', () => {
  const newValues = formValues();
  form.hidden = true;
  nameTitle.innerText = 'Dados cadastrados:'
  newPage(newValues);
});
