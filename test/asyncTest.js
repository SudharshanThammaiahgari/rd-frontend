// 1. For the Asynchronous Operations.

describe("To test the fetch data from Youtube API",function(){
    let data;
    beforeAll(async function(){
        // data = sampleData;
        data = await fetchContent("javascript");
    });

    it("fetch Data from API using search Text",function(){
        expect(data.items).not.toEqual([]);
        expect(data.items[0].kind).toEqual("youtube#searchResult");
        expect(data.items[0].id.kind).toEqual("youtube#video");
        expect(data.items[4].id.kind).toEqual("youtube#video");
    });

    it("fetch Data from API with nextPageToken",async function(){
        let data1 = await fetchNext(data.nextPageToken);
        if(data1){
            expect(data1.items).not.toEqual([]);
            expect(data1.items[0].id.kind).toEqual("youtube#video");
            expect(data1.items[4].id.kind).toEqual("youtube#video");
        }
    });

    it("To check the changes in page content after clicking next button",function(){
        spyOn(window,"generateRecords");
        updateNextItems(data);
        expect(currentPage).toEqual(2);
        expect(generateRecords).toHaveBeenCalled();
    });

    it("To check the changes in page content after clicking prev button",function(){
        spyOn(window,"generateRecords");
        updatePrevItems(data);
        expect(currentPage).toEqual(1);
    });

});

