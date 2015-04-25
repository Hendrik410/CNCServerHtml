var rootPageMain;

Polymer({
    ready: function(){
        rootPageMain = this;
        setTimeout(this.getElements, 2000);
    },
    
    getElements: function(){
        
        rootPageMain.registerListeners();
    },
    
    registerListeners: function(){
        
    }
    
});
