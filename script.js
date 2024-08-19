const projectCard = document.querySelector('.projects')
const projectList1 = document.querySelector('.projectP1')
const projectList2 = document.querySelector('.projectP2')
const projectList3 = document.querySelector('.projectP3')
const projectList4 = document.querySelector('.projectP4')

projectCard.addEventListener('mouseenter', () => {
    projectList1.classList.remove('hidden')
    projectList2.classList.remove('hidden')
    projectList3.classList.remove('hidden')
    projectList4.classList.remove('hidden')
})
projectCard.addEventListener('mouseleave', () => {
    projectList1.classList.add('hidden')
    projectList2.classList.add('hidden')
    projectList3.classList.add('hidden')
    projectList4.classList.add('hidden')

})