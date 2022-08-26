
const Imgmodal= document.querySelectorAll('.img');
// let Inmodal= document.querySelector('.inmodal').getAttribute('src');
const Modal= document.querySelector('.modal');
const closeBtn= document.querySelector('.closebtn');

const openModal= ()=>{
  Modal.classList.remove('hidden');
}
const closeModal= ()=>{
  Modal.classList.add('hidden');}


// for(let i=1; i <= Imgmodal.length; i++){
//   openModal.
// }

// console.log(i);
// console.log(Inmodal);

Imgmodal.forEach((Allimgmodal)=>{
  return Allimgmodal.addEventListener('click',openModal)
});

// Inmodal.addEventListener('click',openModal);

closeBtn.addEventListener('click',closeModal);