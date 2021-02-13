let i = 1;
/*array1 = carousel.querySelectorAll('li');*/

for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

const width = 130;
const count = 3;

const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function() {
  
  position += width * count;
  
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  
  position -= width * count;
  
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
