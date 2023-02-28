var YTS = YTS || {};

YTS.pagination = function (){
    var currentPage=1;
    return {
        clickPrevButton: function(data){
            let prevBtn=document.createElement('button');
            prevBtn.innerText="Prev";
            prevBtn.id="prev";
            
            prevBtn.addEventListener('click',function(){
                if(currentPage>=2){
                    currentPage-=1;
                    console.log("currentPage -->",currentPage);
                    generateRecords(data.prevPageToken);
                }
            });
            return prevBtn;
        },
        clickNextButton: function (data){

            let nextBtn=document.createElement('button');
            nextBtn.innerText="Next";
            nextBtn.id="next";
        
            nextBtn.addEventListener('click',function(){
                currentPage+=1;
                console.log("currentPage -->",currentPage);
                generateRecords(data.nextPageToken);
            });
        
            return nextBtn;
        },
        paginationButton: function (page,data){
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
        },
        apply_pagination: function(wrapper,data) {
        
            wrapper.innerHTML="";
        
            let prevBtn=this.clickPrevButton(data);
            wrapper.appendChild(prevBtn);
        
            for(let i=1;i<=10;i++){
               let btn=this.paginationButton(i,data);
               wrapper.appendChild(btn);
            }
        
            let nextBtn=this.clickNextButton(data);
            wrapper.appendChild(nextBtn);
        },
        updateCurrentPage:function(){
            currentPage=1;
        }
    }
}();





