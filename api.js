console.log("dogs");
// Do the search
 	


var queryDiv = document.getElementById("queryTerm"); // get the searchbox
// get the search term
 	

// if it's blank, give up


     
$('#submit').on('click', function(e){
    e.preventDefault();
    console.log('button clicked!');
    var queryTerm = queryDiv.value;
    if (queryTerm == ""){
alert("Enter a search term"); // put up an explanation for the user
}else{
    getNews(queryTerm)
}
console.log(queryTerm.value);
});


// Do the API call

function getNews(queryTerm){
   $.ajax({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryTerm}&api-key=iIKRUO5eS71ZOKae2bhUmNM8o9q69AGt`,

        type: 'GET',

}).then(function(data){
    console.log(data);
}); 
}

function createArticles(doc:Array)


var name = 'lauren';
