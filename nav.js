function nav()
{
  //Base nav class
  var myNav = document.createElement("nav");
  myNav.setAttribute("class","navbar navbar-expand-md bg-dark navbar-dark");

  //Brand
  var brand = document.createElement("a");
  brand.setAttribute("class", "navbar-brand");
  brand.setAttribute("href", "./index.html");
  brand.innerHTML="kyle@kyle-bohlander.tech:~$";
  myNav.appendChild(brand);

  //Toggler/collapsible button
  var toggleBtn = document.createElement("button");
  toggleBtn.setAttribute("class", "navbar-toggler");
  toggleBtn.setAttribute("type", "button");
  toggleBtn.setAttribute("data-toggle", "collapse");
  toggleBtn.setAttribute("data-target", "#collapsibleNavbar");
  var toggleIcon = document.createElement("span");
  toggleIcon.setAttribute("class", "navbar-toggler-icon");
  toggleBtn.appendChild(toggleIcon);
  myNav.appendChild(toggleBtn);

  //Root links Div
  var navbarLinks = document.createElement("div");
  navbarLinks.setAttribute("class", "collapse navbar-collapse");
  navbarLinks.setAttribute("id", "collapsibleNavbar");
  myNav.appendChild(navbarLinks);

  // Root UL for navbar-nav
  var navbarNav = document.createElement("ul");
  navbarNav.setAttribute("class", "navbar-nav mr-auto");
  navbarLinks.appendChild(navbarNav);

  //First Li element will be auto organized to the left (mr-auto)
  var navItem1 = document.createElement("li");
  navItem1.setAttribute("class", "nav-item");
  var aboutPg = document.createElement("a");
  aboutPg.setAttribute("class", "nav-link");
  aboutPg.setAttribute("href", "./about.html");
  aboutPg.setAttribute("id", "aboutPg");
  aboutPg.innerHTML="About";
  navItem1.appendChild(aboutPg);
  navbarNav.appendChild(navItem1);

  //Project Page
  var projectItem = document.createElement("li");
  projectItem.setAttribute("class", "nav-item");
  var projectPg = document.createElement("a");
  projectPg.setAttribute("class", "nav-link");
  projectPg.setAttribute("href", "./project.html");
  projectPg.setAttribute("id", "projectPg");
  projectPg.innerHTML="Projects";
  projectItem.appendChild(projectPg);
  navbarNav.appendChild(projectItem);

  //Cloud Page
  var cloudNavItem = document.createElement("li");
  cloudNavItem.setAttribute("class", "nav-item");
  var cloudPg = document.createElement("a");
  cloudPg.setAttribute("class", "nav-link");
  cloudPg.setAttribute("href", "./cloud.html");
  cloudPg.setAttribute("id", "cloudPg");
  cloudPg.innerHTML="My Cloud";
  cloudNavItem.appendChild(cloudPg);
  navbarNav.appendChild(cloudNavItem);

  //Contact Page
  var contactNavItem = document.createElement("li");
  contactNavItem.setAttribute("class", "nav-item");
  var contactPg = document.createElement("a");
  contactPg.setAttribute("class", "nav-link");
  contactPg.setAttribute("href", "./contact.html");
  contactPg.setAttribute("id", "contactPg");
  contactPg.innerHTML="Contact";
  contactNavItem.appendChild(contactPg);
  navbarNav.appendChild(contactNavItem);

  //Second navbar-nav element will be put to the right
  var navbarNav2 = document.createElement("ul");
  navbarNav2.setAttribute("class", "navbar-nav");

  //User menu dropdown
  var userMenuDropdown = document.createElement("li");
  userMenuDropdown.setAttribute("class", "nav-item dropdown");
  var userIcon = document.createElement("a");
  userIcon.setAttribute("class", "nav-link dropdown-toggle");
  userIcon.setAttribute("href", "./login.html");
  userIcon.setAttribute("id", "navbardrop2");
  userIcon.innerHTML="Login or Register     ";
  userIcon.setAttribute("data-toggle", "dropdown");
  var accountIcon = document.createElement("span");
  accountIcon.setAttribute("class", "oi oi-person");
  accountIcon.setAttribute("title", "person");
  accountIcon.setAttribute("aria-hidden", "true");
  userIcon.appendChild(accountIcon);
  userMenuDropdown.appendChild(userIcon);
  navbarNav2.appendChild(userMenuDropdown);
  navbarLinks.appendChild(navbarNav2);

  //Actual dropdown menu items
  var dropdownMenu2 = document.createElement("div");
  dropdownMenu2.setAttribute("class", "dropdown-menu");

  var loginPg = document.createElement("a");
  loginPg.setAttribute("class", "dropdown-item");
  loginPg.setAttribute("href", "./login.html");
  loginPg.innerHTML="Login or Register";
  dropdownMenu2.appendChild(loginPg);

  //Account Settings
  var accountSettingsPg = document.createElement("a");
  accountSettingsPg.setAttribute("class", "dropdown-item");
  accountSettingsPg.setAttribute("href", "#");
  accountSettingsPg.innerHTML="Account Settings";
  dropdownMenu2.appendChild(accountSettingsPg);

  var myProfilePg = document.createElement("a");
  myProfilePg.setAttribute("class", "dropdown-item");
  myProfilePg.setAttribute("href", "./myProfile.html");
  myProfilePg.innerHTML="My Profile";
  dropdownMenu2.appendChild(myProfilePg);
  userMenuDropdown.appendChild(dropdownMenu2);

  //Inserts into body.
  document.body.appendChild(myNav);
}
function setCookie(cname,item,expireDays)
{
  var d = new Date();
  d.setTime(d.getTime() + (expireDays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  var cookie = cname + JSON.stringify(item) + ";" + expires + ";path=/";
  document.cookie = cookie;
}
function getCookie(cname)
{
    var result = document.cookie.match(new RegExp(cname + '=([^;]+)'));
    result = JSON.parse(result[1]);
    if(result != null)
    {
      return result;
    }else
    {
    return "";
    }
}
