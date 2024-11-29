// Pobranie aktualnej daty i wyświetlenie w elemencie z id "date"
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date");
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = `Białystok, ${now.toLocaleDateString('pl-PL', options)}`;
});
