const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("dia já incluso🛑")
    return
  }

  alert("Adicionado com sucesso✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@Habits", JSON.stringify(nlwSetup.data))
}

/* treino de inserção do codigo manualmente
const data = {
  training: ["01-01", "01-02", "01-03", "01-04", "01-05"],
  water: ["01-01", "01-02", "01-03"],
  food: ["01-01", "01-02", "01-03"],
  study: ["01-02", "01-03"],
  work: ["01-01", "01-03"],
  walk: ["01-01"],
}

nlwSetup.setData(data)
nlwSetup.load() 
*/
const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
