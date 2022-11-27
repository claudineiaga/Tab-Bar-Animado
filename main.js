
 var abas = document.querySelector('.js-abas');

 var abaItems = document.querySelectorAll
 ('.js-aba-item:not(.js-aba-item-main-control)');
 
 var abaItemMainControl = document.querySelector
 ('.js-aba-item-main-control');
 
 var coverBackBody = document.querySelector('.js-cover-back-body');
 
 var coverBackTabs = document.querySelector('.js-cover-back-abas');

 abaItemMainControl.addEventListener('click', function(){
   if(abas.classList.contains('js-abas-inic')){
    abas.classList.remove('js-abas-inic');
     abaItemMainControl.style.transform = 'rotate(45deg)';
     for(var i = 0; i < abaItems.length; i++){
       abaItems[i].classList.add('js-aba-item-mostrar');
     }
   }else{
     for(var i = 0; i < abaItems.length; i++){
       abaItems[i].classList.remove('js-aba-item-mostrar');
     }
     setTimeout(function(){
       abaItemMainControl.style.transform = 'rotate(0deg)';
       abas.classList.add('js-abas-inic');
     }, 2000);
   }
 });
 
 for(var i = 0; i < abaItems.length; i++){
 
   abaItems[0].classList.add('js-aba-item-ativa');
 
   abaItems[i].addEventListener('click', function(){

     var abaAtiva = document.querySelector('.js-aba-item-ativa');
     abaAtiva.classList.remove('js-aba-item-ativa');
     this.classList.add('js-aba-item-ativa');
 
     coverBackBody.style.animationName = 'remove-background';
     coverBackBody.style.animationDuration = '1s';
     coverBackBody.style.animationTimingFunction = 'linear';
     coverBackBody.style.animationFillMode = 'forwards';
 
     coverBackTabs.style.width = 0;
 
     var self = this;
     window.setTimeout(function(){

       coverBackBody.style.animationName = 'add-background';
       coverBackBody.style.backgroundImage = 'linear-gradient(#' + self.dataset.gradientStart + ', #' + self.dataset.gradientStop + ')'; 
       coverBackBody.classList.add('js-cover-back-animado');

       coverBackTabs.style.backgroundColor = '#' + self.dataset.abaColor;
       coverBackTabs.style.width = '100%';
 
 
     }, 1200);
   })
 }

 abas.classList.add('js-abas-inic');