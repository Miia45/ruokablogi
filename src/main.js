import 'bootswatch/dist/minty/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

function showPage(pageId) {

  
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active")
  })

  
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active")
  })

  
  const activeSection = document.getElementById(pageId)
  if (activeSection) {
    activeSection.classList.add("active")
  } else {
    document.getElementById("home").classList.add("active")
  }


  const activeLink = document.querySelector(`.nav-link[href="#${pageId}"]`)
  if (activeLink) {
    activeLink.classList.add("active")
  }
}


window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#", "")
  showPage(hash || "home")
})


window.addEventListener("DOMContentLoaded", () => {

  const hash = window.location.hash.replace("#", "")
  showPage(hash || "home")


  const form = document.getElementById("recipeForm")
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault()
      document.getElementById("formSuccess").classList.remove("d-none")
      form.reset()
    })
  }

})