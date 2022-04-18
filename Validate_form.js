 const form = document.getElementById('register-form')
 const firstname = document.getElementById('fname')
 const lastname = document.getElementById('lname')
 const address = document.getElementById('address')

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
     const firstnameValue = fname.value.trim();
     const lastnameValue = fname.value.trim();
     const addressValue = address.value.trim();

     if(firstnameValue ===''){

     }
 }
 
 function validate(){
            if(document.myform.id="register-form"){
                alert("Please provide your name!");
                // document.myform.name.focus();
                return false;
            }
            // return true; 
        }

