var init=(function() {

    let form = queryById("myForm");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        fetchDataFromYoutube();
        YTS.pagination.updateCurrentPage();
    });

    return {
        API_KEY : "AIzaSyC5kvxuhyuLX5No7WCurPoeVimBhtTRTok",
        maxResults :15
    }

}());

function queryById(id){
    return document.getElementById(id);
}