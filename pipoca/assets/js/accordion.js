var acc = document.getElementsByClassName("accordion");
var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var panel = this.nextElementSibling;
//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//       } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//       }
//     });
// }

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Fechar todos os painéis, exceto o clicado
        for (var j = 0; j < acc.length; j++) {
            var panel = acc[j].nextElementSibling;
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                // Forçar a transição antes de definir null
                panel.style.maxHeight = panel.scrollHeight + "px";
                setTimeout((function(panel) {
                    return function() {
                        panel.style.maxHeight = null;
                    };
                })(panel), 10);
            }
        }

        // Alternar o painel clicado
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}