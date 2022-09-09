// _____________________________Reset Fields_______________________________________
const resetFields = () => {
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('email').value = ''
    document.getElementById('signup-password').value = ''
    document.getElementById('signup-confirm-password').value= ''
    document.getElementById('batch').value = ''
    document.getElementById('module').value = ''
    document.getElementById('tnC').check = ''
}
const DB_USERS = []
//___________________________Validation_______________________________________________
const  validate = () => {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let phone =document.getElementById('phone').value
    let password =document.getElementById('signup-password').value
    let confirmPassword = document.getElementById('signup-confirm-password').value
    let batch = document.getElementById('batch').value
    let module = document.getElementById('module').value
    let tnc = document.getElementById('tnC').check
    
    let error = false
    let regExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

    //_________________________________First Name_____________________________________
    if(firstName && firstName.length >= 3) {
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else {
        document.getElementById('first-name-invalid').style.display = 'block'
        error = true
    }
    //_________________________________Last Name_______________________________________
    if (lastName && lastName.length >= 3) {
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else {
        document.getElementById('last-name-invalid').style.display = 'block'
    }
    //___________________________________Email____________________________________________
    if (
        email &&
        email.includes('@') &&
        email.includes('.') &&
        email.lastIndexOf('.') <= email.length - 3 &&
        email.indexOf('@') !== 0
    ) {
        document.getElementById('email-invalid').style.display = 'none'
    }
    else {
        document.getElementById('email-invalid').style.display ='block'
    }
    //______________________________________Phone__________________________________________
    if (phone.length === 10 && phone.match(regExp) ) {
        document.getElementById('phone-invalid').style.display = 'none'
    } 
    else {
        document.getElementById('phone-invalid').style.display = 'block'
    }
    //________________________________________Passwprd______________________________________
    if (password.length <= 15) {
        document.getElementById('password-invalid').style.display = 'none'
    }
    else {
        document.getElementById('password-invalid').style.display = 'block'
    }
    //___________________________________Confirm Password_________________________________4
    if(confirmPassword === password) {
        document.getElementById('confirm-password-invalid').style.display = 'none'
    }
    else {
        document.getElementById('confirm-password-invalid').style.display = 'block'
    }
    //________________________________________Batch_______________________________________
    if (
        batch !== 'None'
    ){
        document.getElementById('batch-invalid').style.display = 'none'
    }
    else {
        document.getElementById('batch-invalid').style.display = 'block'
    }
    //____________________________________Module____________________________________________
    if (
        module !== 'None'
    ){
        document.getElementById('module-invalid').style.display = 'none'
    }
    else {
        document.getElementById('module-invalid').style.display = 'block'
    }
    //__________________________________Sucess Alert________________________________________
    if (
        firstName && firstName.length >= 3 &&
        lastName && lastName.length >= 3 &&
        email &&
        email.includes('@') &&
        email.includes('.') &&
        email.lastIndexOf('.') <= email.length - 3 &&
        email.indexOf('@') !== 0 &&
        phone.length === 10 && phone.match(regExp) &&
        password.length <= 15 &&
        confirmPassword === password &&
        batch !== 'None' &&
        module !== 'None'
      
    )
    {
      alert ('Your details have been saved succesfully')
    }
    
    let userDetails = {
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword,
        batch,
        module
    }
    DB_USERS.push(userDetails)
    resetFields()
}
//____________________________________________________________________________________________________

const resetLoginFields = () => {
    document.getElementById('login-email').value = ''
    document.getElementById('login-password').value = ''
}
  const login = () => {
      let enteredEmail = document.getElementById('login-email').value
      let enteredPassword = document.getElementById('login-password').value
  
      let loginSuccessAlert = document.getElementById('login-alert-success')
      let loginFailureAlert = document.getElementById('login-alert-failure')
  
      let currentUser =  DB_USERS.find(user => user.email === enteredEmail && user.password === enteredPassword)
      if(currentUser) {
          loginSuccessAlert.style.display = 'block'
          loginFailureAlert.style.display = 'none'
      } else {
          loginFailureAlert.style.display = 'block'
          loginSuccessAlert.style.display = 'none'
      }
  
      resetLoginFields()
  }

  const signup = () => {
   document.getElementsByClassName('registration-form').style.display = 'block'
  }