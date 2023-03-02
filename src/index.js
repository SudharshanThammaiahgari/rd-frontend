import fetchHeadLines from "./fetchApi";
import './styles/main.scss';

const headBtn=document.getElementById('news');
headBtn.addEventListener('click',fetchHeadLines);
