// 

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Alternar o painel clicado
            var panel = this.nextElementSibling;
            var isActive = this.classList.contains("active");

            // Fechar todos os outros painéis
            for (var j = 0; j < acc.length; j++) {
                var otherPanel = acc[j].nextElementSibling;
                acc[j].classList.remove("active");
                otherPanel.style.maxHeight = null;
            }

            // Se o painel clicado não estava ativo, ativá-lo
            if (!isActive) {
                this.classList.add("active");
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
