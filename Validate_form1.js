function validate(){
const form = document.getElementById('register-form')
 const firstname = document.getElementById('firstName')
 const lastname = document.getElementById('lastName')
 const address = document.getElementById('address')
 const errorElement = document.getElementById('error')

 form.addEventListener('submit', e => {
     let messages = {}
      if(firstnameValue.trim() =="" || lastnameValue.trim() =="" ){
          masseges.push('Name is required')
      }
      if(firstname.lenghth >=50 || lastname.lenghth >=50 ){
          masseges.push('Your name should not be longer than 50')
      }

      if(addressValue.trim() =="" ){
            masseges.push('address is required')
        }
        if(address.lenghth >=300 ){
          masseges.push('Your address should not be longer than 300 characters')
      }

      
    //   if (messages.lenghth >0 {
     e.preventDefault()
    //    errorElement.innText = messages.join(',')
//  }

     validateInputs();
 });

 const setError = (element,message) => {
     const inputcontrol = element.parentElement;
     const errorDisplay = inputcontrol.querySelection('.error');

    //  errorDisplay.innerText = message;
    //  inputcontrol.classlist.add('error');
    //  inputcontrol.classlist.remove('success');

 }

 const validateInputs = () => {
     const firstnameValue = firstName.value.trim();
     const lastnameValue = lastName.value.trim();
     const addressValue = address.value.trim();

     if(firstnameValue.trim() =="" || lastnameValue.trim() =="" || addressValue.trim() ==""){
         alert("No blank values allowed");
         return false;
     }
     else{
         true;
     }
    
 }
 
//  function validate(){
            if(document.myform.id="register-form"){
                alert("Please provide your name!");
                // document.myform.name.focus();
                return false;
            }
            else{
                true;
            }
            // return true; 
        }

