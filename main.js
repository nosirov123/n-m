const container = document.getElementById("container");
const inputSearch = document.getElementById("input");
const btn = document.getElementById("btn");
const select = document.getElementById("select");
function showData(data) {
    container.innerHTML = "";

    data.forEach((value) => {
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="num-badge">${value.num}</div>
            <h1>${value.name}</h1>
            <img src="${value.img}" width="100" height="107" alt="">
            <div class="type-badge">${value.type}</div>
            <h3>${value.candy_count}</h3>
            <p class="weight">${value.weight}</p>
            <span class="weaknesses">${value.weaknesses}</span>
            <div class="spawn-time">${value.spawn_time}</div>
        `;

        container.appendChild(card);
    });
}

showData(data);

btn.addEventListener('click' , () => {
    let inpValue = inputSearch.value.toLowerCase();
    let filteredCards = data.filter((value) =>
        value.name.toLowerCase().includes(inpValue)
    );
    showData(filteredCards);
});

select.addEventListener('change' , (e) => {
    console.log(e.target.value);
    let sortedData = [...data];
    if (e.target.value === "A-Z") {
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (e.target.value === "Z-A") {
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }
    showData(sortedData);
    
})
