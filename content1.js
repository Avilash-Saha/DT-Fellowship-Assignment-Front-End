

fetch('project.json')
    .then((response) => response.json())
    .then(function(json){
        let placeholder = document.querySelector("#Asset_contain");
        let placeholderJourney = document.querySelector("#Journey-Board");
        let out = "";
        let journey_board =`<li><b>${json.tasks[0].task_title}</b></li>`;
        for(let product of json.tasks[0].assets){
            if(product.asset_type=="display_asset"){
           out += `
                <div id="a${product.asset_id}" class="asset">
                    <div class="asset-title"><p>${product.asset_title}</p><i class="fa-solid fa-info"></i></div>
                    <div class="asset-description"><b>Description: </b>${product.asset_description}</div>
                    <div><iframe src=${product.asset_content} title="youtube video"></iframe></div>
                </div>
           `;
           journey_board += `
                        <li>${product.asset_title}</li>
           `;
            }
           else{
            out += `
                <div id="a${product.asset_id}" class="asset">
                    <div class="asset-title"><p>${product.asset_title}</p><i class="fa-solid fa-info"></i></div>
                    <div class="asset-description"><b>Description: </b>${product.asset_description}</div>
                    <div>${product.asset_content} </div>
                </div>
          `;
          journey_board += `
                        <li>${product.asset_title}</li>
            `; 
            }
        }
      
        placeholder.innerHTML = out;
        placeholderJourney.innerHTML = journey_board;
     });
