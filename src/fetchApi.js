function fetchHeadLines(){
    console.log("Clicked button");
    const apiKey="53ca88e8c45d4a549b36364bbf83bf69";
    const q="sports";
    let url="https://newsapi.org/v2/everything?q="+q+"&apiKey="+apiKey;

    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        displayHeadLines(data);
    });
}

function displayHeadLines(data){
    let totalArticles=data.articles.length;

    let headLines=`<div id="headLines"></div>`;
    document.querySelector("body").innerHTML+=headLines;

    for(let i=0;i<totalArticles;i++){
        displayHeadLine(data.articles[i]);
    }
}

function displayHeadLine(articleData){
    let author=articleData.author;
    let title=articleData.title;
    let urlToBlog=articleData.url;
    let publishedAt=articleData.publishedAt;
    let source=articleData.source.name;
    let urlToImage=articleData.urlToImage;
    
    let headLine=`<div class="headLine">
                        <h3 id='title'>${title}</h3>
                        <div class="container">
                            <img src="${urlToImage}">
                            <div class="content">
                                <p id='author'>Author : ${author}</p>
                                <p id='description'>Checkout the full blog <a target="_blank" href=${urlToBlog}> here</a></p>
                                <p id='published'>Published At ${publishedAt}</p>
                                <p id='source'>Source : ${source}</p>
                            </div>
                        </div>
                  </div>`;
    document.getElementById("headLines").innerHTML+=headLine;
    
}

export default fetchHeadLines;
