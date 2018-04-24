let taskAll = document.querySelectorAll('input[type="checkbox"]'),
    list = document.querySelector('.list-block'),
    result = document.querySelector('output'),
    total = 0,
    counter = 0;

for (let item of taskAll) {
  total++;
   if (item.checked) {
    counter++;
  }
  item.addEventListener('click', check)
}

result.value = `${counter} из ${total}`;

function check() {
  if (this.checked) {
    counter++;
  } else {
    counter--;
  }
  
  if (counter === 4) {
    list.classList.add('complete');
  } else {
    list.classList.remove('complete');
  }
  result.value = `${counter} из ${total}`;
}