function fetchData(url) {
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("generateRecords  ", data);
        displayVideos(videoList, data);
    });
}

function fetchDataFromYoutube(){

    let searchText=queryById("search").value;
    let url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                +maxResults+"&q="+searchText+"&type=video&key="+API_KEY;
    
    fetchData(url);
}

function generateRecords(pageToken){
    let searchText=queryById("search").value;

    let url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                +maxResults+"&q="+searchText+"&type=video&key="+API_KEY+"&pageToken="+pageToken;
    
    fetchData(url);
}

function displayVideos(wrapper, data){

    wrapper.innerHTML="";
    queryById("footerText").innerHTML="";

    let searchText=queryById("search").value;

    let videoText=`<div>
                        Search Results for "${searchText}"</div>
                    </div>`;

    queryById("videoSearchText").innerHTML=videoText;
    
    data.items.forEach(item => {
        displayVideo(wrapper,item);
    });
    
    let footerText=`<h2>Youtube Search</h2>`;
    queryById("footerText").innerHTML=footerText;
    apply_pagination(paginList,data);
}