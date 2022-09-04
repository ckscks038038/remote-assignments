async function ajax(src, callback) {
  // your code here
  try {
    const response = await fetch(src)
    const responseJSON = await response.json()
    callback(responseJSON)
  } catch (error) {
    console.log("error message:", error)
  }
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  const render = document.getElementById("render")
  data.map((product) => {
    const section = document.createElement("section")
    render.appendChild(section)
    section.innerHTML = `
        <h2>${product.name}</h2>
        <h3>price: ${product.price}</h3>
        <p>${product.description}</p>
        <hr>
      `
  })
}
ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response)
  }
) // you should get product information in JSON format and render data in the page
