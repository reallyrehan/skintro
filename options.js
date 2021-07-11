function checkboxSetter(stream_service,switch_name){
    var checkbox = document.getElementById(switch_name);


    chrome.storage.sync.get(stream_service, function(result) {
        console.log('Value currently is ' + result[stream_service]);
        value = result[stream_service];
    
        if (value){
            console.log("ALREADY TRUE")
          document.getElementById(switch_name).checked=true;
    
        }
        else{
            console.log("FALSE")
          document.getElementById(switch_name).checked=false;
    
        }
    
      });




    checkbox.addEventListener('change', function() {
      if (this.checked) {
          var value = true;
    
        chrome.storage.sync.set({[stream_service]: value}, function() {
            console.log('Value for '+stream_service+' is set to ' + value);
          });
      } else {
        var value = false;
        chrome.storage.sync.set({[stream_service]: value}, function() {
            console.log('Value for '+stream_service+' is set to ' + value);
          });
      }
    });


}
checkboxSetter('Netflix','netflixSwitch');
checkboxSetter('Disney+','disneySwitch');
checkboxSetter('Prime','amazonSwitch');
checkboxSetter('Peacock','peacockSwitch');



