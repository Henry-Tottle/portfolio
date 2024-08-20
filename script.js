const projectCard = document.querySelector('.projects')
const projectList1 = document.querySelector('.projectP1')
const projectList2 = document.querySelector('.projectP2')
const projectList3 = document.querySelector('.projectP3')
const projectList4 = document.querySelector('.projectP4')

const biogCard = document.querySelector('.biog')
const blogList1 = document.querySelector('.blogP1')
const blogList2 = document.querySelector('.blogP2')
const blogList3 = document.querySelector('.blogP3')
const blogList4 = document.querySelector('.blogP4')

const removeHiddenProject = () => {
    projectList1.classList.remove('hidden')
    projectList2.classList.remove('hidden')
    projectList3.classList.remove('hidden')
    projectList4.classList.remove('hidden')
}
const removeHiddenBiog = () => {
    blogList1.classList.remove('hidden')
    blogList2.classList.remove('hidden')
    blogList3.classList.remove('hidden')
    blogList4.classList.remove('hidden')
}
const addHiddenBiog = () => {
    blogList1.classList.add('hidden')
    blogList2.classList.add('hidden')
    blogList3.classList.add('hidden')
    blogList4.classList.add('hidden')
}
const addHidden = () => {
    projectList1.classList.add('hidden')
    projectList2.classList.add('hidden')
    projectList3.classList.add('hidden')
    projectList4.classList.add('hidden')
}

projectCard.addEventListener('mouseenter', removeHiddenProject)
projectCard.addEventListener('mouseleave', addHidden)

biogCard.addEventListener('mouseenter', removeHiddenBiog)
biogCard.addEventListener('mouseleave', addHiddenBiog)