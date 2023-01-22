const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists) {
    alert("O dia já foi incluso.🤨")
    return

  }
  alert('O dia foi adicionado com sucesso!😆')

  nlwSetup.addDay(today)
}
 
function save() {
   localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

/*const data = {
  water: ['01-01', '01-02', '01-07', '01-08', '02-11', '02-09', '02-10'],
  run: ['01-03'],
  study: ['02-02']
} */

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()



