let logInButton = document.getElementById('logInButton');

window.pAsyncInit = function() {
  PDK.init({
    appId: "4968487875086661712",
    cookie: true
  });
};

// (function(d, s, id){
//   var js, pjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {return;}
//   js = d.createElement(s); js.id = id;
//   js.src = "//assets.pinterest.com/sdk/sdk.js";
//   pjs.parentNode.insertBefore(js, pjs);
// }(document, 'script', 'pinterest-jssdk'));

logInButton.onclick = function() {
  PDK.login({ scope: "read_public" }, function (session) {
    if ( ! session) {
        // The user didn't authorize or closed the popup window
    } else {
        // Success!
        console.log(session.auth_token); // Save this to the database along with other info
    }
  });
}


// $(document).ready(function(){
//   const Url='https://api.chucknorris.io/jokes/random';
//   $.ajax({
//     url: Url,
//     type: "GET",
//     success: function(result){
//       console.log(result)
//     },
//     error:function(error){
//       console.log(`Error ${error}`)
//     }
//   })
// })
