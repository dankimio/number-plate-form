import './style.css'

document.querySelectorAll('#form input').forEach(input => {
  input.addEventListener('input', event => {
    const input= event.target
    const maxlength = input.getAttribute('maxlength')

    if (input.value.length < maxlength) {
      return
    }

    event.target.nextElementSibling.focus()
  })
})
