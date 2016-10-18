function httpRequest(url, word, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url+word, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        callback(xhr.responseText);
    }
  }
  xhr.send();
}

httpRequest('https://api.shanbay.com/bdc/search/?word=', word, function(word){
  
});