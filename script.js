const inputs = document.querySelectorAll("input")
const botao = document.querySelector("button")

botao.addEventListener("click", function () {
  const nota1 = Number(inputs[0].value)
  const nota2 = Number(inputs[1].value)

  const media = (nota1 + nota2) / 2

  if (media >= 7) {
    alert(`Aprovado! Sua média foi ${media}`)
  } else {
    alert(`Reprovado! Sua média foi ${media}`)
  }
})