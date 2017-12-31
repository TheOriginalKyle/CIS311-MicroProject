function validInput(x)
{
  //If the input is valid hide alert
  document.getElementById(x + "Div").setAttribute("class", "form-group");
  document.getElementById(x + "Div").removeAttribute("role");
  document.getElementById("invalid_" + x + "Div").setAttribute("hidden", "");
}

function invalidInput(x)
{
  //If the input is invalid show alert
  document.getElementById(x + "Div").setAttribute("class", "form-group alert alert-warning");
  document.getElementById(x + "Div").setAttribute("role", "alert");
  document.getElementById("invalid_" + x + "Div").removeAttribute("hidden");
}

function validEmail(showAlert)
{
  var testEmail = document.getElementById("email").value;

  var emailResult = /\S+@\S+\.\S+/.test(testEmail);

  //Valid Email
  if(emailResult == true)
  {
    validInput('email');
    return true;
  }

  //Invalid Email
  else
  {
    if (showAlert == true)
    {
    invalidInput('email');
    }
    return false;
  }
}

function notBlank(x, showAlert)
{
  var msgContent = document.getElementById(x).value;

  var msgResult = /\S+/.test(msgContent);

  if(msgResult == true)
  //Is not blank
  {
    validInput(x);
    return true;
  }

  //Is blank
  else
  {
    if(showAlert == true)
    {
    invalidInput(x);
    }
    return false;
  }
}

function isEqual(x, y, showAlert)
{
  var value1 = document.getElementById(x).value;
  var value2 = document.getElementById(y).value;
  var result = (value1 == value2 && notBlank(x));
  if(result == true)
  {
    validInput(y);
    return true;
  }
  else
  {
    if(showAlert == true)
    {
    invalidInput(y);
    }
    return false;
  }
}
