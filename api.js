
	
function queryTerm(){
	
// Do the search
 	


var queryTerm = document.getElementById("queryTerm"); // get the searchbox
var queryTerm = queryTerm.value; // get the search term
 	

// if it's blank, give up

if (searchterm == ""){
	
alert("Enter a search term"); // put up an explanation for the user

return; // jump out of this funciton

}
 	


// Do the API call

$.ajax({

        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=iIKRUO5eS71ZOKae2bhUmNM8o9q69AGt',

        type: 'GET',

        data: {q : searchterm},
	
        success: function(r){

        displayResults(r);	
        },
	
        error: function(e){
	
            alert("Something went wrong: " + e);
	
        }
21	
});
	
}