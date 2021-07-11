function getCurrentTabUrl(callback) {  
    var queryInfo = {
      active: true, 
      currentWindow: true
    };
  
    chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0]; 
      var url = tab.url;
      
      callback(url);
    });
  }
  
  function renderURL(statusText) {
    document.getElementById('service_name').html = statusText;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    getCurrentTabUrl(function(url) {
        const netflixRegex = "https://.*netflix.com*";
        const primeRegex = "https://.*amazon.com*";
        const primeRegex2 = "https://.*primevideo.com";
        const peacockRegex = "https://.*peacocktv.com*";
        const disneyRegex = "https://.*disneyplus.com*";
        
        console.log(url.match(primeRegex2))


        if (url.match(netflixRegex) !== null ){
            var stream_service = 'Netflix'
            checkboxSetter(stream_service);
        }
        else if (url.match(primeRegex) !== null || url.match(primeRegex2) !== null){

            var stream_service = 'Prime'
            checkboxSetter(stream_service);
        }
        else if (url.match(disneyRegex) !== null ){
            var stream_service = 'Disney+'
            checkboxSetter(stream_service);
        }
        // else if (url.match(huluRegex) !== null ){
        //     var stream_service = 'Hulu'
        //     checkboxSetter(stream_service);
        // }
        else if (url.match(peacockRegex) !== null ){
            var stream_service = 'Peacock'
            checkboxSetter(stream_service);
        }

        else{
            // renderURL("N/A"); 
            disableCheckbox();
    }

      
    });

    




  });


  function checkboxSetter(stream_service){
    var checkbox = document.querySelector(".onoffswitch-checkbox");
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

    document.getElementById('service_name').textContent = stream_service;

    var value;
    chrome.storage.sync.get(stream_service, function(result) {
        console.log('Value currently is ' + result[stream_service]);
        value = result[stream_service];

        if (value){
            console.log("ALREADY TRUE")
          document.getElementsByClassName('onoffswitch-checkbox')[0].checked=true;

        }
        else{
            console.log("FALSE")
          document.getElementsByClassName('onoffswitch-checkbox')[0].checked=false;

        }

      });

  }

  function disableCheckbox(){
    document.getElementById('service_name').textContent = "N/A";
    document.getElementById('service_name').style.opacity = "0.4";
    document.getElementsByClassName('onoffswitch-checkbox')[0].checked=false;
    document.getElementsByClassName('onoffswitch-checkbox')[0].disabled=true;
    document.getElementsByClassName('onoffswitch')[0].style.opacity = "0.4";
  }


// var checkbox = document.querySelector(".onoffswitch-checkbox");

// checkbox.addEventListener('change', function() {

    

//   if (this.checked) {

//       var value = true;
//     chrome.storage.sync.set({'Netflix': value}, function() {
//         console.log('Value is set to ' + value);
//       });

      
//       console.log("Checkbox is checked..");
//   } else {

//     var value = false;
//     chrome.storage.sync.set({'Netflix': value}, function() {
//         console.log('Value is set to ' + value);
//       });


//     console.log("Checkbox is not checked..");
//   }
// });