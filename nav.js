function nav()
{
  //Base nav class
  var myNav = document.createElement("nav");
  myNav.setAttribute("class","navbar navbar-expand-md bg-dark navbar-dark");

  //Brand
  var brand = document.createElement("a");
  brand.setAttribute("class", "navbar-brand");
  brand.setAttribute("href", "./index.html");
  brand.innerHTML="Kyle Bohlander";
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

  //DropDown Menu will be auto organized to left (mr-auto)
  var dropdown = document.createElement("li");
  dropdown.setAttribute("class", "nav-item dropdown");
  var blogPg = document.createElement("a");
  blogPg.setAttribute("class", "nav-link dropdown-toggle");
  blogPg.setAttribute("href", "./blog.html");
  blogPg.setAttribute("id", "navbardrop");
  blogPg.setAttribute("data-toggle", "dropdown");
  blogPg.innerHTML="Blog";
  dropdown.appendChild(blogPg);
  navbarNav.appendChild(dropdown);

  //Actual dropdown menu items
  var dropdownMenu = document.createElement("div");
  dropdownMenu.setAttribute("class", "dropdown-menu");
  //Projects Page
  var projectsPg = document.createElement("a");
  projectsPg.setAttribute("class", "dropdown-item");
  projectsPg.setAttribute("href", "#");
  projectsPg.innerHTML="Projects";
  dropdownMenu.appendChild(projectsPg);
  //Recents Page
  var recentPg = document.createElement("a");
  recentPg.setAttribute("class", "dropdown-item");
  recentPg.setAttribute("href", "#");
  recentPg.innerHTML="Recent";
  dropdownMenu.appendChild(recentPg);
  //Popular Page
  var popularPg = document.createElement("a");
  popularPg.setAttribute("class", "dropdown-item");
  popularPg.setAttribute("href", "#");
  popularPg.innerHTML="Popular";
  dropdownMenu.appendChild(popularPg);
  //Subscribe Page
  var subscribePg = document.createElement("a");
  subscribePg.setAttribute("class", "dropdown-item");
  subscribePg.setAttribute("href", "#");
  subscribePg.innerHTML="Subscribe";
  dropdownMenu.appendChild(subscribePg);
  dropdown.appendChild(dropdownMenu);

  //VIP page is not part of dropdown menu so it needs to be a li element.
  var vipNavItem = document.createElement("li");
  vipNavItem.setAttribute("class", "nav-item");
  var vipPg = document.createElement("a");
  vipPg.setAttribute("class", "nav-link");
  vipPg.setAttribute("href", "./vip.html");
  vipPg.setAttribute("id", "vipPg");
  vipPg.innerHTML="VIP";
  vipNavItem.appendChild(vipPg);
  navbarNav.appendChild(vipNavItem);

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

  //SearchBox
  var formClass = document.createElement("form");
  formClass.setAttribute("class", "form-inline my-2 my-lg-0");
  var inputClass = document.createElement("input");
  inputClass.setAttribute("class", "form-control mr-sm-2");
  inputClass.setAttribute("type", "text");
  inputClass.setAttribute("placeholder", "Search");
  inputClass.setAttribute("aria-label", "Search");
  formClass.appendChild(inputClass);
  //SearchButton
  var searchBtn = document.createElement("button");
  searchBtn.setAttribute("class", "btn btn-outline-success my-2 my-sm-0");
  searchBtn.setAttribute("type", "submit");
  searchBtn.innerHTML="Search";
  formClass.appendChild(searchBtn);
  navbarLinks.appendChild(formClass);

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
