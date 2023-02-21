
// console.log("Hello World");
// $(document).ready(function(){

//     var searchText,
//     API_KEY="AIzaSyC-apYkmBREJFkP7z6lTkc-wvB2AVar3k8",
//     maxResults=15,
//     url,
//     records=[],
//     totalRecords=0,
//     totalPages=0,
//     recPerPage=0,
//     nextPageToken="";

//     $(".form").submit(function(event){
//         event.preventDefault();

//         searchText=$(".search-box").val();

//         url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet
//         &maxResults=${maxResults}&q=${searchText}&type=video&key=${API_KEY}`;

//         $.get(url,function(data){
//             displayVideos(data);
//         });


//     });

//     function displayVideos(data){
        
        // recPerPage=data.pageInfo.resultsPerPage;
        // totalRecords=data.pageInfo.totalResults;
        // totalPages=Math.ceil(totalRecords/recPerPage);
        // nextPageToken=data.nextPageToken;

        // apply_pagination();

        // var videoData="";

        // console.log(data);
        // data.items.forEach(item => {

        //     videoData=`<div class="video">
        //                 <div>
        //                     <img width="200" height="200" src="${item.snippet.thumbnails.high.url}">
        //                 </div>
        //                 <div>
        //                     <a target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}">
        //                     ${item.snippet.title}
        //                     </a>
        //                 </div>
        //             </div>
        //         <hr>`;

        //     $(".videos").append(videoData);
            
        // });
//     }

//     function apply_pagination(){
//         let li;
//         for(let i=1;i<=10;i++){
//             if(i==1){
//                 li=`<li><a href="#" class="current">${i}</a></li>`;
//             }else{
//                 li=`<li><a href="#">${i}</a></li>`;
//             }
//             $("#pagin").append(li);
//         }
//         let liNext=`<li><a href="#" class="next-btn">Next</a></li>`;
//         $("#pagin").append(liNext);

//         $("#pagin li a").click(function(){
//             $("#pagin li a").removeClass("current");
//             $(this).addClass("current");
//         });
//     }



//     function generateRecords(nextPageToken){
    
//         const url2=`https://youtube.googleapis.com/youtube/v3/search?part=snippet
//         &maxResults=${maxResults}&q=${searchText}&type=video&key=${API_KEY}&pageToken=${nextPageToken}`;

//         $.get(url2,function(data){
//             displayVideos(data);
//         });
//     }
// });


console.log("hello1");

// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
//         .then(function() { 
//                 console.log("Sign-in successful"); 
//             },
//             function(err) { 
//                 console.error("Error signing in", err); 
//             }
//         );
//     }

// function loadClient() {
//     gapi.client.setApiKey("AIzaSyC-apYkmBREJFkP7z6lTkc-wvB2AVar3k8");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() {
//                  console.log("GAPI client loaded for API"); 
//              },
//              function(err) { 
//                  console.error("Error loading GAPI client for API", err); 
//              }
//             );
// }

// function execute() {
//     return gapi.client.youtube.search.list({
//       "part": [
//         "snippet"
//       ],
//       "maxResults": 15,
//       "q": "java",
//       "type": [
//         "video"
//       ]
//     }).then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { 
//                 console.error("Execute error", err); 
//             }
//         );
//   }

//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "477587698340-tqohhpli2f2j72462rcnb76mdo2g9d76.apps.googleusercontent.com"});
//   });

//authenticate().then(loadClient);
//   execute();

console.log("hello2");

var form=document.getElementById("myForm");

form.addEventListener('submit',function(event){
    event.preventDefault();
   
    getVideos();
})


var API_KEY="AIzaSyC5kvxuhyuLX5No7WCurPoeVimBhtTRTok";
var maxResults=15;

var videoList=document.getElementById("videos");
var paginList=document.getElementById("pagination");

function getVideos(){
    var searchText=document.getElementById("search").value;
    
    var url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                +maxResults+"&q="+searchText+"&type=video&key="+API_KEY;
   
    fetch(url)
    .then(function(response) { 
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        displayVideos(videoList,data);
    });
    
}


function displayVideos(wrapper, data){
    wrapper.innerHTML="";
    document.getElementById("footerText").innerHTML="";
    var searchText=document.getElementById("search").value;
    var videoData=`<div class="video">
                        <div>Search Results for "${searchText}"</div>
                    </div>`;

    wrapper.innerHTML=videoData;
    
    data.items.forEach(item => {

        //let imageUrl=item.snippet.thumbnails.high.url;
        let videoId=item.id.videoId;
        let title=item.snippet.title;
        let publishedAt=item.snippet.publishedAt.toString().slice(0,10);

        //Network call to api to get the view Count for every video:
        let url="https://www.googleapis.com/youtube/v3/videos?key="+API_KEY+"&id="+videoId+"&part=snippet,statistics";

        var viewCount;
        fetch(url)
        .then(function(response) { 
            return response.json();
        })
        .then(function(statsData) {
            viewCount=statsData.items[0]?statsData.items[0].statistics.viewCount : 0;
            console.log("viewCount "+viewCount);

            videoData=`<div class="video">
                        <div class="videoFrame">
                            <iframe src="https://www.youtube.com/embed/${videoId}"></iframe>
                        </div>
                        <div class="videoDescription">
                            <h3>${item.snippet.channelTitle}</h3>
                            <a target="_blank" href="https://www.youtube.com/watch?v=${videoId}">
                            ${title}
                            </a>
                            <p>${item.snippet.description}</p>
                            <div class="countDate">
                                <p>${viewCount} Views</p>
                                <p>Published on ${publishedAt}</p> 
                            </div>
                        </div>
                    </div>`;

            wrapper.innerHTML+=videoData;
        });
    });
    var footerText=`<h2>Youtube Search</h2>`;
    document.getElementById("footerText").innerHTML=footerText;
    apply_pagination(paginList,data);
}

var currentPage=1;

function apply_pagination(wrapper,data) {
    
    wrapper.innerHTML="";

    let prevBtn=document.createElement('button');
    prevBtn.innerText="Prev";
    prevBtn.id="prev";
    wrapper.appendChild(prevBtn);

    prevBtn.addEventListener('click',function(){
        currentPage-=1;
        console.log("currentPage -->",currentPage);
        generateRecords(data.prevPageToken);
    });

    for(let i=1;i<=10;i++){
       let btn=paginationButton(i,data);
       wrapper.appendChild(btn);
    }
    let nextBtn=document.createElement('button');
    nextBtn.innerText="Next";
    nextBtn.id="next";
    wrapper.appendChild(nextBtn);

    nextBtn.addEventListener('click',function(){
        currentPage+=1;
        console.log("currentPage -->",currentPage);
        generateRecords(data.nextPageToken);
    });
}

function paginationButton(page,data){
    let button=document.createElement('button');
    button.innerText=page;

    if(currentPage==page){
        button.classList.add('active');
    }

    button.addEventListener('click',function(){
        currentPage=page;
        generateRecords(data.nextPageToken);
        let current_btn=document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');
        
        button.classList.add('active');
    });


    return button;
}

function generateRecords(pageToken){
    var searchText=document.getElementById("search").value;

    var url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                +maxResults+"&q="+searchText+"&type=video&key="+API_KEY+"&pageToken="+pageToken;
    
    fetch(url)
    .then(function(response) { 
        return response.json();
    })
    .then(function(data) {
         console.log("generateRecords  ",data);
        displayVideos(videoList,data);
    });
}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("this.responseText ",this.responseText);
      }
    };
    xhttp.open("GET", "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=java&type=video&key=AIzaSyC5kvxuhyuLX5No7WCurPoeVimBhtTRTok", true);
    xhttp.send();
  }

// loadDoc();