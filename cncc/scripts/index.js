var pages = document.getElementById("PagesMain");
var pageLogin = document.querySelector("page-login");

pageLogin.addEventListener("login-successful", function(){
    console.log("logged in!");
    pages.selected = 1;
    rootPageMain.SelectedPage = 0;
});