const allPhones = () =>{ 
    document.getElementById("phone-container").innerHTML= "";
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    //console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => showPhoneDetails(data.data));
}

const showPhoneDetails = (phones) => {
 for(const phone of phones){
    const parent = document.getElementById('phone-container')
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = ` <div>
    <div class="card border p-2 py-3 m-3">
    <div>
        <img class="w-50" src="${phone.image}" alt="">
    </div>
    <h4>Name: ${phone.phone_name}</h2>
    <h5>Brand: ${phone.brand} </h5>
    <div class="allbutton">
        <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
    </div>
</div>
    </div> `
    parent.appendChild(div)
 }
}
const details = (info) => {
   const url = `https://openapi.programming-hero.com/api/phone/${info}`
   fetch(url)
   .then((response) => response.json())
   .then((data) => setDetails(data.data));
} 
const setDetails = (info) => {
    document.getElementById("details-container").innerHTML =`
    <div>
        <h2>Phone Details</h2>
        <img src="${info.image}" alt="">
        <h5>Name:${info.name}</h5>
        <h5>Release Date:${info.releaseDate}</h5>
        <h5>Cheapset:${info.mainFeatures.chipSet}</h5>
        <h5>Memory:${info.mainFeatures.memory}</h5>
        <h5>Storage:${info.mainFeatures.storage}</h5>
        <h5>Display Size:${info.mainFeatures.displaySize}</h5>
    </div>`
}