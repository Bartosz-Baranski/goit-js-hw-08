const e=document.querySelector(".feedback-form"),t=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]'),o=document.querySelector('button[type="submit"]');if(setInterval((()=>{const e={email:t.value,message:a.value};localStorage.setItem("feedback-form-satte",JSON.stringify(e))}),500),o.addEventListener("click",(t=>{t.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),e.reset()})),localStorage){const e=JSON.parse(localStorage.getItem("feedback-form-satte"));t.value=e.email,a.value=e.message}
//# sourceMappingURL=03-feedback.c37b40c4.js.map