const modal = document.querySelector('.proposed-modal');
const modalTrigger = document.querySelector('.proposed-modal-trigger');
const modalClose = document.querySelector('.proposed-modal-close')

modalTrigger.addEventListener('click', (e)=> {
    modal.classList.remove('modal-close');
    if(!modal.classList.contains('modal-close')) {
        modalClose.addEventListener('click', (e)=>{
            modal.classList.add('modal-close')
        });
        modal.addEventListener('click', (e)=>{
            modal.classList.add('modal-close')
        })
    }
})