const btns = document.querySelectorAll('button');
console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0));
console.log(btns[0].classList.add('red', 'brown'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

if (btns[1].classList.contains('red')) {
    console.log('red');
} else {
    console.log('button has not red');
}