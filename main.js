const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
]; 


/*
<div class="col-12 col-md-6 col-lg-4">  
  <div class="card d-flex flex-row">
    <img src="./img/male1.png" alt="Marco Bianchi">
    <div class="card-body bg-black text-white">
      <h4>Marco Bianchi</h4>
      <p>Designer</p>
      <a href="#">marcobianchi@team.com</a>
    </div>
  </div>
</div> 
*/

const rowEl = document.querySelector(".row") 

let cards = ""
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  const {name, role, email, img} = member 
  const murkupString = `
  <div class="col-12 col-md-6 col-lg-4">  
    <div class="card d-flex flex-row">
      <img src="${img}" alt="${name}">
      <div class="card-body bg-black text-white">
        <h4>${name}</h4>
        <p>${role}</p>
        <a href="#">${email}</a>
      </div>
    </div>
  </div> 
` 

cards += murkupString 
  
}

rowEl.innerHTML = cards 

const formEl = document.querySelector("div form")
formEl.addEventListener("submit", function(e){
  e.preventDefault()

})
