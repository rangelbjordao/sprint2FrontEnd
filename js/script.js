document.addEventListener('DOMContentLoaded', function() {
    const eventDateInput = document.getElementById('event-date');

    eventDateInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

        // Formata a entrada
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        if (value.length >= 5) {
            value = value.slice(0, 5) + '/' + value.slice(5, 9);
        }

        e.target.value = value; // Atualiza o campo de entrada com a nova formatação
    });
});
