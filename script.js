// getting all attributes.

  const form = document.querySelector("form"),
  eInput = form.querySelector(".input"),
  text = form.querySelector(".text");

  form.addEventListener("submit", (e)=>{
    e.preventDefault(); //preventing form from submitting
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regex pattern to validate email.
    form.classList.add("error");
    form.classList.remove("valid");
    if(eInput.value == ""){
      text.innerText = "Can't be blank, try again!";
    }else if (!eInput.value.match(pattern) ) { //if patter is not matched with user's enter value
      text.innerText = "INVALID!";
    }else{
      form.classList.replace("error" , "valid"); //replacing error class with valid class.
      text.innerText = "VALID!";
    }
});
