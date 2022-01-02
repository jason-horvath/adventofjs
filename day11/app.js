var questions = [...document.querySelectorAll('.title-toggle')]


questions.forEach((question, index) => {
  question.addEventListener('click', (e) => {
    const classList = question.parentNode.classList
    const answerNode = question.parentNode.querySelector('.answer')
    classList.contains('expand') ? classList.remove('expand') : classList.add('expand') ;
  })
})