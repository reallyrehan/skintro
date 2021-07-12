/**
 * Gets the desired element on the client page and clicks on it
 */
var Arrive=function(e,t,n){"use strict";function r(e,t,n){l.addMethod(t,n,e.unbindEvent),l.addMethod(t,n,e.unbindEventWithSelectorOrCallback),l.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function i(e){e.arrive=f.bindEvent,r(f,e,"unbindArrive"),e.leave=d.bindEvent,r(d,e,"unbindLeave")}if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var o=0,l=function(){var t=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector;return{matchesSelector:function(e,n){return e instanceof HTMLElement&&t.call(e,n)},addMethod:function(e,t,r){var i=e[t];e[t]=function(){return r.length==arguments.length?r.apply(this,arguments):"function"==typeof i?i.apply(this,arguments):n}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var i,o=0;i=e[o];o++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&l.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return n===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}}(),c=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),a=function(t,r){var i=new c,o=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,l=n.target;(l===e.document||l===e)&&(l=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n)});var c=t(n.options);i.observe(l,c),n.observer=i,n.me=o}),i.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=l.mergeArrays(a,t);for(var r=l.toElementsArray(this),o=0;o<r.length;o++)i.addEvent(r[o],e,t,n)},this.unbindEvent=function(){var e=l.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(e){var t,r=l.toElementsArray(this),o=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===o)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=l.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1})},this},s=function(){function e(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t}function t(e,t){e.forEach(function(e){var n=e.addedNodes,i=e.target,o=[];null!==n&&n.length>0?l.checkChildNodesRecursively(n,t,r,o):"attributes"===e.type&&r(i,t,o)&&o.push({callback:t.callback,elem:i}),l.callCallbacks(o,t)})}function r(e,t){return l.matchesSelector(e,t.selector)&&(e._id===n&&(e._id=o++),-1==t.firedElems.indexOf(e._id))?(t.firedElems.push(e._id),!0):!1}var i={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};f=new a(e,t);var c=f.bindEvent;return f.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t);var o=l.toElementsArray(this);if(t.existing){for(var a=[],s=0;s<o.length;s++)for(var u=o[s].querySelectorAll(e),f=0;f<u.length;f++)a.push({callback:r,elem:u[f]});if(t.onceOnly&&a.length)return r.call(a[0].elem,a[0].elem);setTimeout(l.callCallbacks,1,a)}c.call(this,e,t,r)},f},u=function(){function e(){var e={childList:!0,subtree:!0};return e}function t(e,t){e.forEach(function(e){var n=e.removedNodes,i=[];null!==n&&n.length>0&&l.checkChildNodesRecursively(n,t,r,i),l.callCallbacks(i,t)})}function r(e,t){return l.matchesSelector(e,t.selector)}var i={};d=new a(e,t);var o=d.bindEvent;return d.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t),o.call(this,e,t,r)},d},f=new s,d=new u;t&&i(t.fn),i(HTMLElement.prototype),i(NodeList.prototype),i(HTMLCollection.prototype),i(HTMLDocument.prototype),i(Window.prototype);var h={};return r(f,h,"unbindAllArrive"),r(d,h,"unbindAllLeave"),h}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);



        // document.arrive(".ytp-ad-skip-button",function(){
//     document.getElementsByClassName('ytp-ad-skip-button')[0].click();

// });


// function generateNotification(serv){
//     chrome.runtime.sendMessage('', {
//         type: 'notification',
//         options: {
//           title: 'SkIntro',
//           message: 'We skipped the '+serv+' intro for you!',
//           iconUrl: '/icon.png',
//           type: 'basic'
//         }
//       });
// }


function generateNotification(serv){
    // console.log("HELLO");
    // console.log(document.getElementById('message'));
    var notif_key = "notification";
    chrome.storage.sync.get(notif_key, function(result) {
        value = result[notif_key];
    
        if (value){

            if (document.getElementById('message') == null )
            {
                console.log("Notifications are On")
                var button = document.createElement("div");
                button.innerHTML = '<div style = "background-color:black; color:white;top:10px;right:10px;position:absolute;z-index: 9999" id="message" ><p style="margin-left:8px;margin-right:8px;">Skipped Intro</p></div>';
                // button.style = "color:white;top:10px;right:10px;position:absolute;z-index: 9999"
                document.body.appendChild(button);
                setTimeout(disableNotification,3000);
            }
            else if (document.getElementById('message').style.display == "none" ){
                document.getElementById('message').style.display="block";
                setTimeout(disableNotification,3000);
            }
    
        }
        else{
            console.log("Notifications are Off")
        }
    
      });

    }
    
    // <div style = "top:10px;right:10px;position:absolute;z-index: 9999" id="message" >Skipped Intro</div>
    

function disableNotification(){
    document.getElementById('message').style.display="none";
}



if (location.hostname == "www.netflix.com"){

    var stream_service = "Netflix";
    console.log(stream_service)


    document.arrive(".skip-credits",function(){


        chrome.storage.sync.get(stream_service, function(result) {
            value = result[stream_service];
    
            if (value ){
                document.getElementsByClassName("nf-icon-button")[0].click();
                console.log("Skipped Intro")
                // console.log(document.querySelector('.ellipsize-text'));
        
                generateNotification('Netflix');
    
            }
            else{
                console.log("Skipping Off")
            }
    
          });



    });

}
else if (location.hostname == "www.youtube.com"){

    var stream_service = "YouTube";
    console.log(stream_service)


    document.arrive(".ytp-ad-skip-button",function(){



        chrome.storage.sync.get(stream_service, function(result) {
            value = result[stream_service];
    
            if (value ){
                document.getElementsByClassName("ytp-ad-skip-button")[0].click();
                console.log("Skipped Ad")
                // console.log(document.querySelector('.ellipsize-text'));
        
                generateNotification(stream_service);
    
            }
            else{
                console.log("Skipping Off")
            }
    
          });



    });

}
else if (location.hostname == "www.amazon.com" || location.hostname == "www.primevideo.com"){

    var stream_service = "Prime";
    console.log(stream_service)


    

    document.arrive(".atvwebplayersdk-skipelement-button",function(){
        
        st_time = document.getElementsByClassName('atvwebplayersdk-timeindicator-text')[0].textContent.split(" ")[0]
        // console.log(st_time)


        chrome.storage.sync.get(stream_service, function(result) {
            value = result[stream_service];

    
            if (value){
                document.getElementsByClassName("atvwebplayersdk-skipelement-button")[0].click();

                // setTimeout(testFunc(st_time),3000);

                // console.log(document.getElementsByClassName('atvwebplayersdk-timeindicator-text')[0].textContent.split(" ")[0])

                console.log("Skipping Intro")
                generateNotification('Amazon');
    
            }
            else{
                console.log("Skipping Off")
            }
    
          });





        // console.log(document.querySelector('.ellipsize-text'));
    });

}

else if (location.hostname == "www.peacocktv.com"){

    var stream_service = "Peacock"
    console.log(stream_service)


    document.arrive(".playback-controls__skip--button",function(){




        chrome.storage.sync.get(stream_service, function(result) {
            value = result[stream_service];
    
            if (value){
                document.getElementsByClassName("playback-controls__skip--button")[0].click();
                console.log("Skipping Intro")
        
                generateNotification('Peacock');
    
            }
            else{
                console.log("Skipping Off")
            }
    
          });







        // console.log(document.querySelector('.ellipsize-text'));
    });

}
else if (location.hostname == "www.disneyplus.com"){



    var stream_service = "Disney+"
    console.log(stream_service)


    document.arrive(".skip__button",function(){

        chrome.storage.sync.get(stream_service, function(result) {
            value = result[stream_service];
    
            if (value){
                document.getElementsByClassName("skip__button")[0].click();
                console.log("Skipped Intro")
        
                generateNotification('Disney+');
    
            }
            else{
                console.log("Skipping Off")
            }
    
          });

        // console.log(document.querySelector('.ellipsize-text'));
    });

}
// else if (location.hostname == "www.hulu.com"){
//     console.log("HULU YAY");
//     document.arrive(".SkipButton__button",function(){
//         document.getElementsByClassName("SkipButton__button")[0].click();
//         console.log("SKIP FOUND")

//         generateNotification('Hulu');
//         // console.log(document.querySelector('.ellipsize-text'));
//     });

// }





{/* <button class="fqye4e3 fovm8oe fez7z67 fektfsf fif0hcs f177tia9 fww9brl f1nxf0rp f1ylp05h atvwebplayersdk-skipelement-button f1cg7427 f989gul f1rjin6j f19qnh9o" style="padding: 0px 22px; line-height: normal; min-width: 0px;">Skip Intro</button> */}


// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
    
    
//     document.arrive(".skip-credits",function(){
//         // document.getElementsByClassName("nf-icon-button")[0].click();
//         console.log("SKIP")
//         console.log(document.querySelector('.ellipsize-text'));
        
    
//     });
//   });


//   console.log(document.getElementsByClassName("ellipsize-text"));


// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting === "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );

// document.arrive(".skip-credits",function(){
//     // document.getElementsByClassName("nf-icon-button")[0].click();
//     console.log("SKIP")
//     console.log(document.querySelector('.ellipsize-text'));
//     console.log(document.getElementsByClassName('ellipsize-text'));



// });
// console.log("Hello3")


// function testFunc(st_time){
//     console.log(st_time)
//     console.log(document.getElementsByClassName('atvwebplayersdk-timeindicator-text')[0].textContent.split(" ")[0])

//     console.log("Skipped Intro")
//     generateNotification('Amazon');
// }