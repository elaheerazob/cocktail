const searchFeld = () =>{
    const inputFeld = document.getElementById('input-feld');
    const inputFeldValue =inputFeld.value;
    // console.log(inputFeldValue);
    toggleSpinner('block')
    if(inputFeld.value == ''){
        alert('Felds Empty')
    }else{
        const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputFeldValue}`
    fetch(url)
    // console.log(url);
    .then(res => res.json())
    .then(data => displayDrink(data.drinks))
    }

    
    inputFeld.value ='';
}
//spinner 
 const toggleSpinner = (style) =>{
    const spinner =document.getElementById('spinner');
    spinner.style.display =(style)
 }


//display drink 
const displayDrink = drink =>{
    // console.log(drink);
    if(drink ==null){
        alert('No result Fund ')
    }else{
        const cocktelShow =document.getElementById('cocktel-show');
    cocktelShow.textContent ='';
    drink.forEach(drinks => {
            // console.log(drinks);
        
        const div =document.createElement('div');
        div.classList.add('card','col-6','bg-secondary')
        div.innerHTML =`
                    <div id="myCard" class="text-white  " style="width: 18rem;">
                        <img src="${drinks.strDrinkThumb}" class=" card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${drinks.strDrink}</h5>
                             <p class="card-text">${drinks.strInstructions.slice(0,150)}</p>
                            
                            <button onclick="showDetails('${drinks.idDrink}')" class="btn btn-info">More Details</button>
                            <button onclick="deleteButton('${drinks}')" class="btn btn-danger">Delete</button>
                        </div>
                    </div>`;
        cocktelShow.appendChild(div);          

    });
    toggleSpinner('none')
    }
    
}
//Delete button
const deleteButton = () =>{
    const myCard =document.getElementById('myCard')
    myCard.style.display ='none'
}


//showDetails button
const showDetails = id =>{
    // console.log(id);
    const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    // console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data => detailsisShow(data.drinks[0]))
}
const detailsisShow = detail =>{
    // console.log(detail);
    const cocktailDetaileShow =document.getElementById('cocktail-detaile-show');
    cocktailDetaileShow.textContent ='';
    // cocktailDetaileShow.textContent ='';
    const div =document.createElement('div')
    div.classList.add('card','col-6','mx-auto')
    div.innerHTML =`
                <div  style="width: 18rem;">
                    <img src="${detail.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${detail.strDrink}</h5>
                        <p class="card-text">${detail.strInstructions.slice(0,150)}</p>
                    </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">${detail.strAlcoholic}</li>
                        <li class="list-group-item">${detail.strCategory}</li>
                        <li class="list-group-item">${detail.strCreativeCommonsConfirmed}</li>
                        </ul>
                    <div class="card-body">
                        <a href="#" class="card-link"></a>
                        <a href="#" class="card-link"></a>
                </div>
            </div>
    `;
    cocktailDetaileShow.appendChild(div);
    
}