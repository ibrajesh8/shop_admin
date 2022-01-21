/**
 * Author - Brajesh kumar
 * Date - 20/01/2022
 * Description - simple form ui design
 */

// Getting form refrence from DOM
const form = document.getElementById('form');
const customer_name = document.getElementById('customer_name');
const customer_email = document.getElementById('customer_email');
const customer_contact = document.getElementById('customer_contact');
const customer_city = document.getElementById('customer_city');

// adding event listener on bubmit button of form 
form.addEventListener('submit', e => {
  e.preventDefault();   // prevent default behaviour of submit button
  // cecking the inputs
  let isValid = checkInputs();
  if (isValid) {
    // send data to server through fetch api
    console.log("All inpputs are valid");
  }
});

/**
 * Input data validation
 */
function checkInputs() {
  // trim to remove the whitespaces
  const _name = customer_name.value.trim();
  const _email = customer_email.value.trim();
  const _contact = customer_contact.value.trim();
  const _city = customer_city.value.trim();

  if (_name === '') {
    setErrorFor(customer_name, 'Username cannot be blank');
    return false;
  } else {
    setSuccessFor(customer_name);
  }

  if (_email === '') {
    setErrorFor(customer_email, 'Email cannot be blank');
    return false;
  } else if (!isEmail(_email)) {
    setErrorFor(customer_email, 'Not a valid email');
    return false;
  } else {
    setSuccessFor(customer_email);
  }

  if (_contact == '') {
    setErrorFor(customer_contact, 'Contact number cannot be blank');
    return false;
  } else {
    setSuccessFor(customer_contact);
  }

  if (_city === '') {
    setErrorFor(customer_city, 'City cannot be blank');
    return false;
  } else {
    setSuccessFor(customer_city);
  }
  return true;
}

/**
 * Set error message
 * @param {HTMLElement} input 
 * @param {String} message 
 */
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

/**
 * Set success for input field
 * @param {HTMLElement} input 
 */
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

/**
 * Validate email using regular expression
 * @see https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * @returns {Boolean}
 */
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}