var rootPageLogin;
var inpPassKey;
var btnLogin;
var loginSuccessful = new Event("login-successful");
var corrPass = {words: [ 1214869534, -64001430, 1843278394, -125793082 ], sigBits: 16};

function checkLogin(){
    if(CryptoJS.MD5(inpPassKey.value).words[0] === corrPass.words[0] && CryptoJS.MD5(inpPassKey.value).words[1] === corrPass.words[1] && CryptoJS.MD5(inpPassKey.value).words[2] === corrPass.words[2] && CryptoJS.MD5(inpPassKey.value).words[3] === corrPass.words[3]){
        rootPageLogin.dispatchEvent(loginSuccessful);
        console.log("login successful");
    }
}

Polymer({
    ready: function(){
        rootPageLogin = this;
        setTimeout(this.getElements, 2000);
    },
    
    getElements: function(){
        btnLogin = document.getElementById("btnLogin");
        inpPassKey = document.getElementById("inpPassKey");
        rootPageLogin.registerListeners();
    },
    
    registerListeners: function(){
    	console.log("registerListeners");
        btnLogin.addEventListener("click", checkLogin);
        
    }
    
});
