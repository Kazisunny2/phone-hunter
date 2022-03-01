const allPhones = () =>{
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
    <div class="card border grid p-2 py-5 m-3">
    <div class="pro-pic">
        <img class="w-50" src="${phone.image}" alt="">
    </div>
    <h2>Name: ${phone.phone_name}</h2>
    <h5>Brand: ${phone.brand} </h5>
    <div class="allbutton">
        <button class="btn btn-danger">Others</button>
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
   .then((data) => showPhoneDetails(data));
} 