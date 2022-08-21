const welcomeMsg = document.querySelector(".banner")
const callAction = document.querySelector(".main-footer span")
const hidden = document.querySelector(".hidden")

hidden.style.display = "none"

console.log(hidden)
welcomeMsg.addEventListener("click", () => {
  welcomeMsg.innerHTML = "<h1>Have a Good Time!</h1>"
})

callAction.addEventListener("click", () => {
  if (hidden.style.display === "none") {
    hidden.style.display = "flex"
  }
  let fullPageHeight = document.body.clientHeight
  let btnHiddenHeight = hidden.getBoundingClientRect().top
  scrollBy(0, fullPageHeight - btnHiddenHeight)
})
