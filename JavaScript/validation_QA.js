function ValidateContactForm()
{
    // validates if every value that is put into the form is by the norms that we defined

   var namef = document.ContactForm.Name;
    var lastname = document.ContactForm.lastName;
    var email = document.ContactForm.Email;
    var phone = document.ContactForm.Telephone;
    var comment = document.ContactForm.Comment;
    var counter=0;

    if (namef.value == "")
    {
        
     setErrorFor(namef, "Please enter your name.");
        return false;
    }

else{
   
   setSuccessFor(namef);
   counter++;
}

    if (lastname.value == "")
    {
        setErrorFor(lastname, "Please enter your last name.");
        
        return false;
    }
    else{
   
        setSuccessFor(lastname);
        counter++;
     }
    
    if (email.value == "" || email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0)
    {
        setErrorFor(email,"Please enter a valid e-mail address.");
        return false;
    }
    else{
   
        setSuccessFor(email);
        counter++;
     }

    if (phone.value == "" )
    {
        setErrorFor(phone,"Please enter your Phone Number");
        return false;
    }
    if (phone.value.length<9)
    {
        setErrorFor(phone,"Please enter 10 digits");
      return false;

    }
    else{
   
        setSuccessFor(phone);
        counter++;
     }



    if (comment.value == "")
    {
        setErrorFor(comment,"Please provide a detailed description on the Question section.");
        return false;
    }
    else{
   
        setSuccessFor(comment);
        counter++;
     }
     if(counter==5){
         alert("Your question has been seccssfully sent!")
        return true;
     }
    

}

function setErrorFor(input, msg){
  const formControl=input.parentElement;
        const small=formControl.querySelector('small');
        small.innerText=msg;
        formControl.className='form-control error';
}

function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}



