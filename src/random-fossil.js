import axios from 'axios'

document.querySelector("#get-random-fossil").addEventListener('click', async () => {
    const response = await axios.get("/random-fossil.json")
    document.querySelector("#random-fossil-image").innerHTML = `<img src="${response.data.img}" alt="Random Fossil"/>`
    document.querySelector("#random-fossil-name").innerText = response.data.name
})
