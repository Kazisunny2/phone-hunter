const allPhones = () =>{ 
    document.getElementById("phone-container").innerHTML= "";
    document.getElementById("error-message").innerHTML= "";
    document.getElementById("details-container").innerHTML= "";
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    //console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        if(data.data == false){
            document.getElementById("error-message").innerHTML=`<h3>No Phone Found</h3>`  
        }
        else{
            showPhoneDetails(data.data.slice(0, 20));
        }
    }) 
}
const showPhoneDetails = (phones) => {
 for(const phone of phones){
    const parent = document.getElementById('phone-container')
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = ` <div>
    <div class="card border border-1 p-2 ">
    <div>
        <img class="w-50" src="${phone.image}" alt="">
    </div>
    <h4>Name: ${phone.phone_name}</h4>
    <h6>Brand: ${phone.brand} </h6>
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
    .then((data) => setDetails(data.data)) 
} 
const setDetails = (info) => {
    document.getElementById("details-container").innerHTML =`
    <div>
        <h2>Phone Details</h2>
        <img src="${info.image}" alt="">
        <h3 class"fw-bold">MainFeatures</h3>
        <h5>Name: ${info.name}</h5>
        <h5>Release Date: ${info.releaseDate||'Info will provide soon'}</h5>
        <h5>Cheapset: ${info.mainFeatures.chipSet||'Info will provide soon'}</h5>
        <h5>Memory: ${info.mainFeatures.memory||'Info will provide soon'}</h5>
        <h5>Storage: ${info.mainFeatures.storage||'Info will provide soon'}</h5>
        <h5>Display Size: ${info.mainFeatures.displaySize||'Info will provide soon'}</h5>
        <h3 class"fw-bold">Sensor Information</h3>
        <h5>Sensors: ${info.mainFeatures.sensors||'Info will provide soon'}</h5>
        <h3 class"fw-bold">Others Information</h3>
        <h5>Wlan: ${info?.others?.WLAN||'Info will provide soon'}</h5>
        <h5>Bluetooth": ${info?.others?.Bluetooth||'Info will provide soon'}</h5>
        <h5>GPS: ${info?.others?.GPS||'Info will provide soon'}</h5>
        <h5>NFC: ${info?.others?.NFC||'Info will provide soon'}</h5>
        <h5>Radio: ${info?.others?.Radio||'Info will provide soon'}</h5>
        <h5>USB: ${info?.others?.USB||'Info will provide soon'}</h5>
          
    </div>`
}