function ajaxRequest(url, headerName, headerData, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            callback(xmlHttp);
        }
    }
    xmlHttp.open("POST", url + "?random=" + Math.random(), true);
    headerName.forEach(function(element, index, array){
        xmlHttp.setRequestHeader(element, headerData[index]);
    })

    xmlHttp.send();
}