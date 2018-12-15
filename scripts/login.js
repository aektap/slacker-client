function check(form)
{

  if(form.username.value == "hello" && form.password.value == "hi")
  {
    window.open('channels.html')
  }
 else
 {
   alert("Incorrect Username or Password. Please check and try again")
  }
}