const cta = document.getElementById("cta");
cta.addEventListener("mouseover", () => {
    cta.innerHTML = `<i class="fa-solid fa-plane-departure"></i>`
});
cta.addEventListener("mouseout", () => {
    cta.innerHTML = `<i class="fa-solid fa-city"></i>`
});

Array.from(document.getElementsByClassName("card")).forEach(card => {
    let id = card.getAttribute("data-id");
    let ip = card.getAttribute("data-ip");
    card.addEventListener("click", () => {
        window.location.href = `fivem://${ip}`;
    });
    if (!id) return;
    fetch(`https://servers-frontend.fivem.net/api/servers/single/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            card.getElementsByClassName("players")[0].innerHTML = data.Data.clients;
        })
        .catch(error => {
            card.getElementsByClassName("players")[0].innerHTML = "0";
            console.error('Error:', error);
        });
});