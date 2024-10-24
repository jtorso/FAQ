const plus = document.getElementById(`plus`)
const minus = document.getElementById(`minus`)
const text = document.getElementById(`text`)
const plus2 = document.getElementById(`plus-2`)
const minus2 = document.getElementById(`minus-2`)
const text2 = document.getElementById(`text-2`)
const plus3 = document.getElementById(`plus-3`)
const minus3 = document.getElementById(`minus-3`)
const text3 = document.getElementById(`text-3`)
const plus4 = document.getElementById(`plus-4`)
const minus4 = document.getElementById(`minus-4`)
const text4 = document.getElementById(`text-4`)


plus.addEventListener(`click`, ()=> {
  plus.classList.add(`not-active`);
  minus.removeAttribute(`id`)
  minus.classList.add(`active`);
  text.classList.add(`text-active`);
})

plus2.addEventListener(`click`, ()=> {
  plus2.classList.add(`not-active`);
  minus2.removeAttribute(`id`)
  minus2.classList.add(`active`);
  text2.classList.add(`text-active`);
})

plus3.addEventListener(`click`, ()=> {
  plus3.classList.add(`not-active`);
  minus3.removeAttribute(`id`)
  minus3.classList.add(`active`);
  text3.classList.add(`text-active`);
})

plus4.addEventListener(`click`, ()=> {
  plus4.classList.add(`not-active`);
  minus4.removeAttribute(`id`)
  minus4.classList.add(`active`);
  text4.classList.add(`text-active`);
})

minus.addEventListener(`click`, ()=> {
  plus.classList.remove(`not-active`);
  minus.setAttribute(`id`, `minus`);
  minus.classList.remove(`active`);
  text.classList.remove(`text-active`);
})

minus2.addEventListener(`click`, ()=> {
  plus2.classList.remove(`not-active`);
  minus2.setAttribute(`id`, `minus-2`);
  minus2.classList.remove(`active`);
  text2.classList.remove(`text-active`);
})

minus3.addEventListener(`click`, ()=> {
  plus3.classList.remove(`not-active`);
  minus3.setAttribute(`id`, `minus-3`);
  minus3.classList.remove(`active`);
  text3.classList.remove(`text-active`);
})

minus4.addEventListener(`click`, ()=> {
  plus4.classList.remove(`not-active`);
  minus4.setAttribute(`id`, `minus-4`);
  minus4.classList.remove(`active`);
  text4.classList.remove(`text-active`);
})



