import fetch from "cross-fetch"
async function ajax(src, callback) {
  // your code here
  const response = await fetch(src)
  const responseJSON = await response.json()
  callback(responseJSON)
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  console.log(data)
}
ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response)
  }
) // you should get product information in JSON format and render data in the page
