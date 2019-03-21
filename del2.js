

    (function(){

    
        var anchor = document.getElementById('anchor');
        anchor.onclick = function(){
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 || xhr.readyState == 200 || xhr.readyState == 304){
                    xhr.responseText;
                    var body = document.getElementsByTagName("body")[0];
                    //var p = document.createElement("p");
                    //var textNode = document.createTextNode(xhr.responseText);
                    //p.appendChild(textNode);
                    //body.appendChild(p);
                    var div = document.createElement("div");
                    div.innerHTML = xhr.responseText;
                    body.appendChild(div);
                }
            }
            xhr.open("GET", "data.txt", true);
            xhr.send(null);
            return false;
        }
    
    })();