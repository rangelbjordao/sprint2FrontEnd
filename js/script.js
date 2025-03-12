document.addEventListener('DOMContentLoaded', function () {
    const eventDateInput = document.getElementById('data-evento');

    eventDateInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        if (value.length >= 5) {
            value = value.slice(0, 5) + '/' + value.slice(5, 9);
        }

        e.target.value = value;
    });
});
