// import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
const btnSubmit = document.querySelector('button[type="submit"]');

setInterval(() => {
  const emailValue = emailInput.value;
  const msgValue = messageEl.value;
  const dataForm = {
    email: emailValue,
    message: msgValue,
  };
  localStorage.setItem('feedback-form-satte', JSON.stringify(dataForm));
}, 500);

btnSubmit.addEventListener(`click`, e => {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
});

if (localStorage) {
  const feedBck = JSON.parse(localStorage.getItem('feedback-form-satte'));
  emailInput.value = feedBck.email;
  messageEl.value = feedBck.message;
}

// function ownerSubmit(e) {
//   e.preventDefault();
//   const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const { email: localEmail, message: localMessage } = localData;

//   const SubmittedData = {
//     email: localEmail,
//     message: localMessage,
//   };

//   localData.email = '';
//   localData.message = '';

//   console.log('local data:', localData);
//   console.log('submitted data:', SubmittedData);
//   console.log(`
//     email: ${localEmail}
//     message: ${localMessage}
//     `);

//   localStorage.setItem('feedback-form-state', JSON.stringify(localData));
//   feedbackForm.reset();
// }

// function saveValue(e) {
//   e.preventDefault();
//   const {
//     elements: { email, message },
//   } = feedbackForm;

//   const data = {
//     email: email.value,
//     message: message.value,
//   };

//   localStorage.setItem('feedback-form-state', JSON.stringify(data));
// }

// window.addEventListener('load', () => {
//   const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
//   emailInput.value = localData.email;
//   messageEl.value = localData.message;
// });
// feedbackForm.addEventListener('input', throttle(saveValue, 500));

// feedbackForm.addEventListener('submit', ownerSubmit);
