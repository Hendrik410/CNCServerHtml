var rootManualControl;
var CNCStats;
var drillToogle;
var drillSpeed;
var continuousMove;
var movementSpeed;

Polymer({
    ready: function(){
        rootManualControl = this;
        
        CNCStats = {posX: "300", posY: "250", posZ: "30", laser: false, continuousMovement: false};
        this.CNCStats = CNCStats;

        setTimeout(this.getElements, 2000);
    },
    
    getElements: function(){
        drillToogle = document.getElementById("toggleDrill");
        drillSpeed = document.getElementById("sliderDrill");
        continuousMove = document.getElementById("btnContinuousMovement");
        movementSpeed = document.getElementById("slideSpeed");

        rootManualControl.registerListeners();
    },
    
    registerListeners: function(){
        drillSpeed.addEventListener("change", rootManualControl.drillSpeedChange);
        movementSpeed.addEventListener("change", rootManualControl.movementSpeedChange());
    },

    //id: 0=forward, 1=backward, 2=left, 3=right, 4=up, 5=down
    //type: 0=ManualControl
    arrowControlClick: function(id){
        ajaxRequest("/ajax",["type", "direction"], ["0", id], function(){});
    },

    drillToggleClick: function(){
        var val;
        if(CNCStats.laser == false){
            CNCStats.laser = true;
            drillToogle.innerHTML = "on";
            val = 1;
        } else {
            CNCStats.laser = false;
            drillToogle.innerHTML = "off";
            val = 0;
        }

        ajaxRequest("/ajax", ["type", "drillToggle", "drillValue"], ["0", val, drillSpeed.value], function(){});
    },

    drillSpeedChange: function(){
        if(CNCStats.laser == true){
            ajaxRequest("/ajax", ["type", "drillToggle", "drillValue"], ["0", "1", drillSpeed.value], function(){});
        }
    },

    continousMovementClick: function(){
        if(CNCStats.continuousMovement){
            CNCStats.continuousMovement = false;
            continuousMove.src = "icons/fastForward.png";
        } else {
            CNCStats.continuousMovement = true;
            continuousMove.src = "icons/fastForwardGreen.png";
        }

        ajaxRequest("/ajax", ["type", "continuousMovement"], ["0", CNCStats.continuousMovement], function(){});
    },

    movementSpeedChange: function(){
        ajaxRequest("/ajax", ["type", "StepCount"], ["0", movementSpeed.value], function(){});
    }
});
