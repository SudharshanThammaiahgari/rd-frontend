function displayVideo(wrapper,item){

    let videoId=item.id.videoId;
    
    //Network call to api to get the view Count for every video:
    let url="https://www.googleapis.com/youtube/v3/videos?key="+API_KEY+
                "&id="+videoId+"&part=snippet,statistics";

    fetch(url)
    .then(function(response) { 
        return response.json();
    })
    .then(function(statsData) {

        let viewCount=statsData.items[0]?statsData.items[0].statistics.viewCount : 0;
        console.log("viewCount "+viewCount);

        let videoData= videoTemplate(item,viewCount);

        wrapper.innerHTML+=videoData;
    });
}

function videoTemplate(item,viewCount){

    let title=item.snippet.title;
    let publishedAt=item.snippet.publishedAt.toString().slice(0,10);
    let channelTitle=item.snippet.channelTitle;
    let description=item.snippet.description;
    let videoId=item.id.videoId;

    return `<div class="video">
                <div class="videoFrame">
                    <iframe src="https://www.youtube.com/embed/${videoId}"></iframe>
                </div>
                <div class="videoDescription">
                    <h3>${channelTitle}</h3>
                    <a target="_blank" href="https://www.youtube.com/watch?v=${videoId}">
                    ${title}
                    </a>
                    <p>${description}</p>
                    <div class="countDate">
                        <p>${viewCount} Views</p>
                        <p>Published on ${publishedAt}</p> 
                    </div>
                </div>
            </div>`;
}