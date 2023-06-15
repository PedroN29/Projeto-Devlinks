function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  const img = document.querySelector('img')
  if(html.classList.contains('light')) {
    img.src = 'assets/avatar-light.png'
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros, jaqueta e fundo azul gradiente."
    )
  } else {
    img.src = 'assets/avatar-dark.png'
  }

}