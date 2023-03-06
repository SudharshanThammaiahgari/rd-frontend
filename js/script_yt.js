var API_KEY="AIzaSyAG7u_sQGo1CcN0nWpaFdtqDXgTO5cL2G0";
var maxResults=15;

var videoList=queryById("videos");
var paginList=queryById("pagination");

var form=queryById("myForm");

if(form){
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let searchText=queryById("search").value;
        displayData(searchText);
    });
}

function queryById(id){
    return document.getElementById(id);
}
