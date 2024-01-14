const accordions = document.querySelectorAll('.faqbox');
accordions.forEach(accordion=>{
    const answer = accordion.querySelector('.answer');
    const icon = accordion.querySelector('.icon');
    accordion.addEventListener('click', ()=>{
        answer.classList.toggle('active');
        icon.classList.toggle('active');
    }
    )
})

