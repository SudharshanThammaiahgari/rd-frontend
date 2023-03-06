import './styles/main.scss';

const headBtn=document.getElementById('news');

headBtn.addEventListener('click',function(){
    import("./fetchApi").then((module)=>{
        module.default();
    }).catch(console.error);
});
