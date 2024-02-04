// Get every content inside all <h2> tags
const titles = document.getElementsByTagName('h2')
for (const title of titles) {
    console.log(title.textContent)
}

const textBoxElement = document.querySelector('section>p#text_4~span')
console.log(textBoxElement.innerText);

const sectionWrapperElement = document.getElementsByClassName('sectionWrapper')
const lastSectionWrapperElement = sectionWrapperElement[4]
const contentWrappersInCurrentSection = lastSectionWrapperElement.getElementsByTagName('p')
const secondContentWrapperInCurrentSection = contentWrappersInCurrentSection[1]
console.log(secondContentWrapperInCurrentSection.innerText)

secondContentWrapperInCurrentSection.style.color = '#4cbe2e'
secondContentWrapperInCurrentSection.style.backgroundColor = 'rgb(50 222 5 / 14%)'