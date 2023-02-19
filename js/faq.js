document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq__btn').forEach((item) =>
        item.addEventListener('click', () => {
            document.querySelectorAll('.faq__question').forEach((item) =>
                item.classList.remove('faq__question_open')
            )
            item.parentElement.classList.add('faq__question_open')
        })
    )
})