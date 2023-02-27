loadPhon= async(searchText)=>{
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data= await res.json()
    displayPhon(data.data
        )
}

const displayPhon= phones =>{
    console.log(phones)
 const phoneContiner= document.getElementById('phon-container')
 phoneContiner.textContent=''
 phones= phones.slice(0,3)
 phones.forEach(phon => {
    const phonDiv= document.createElement('div');

    phonDiv.classList.add('col');
    phonDiv.innerHTML=`
    
    <div class="card h-100 p-4">
        <img src="${phon.image
        }" class="card-img-top w-100" alt="...">
        <div class="card-body">
        <h5 class="card-title">${phon.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
  </div>
    
    
    `;
    phoneContiner.appendChild(phonDiv);
 });
}



document.getElementById('bb').addEventListener('click',function(){

    const inpuTag= document.getElementById('ak');
   
    const searchText =inpuTag.value;
    loadPhon(searchText)

})

loadPhon()