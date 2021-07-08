let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


let fm = document.getElementById('contact-form');
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let ms= document.getElementById('message');
let sb = document.getElementById('submit');

function formValidator(ev) {
    ev.preventDefault();

    let errors = [];
    let data = {};

    //Validation for FullName

    if (fn.value !== '') {
        data.fullName = fn.value;
    } else {
        errors.push('Please enter your full name!');
    }

    if (em.value) {
        if (pattern.test(em.value)) {
          data.email = em.value;  
        } else {
        errors.push('Email is invalid');  
       } 
  } else {
       errors.push('Email is required');  
  }
      if (ms.value) {
        data.message = ms.value;
    } else {
        errors.push('Message is required');
    }
      
    if (errors.length ===0) {
        console.log(data);
        document.getElementById('contact-form').reset();
    }else{
        
    }
      console.log(errors);
}
sb.addEventListener('click', formValidator);

