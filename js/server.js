function fetchData(url) {
    return fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
    });
}

function fetchContent(searchText){
    let url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                +maxResults+"&q="+searchText+"&type=video&key="+API_KEY;
    return fetchData(url);
}

function fetchNext(pageToken){
    let searchText=queryById("search");
    if(searchText){
        let url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                    +maxResults+"&q="+(searchText.value)+"&type=video&key="+API_KEY+"&pageToken="+pageToken;
        return fetchData(url);
    }
}

async function displayData(searchText){
    let data=await fetchContent(searchText);
    displayVideos(videoList, data);
}

async function generateRecords(pageToken){
    let data=await fetchNext(pageToken);
    displayVideos(videoList, data);
}

function displayVideos(wrapper, data){
    wrapper.innerHTML="";
    queryById("footerText").innerHTML="";

    let searchText=queryById("search");
    if(searchText){
        searchText=searchText.value;
    }

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