function validate(){
const form = document.getElementById('register-form')
 const firstname = document.getElementById('firstName')
 const lastname = document.getElementById('lastName')
 const address = document.getElementById('address')
 const error = document.getElementById('error')

 form.addEventListener('submit', e => {
     e.preventDefault();

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

