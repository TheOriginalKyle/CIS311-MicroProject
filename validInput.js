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

function sha512(str)
{
  // We transform the string into an arraybuffer.
  var buffer = new TextEncoder("utf-8").encode(str);
  return crypto.subtle.digest("SHA-512", buffer).then(function (hash)
  {
    return hex(hash);
  });
}

function hex(buffer)
{
  var hexCodes = [];
  var view = new DataView(buffer);
  for (var i = 0; i < view.byteLength; i += 4)
  {
    // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
    var value = view.getUint32(i);
    // toString(16) will give the hex representation of the number without padding
    var stringValue = value.toString(16);
    // We use concatenation and slice for padding
    var padding = '00000000';
    var paddedValue = (padding + stringValue).slice(-padding.length);
    hexCodes.push(paddedValue);
  }

  // Join all the hex strings into one
  return hexCodes.join("");
}
