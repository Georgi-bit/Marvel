//const marvel = { 
//  render: () => {
//
//    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cd41a244f371501a99a7e9b107dc1377&hash=e4db7660ff7bf84aafb5a609a5f36a64';
//    const container = document.querySelector('#marvel-row');
//    let contentHTML = '';
//
//    fetch(urlAPI)
//      .then(res => res.json() )
//      .then((json) => {
//       for(const hero of json.data.results){
//         let urlHero = hero.urls[0].url;
//         contentHTML += `
//         <div class="col-md-4">
//            <a href="${urlHero}" target="blank">
//              <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
//            </a>
//            <h3 class="title">${hero.name}</h3>
//          </div>`
//       }
//       container.innerHTML = contentHTML;
//    })
//  }
//};

//  marvel.render();
  const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cd41a244f371501a99a7e9b107dc1377&hash=e4db7660ff7bf84aafb5a609a5f36a64';
  const container = document.querySelector('#marvel-row');
  let contentHTML = '';
	document.getElementById('Anterior').addEventListener('click',Anterior); 
  document.getElementById('Siguiente').addEventListener('click',Siguiente);
	
	fetch (urlAPI)
      .then(res => res.json() ) 
      .then((json) => {
	    let results = json.data.results;
	    var pageNumber=1; 
      var pageSize=10;
       var pagination;	    
       var pageCont =Math.ceil(results.length/pageSize);
       function paginate(array, page_size, page_number) {
          return array.slice((page_number - 1) * page_size, page_number * page_size);
          }
		   function showPersonajes(_results){
            var pagination = paginate(results,pageSize,pageNumber);
            console.log("nextPage",pagination)
            pagination.forEach(element => {
				        let urlHero = element.urls[0].url;
				        contentHTML+=`
                   <div id="col-md-4">
                     <a href="${urlHero}" target="blank">
                     <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}" class="img-thumbnail">
                     </a>
                     <h3 class="title">${element.name}</h3>
                   </div>`;
            console.log(element)
              });
			    container.innerHTML = contentHTML;
         document.getElementById('Anterior').style.display = "none";			
	      };
		   showPersonajes(results);
	    })
	
	function Anterior(){
    fetch (urlAPI)
      .then(res => res.json() ) 
      .then((json) => {
	    let results = json.data.results;
	    var pageNumber=1; 
      var pageSize=10;
      var pagination;
      let contentHTML = '';
      var pageCont =Math.ceil(results.length/pageSize);
      function paginate(array, page_size, page_number) {
          return array.slice((page_number - 1) * page_size, page_number * page_size);
        }
        function showPersonajes(_results){
            var pagination = paginate(results,pageSize,pageNumber);
            console.log("nextPage",pagination)
            pagination.forEach(element => {
				       let urlHero = element.urls[0].url;
				       contentHTML+=`
                   <div id="col-md-4">
                     <a href="${urlHero}" target="blank">
                     <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}" class="img-thumbnail">
                     </a>
                     <h3 class="title">${element.name}</h3>
                   </div>`;
            console.log(element)
              });
			   container.innerHTML = contentHTML;
			   document.getElementById('Siguiente').style.display = "block";
			   document.getElementById('Anterior').style.display = "none";
	      };
		  showPersonajes(results);
	  })
	}	  
	
	function Siguiente(){
      fetch (urlAPI)
       .then(res => res.json() ) 
       .then((json) => {
	     let results = json.data.results;
	     var pageNumber=2; 
       var pageSize=10;
       var pagination;
       let contentHTML = '';
       var pageCont =Math.ceil(results.length/pageSize);
       function paginate(array, page_size, page_number) {
          return array.slice((page_number - 1) * page_size, page_number * page_size);
        }
       function showPersonajes(_results){
          var pagination = paginate(results,pageSize,pageNumber);
          console.log("nextPage",pagination)
          pagination.forEach(element => {
				    let urlHero = element.urls[0].url;
				     contentHTML+=`
                   <div id="col-md-4">
                     <a href="${urlHero}" target="blank">
                     <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}" class="img-thumbnail">
                     </a>
                     <h3 class="title">${element.name}</h3>
                   </div>`;
            console.log(element)
              });
			    container.innerHTML = contentHTML;
			    document.getElementById('Siguiente').style.display = "none";
			    document.getElementById('Anterior').style.display = "block"; 			
	     };
		  showPersonajes(results);
	  })
	}	  
	  
     

  //Declarando variables
inputSearch = document.getElementById("inputSearch");
box_search =  document.getElementById("box-search");
body = document.getElementById("body");

//filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno)
document.getElementById("body").addEventListener("click", buscador_blanck);
  //funcion para poner en blanco el buscador 
  function buscador_blanck(){
    box_search.style.display = "none";
    inputSearch.value = "";
  }

  //filtrado de busqueda
  function buscador_interno(){
    
    filter = inputSearch.value.toUpperCase(); //convierte resultados a mayuscula
    li = box_search.getElementsByTagName("li"); // variable guarda etiquetas dentro del recuardo
    
    //recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){             
      a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
          }
    }
  }

