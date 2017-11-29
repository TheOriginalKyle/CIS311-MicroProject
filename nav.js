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

function dependencies()
{
  var jqueryDependency = document.createElement("script");
  jqueryDependency.setAttribute("src", "https://code.jquery.com/jquery-3.2.1.slim.min.js");
  jqueryDependency.setAttribute("integrity", "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN");
  jqueryDependency.setAttribute("crossorigin", "anonymous");

  var popperDependency = document.createElement("script");
  popperDependency.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js");
  popperDependency.setAttribute("integrity", "sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh");
  popperDependency.setAttribute("crossorigin", "anonymous");

  var bootstrapJS_Dependency = document.createElement("script");
  bootstrapJS_Dependency.setAttribute("src", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js");
  bootstrapJS_Dependency.setAttribute("integrity", "sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ");
  bootstrapJS_Dependency.setAttribute("crossorigin", "anonymous");

  document.body.appendChild(jqueryDependency);
  document.body.appendChild(popperDependency);
  document.body.appendChild(bootstrapJS_Dependency);
}
