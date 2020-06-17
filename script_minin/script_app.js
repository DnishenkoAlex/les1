// window.alert(1)
// window.confirm('')
// window.prompt('')



//document  - DOM верево 
// const heading = document.getElementById('Hello')
// console.log(heading)
// console.dir(heading)



// setTimeout(() => {
//     addStylesTo(heading)
// }, 1500);

// function addStylesTo(node) {
//     node.textContent = 'Рим тевирп'
//     node.style.color = 'red'
//     node.style.textAlign = 'center'
//     node.style.background = 'green'
// }

// const heading2 = document.getElementsByTagName('h2')[0]
// console.log(heading2)

// const heading3 = document.getElementsByClassName('h3_class')
// console.log(heading3)


//querySelector возвращяет всегда один элемент первый попавшийся

// const heading4 = document.querySelector('h4')
// const heading4 = document.querySelector('.h4_class')
// const heading4 = document.querySelector('#h4_id')
// console.log(heading4)


// как обратиться к элементу если нету идентификатора

const heading5 = document.querySelector('h5')
console.log(heading5)
const heading5 = .h5_class.nextElementSibling
