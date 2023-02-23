var currentPage=1;

function clickPrevButton(data){
    let prevBtn=document.createElement('button');
    prevBtn.innerText="Prev";
    prevBtn.id="prev";
    
    prevBtn.addEventListener('click',function(){
        if(currentPage>=1){
            currentPage-=1;
            console.log("currentPage -->",currentPage);
            generateRecords(data.prevPageToken);
        }
    });

    return prevBtn;
}

function clickNextButton(data){

    let nextBtn=document.createElement('button');
    nextBtn.innerText="Next";
    nextBtn.id="next";

    nextBtn.addEventListener('click',function(){
        currentPage+=1;
        console.log("currentPage -->",currentPage);
        generateRecords(data.nextPageToken);
    });

    return nextBtn;
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


function apply_pagination(wrapper,data) {
    
    wrapper.innerHTML="";

    let prevBtn=clickPrevButton(data);
    wrapper.appendChild(prevBtn);

    for(let i=1;i<=10;i++){
       let btn=paginationButton(i,data);
       wrapper.appendChild(btn);
    }

    let nextBtn=clickNextButton(data);
    wrapper.appendChild(nextBtn);
}



