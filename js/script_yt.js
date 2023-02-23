console.log("hello1");
console.log("hello2");

var API_KEY="AIzaSyC5kvxuhyuLX5No7WCurPoeVimBhtTRTok";
var maxResults=15;

var videoList=queryById("videos");
var paginList=queryById("pagination");

var form=queryById("myForm");

form.addEventListener('submit',function(event){
    event.preventDefault();
    fetchDataFromYoutube();
});

function queryById(id){
    return document.getElementById(id);
}





// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log("this.responseText ",this.responseText);
//       }
//     };
//     xhttp.open("GET", "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=java&type=video&key=AIzaSyC5kvxuhyuLX5No7WCurPoeVimBhtTRTok", true);
//     xhttp.send();
//   }

// loadDoc();