// 2. Test cases for the pagination

describe("To test the pagination",function(){
    let data;
    beforeAll(async function(){
        data = await fetchContent("javascript");

        let footer = document.createElement('footer');
        paginList=document.createElement("div");
        paginList.classList.add("pagenumbers");
        paginList.setAttribute("id","pagination");
        footer.appendChild(paginList);

        document.body.appendChild(footer);
    });

    it("To check whether pagination button is called",function(){
        spyOn(window,"paginationButton");
        spyOn(window,"generateRecords");
        apply_pagination(paginList,data);
        expect(paginationButton).toHaveBeenCalled();
        expect(generateRecords).toHaveBeenCalled();
    });

    it("To check whether prev and next update functions are getting called",function(){
        spyOn(window,"updatePrevItems");
        spyOn(window,"updateNextItems");
        apply_pagination(paginList,data);
        expect(updateNextItems).toHaveBeenCalled();
        expect(updatePrevItems).toHaveBeenCalled();
    });
});

describe("To check for UI updation",function(){
    let data;
    beforeAll(async function(){

        let results=document.createElement('section');
        results.setAttribute("id","results");

        let videoSearchText=document.createElement('div');
        videoSearchText.setAttribute("id","videoSearchText");
        results.appendChild(videoSearchText);

        videoList=document.createElement('div');
        videoList.setAttribute("id","videos");
        results.appendChild(videoList);

        document.body.appendChild(results);

        // For the footer text
        let footer = document.createElement('footer');
        let footerText=document.createElement("div");
        footerText.setAttribute("id","footerText");
        footer.appendChild(footerText);
        document.body.appendChild(footer);
        
        data=await fetchContent("javascript");
    });

    it("After fetching content",function(){
        spyOn(window,"displayVideo");
        spyOn(window,"apply_pagination");
        displayVideos(videoList,data);
        expect(displayVideo).toHaveBeenCalled();
    });

    it("After fetching content",function(){
        spyOn(window,"videoTemplate");
        spyOn(window,"apply_pagination");
        displayVideos(videoList,data);
        // expect(videoTemplate).toHaveBeenCalled();
    });
});
