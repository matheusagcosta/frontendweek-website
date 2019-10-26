$.ajaxChimp.translations["pt-BR"] = {
  "submit": "Enviando...",
  0: "Enviamos uma mensagem de confirmação para o seu email.",
  1: "Por favor coloque um email válido.",
  2: "O e-mail deve conter um único @",
  3: "Parte final do email é inválido (a parte após o @: )",
  4: "Parte inicial do email é inválido(a parte antes do @: )",
  5: "Este endereço de email parece inválido. Insira um endereço de email real"
};

$("#newsletter-subscribe").ajaxChimp({
  language: "pt-BR"
});

$('.sidebar__city').on('click', () => {
  $('.sidebar__city').toggleClass('sidebar__city--active')
  $('.sidebar__days').toggleClass('sidebar__days--active')
})

particlesJS.load('particles', 'assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});