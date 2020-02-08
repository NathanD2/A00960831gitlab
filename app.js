var tbl = document.createElement("table");
tbl.setAttribute("id", "tbl");
var div = document.getElementById("movietable");

moviehistory = [];

function countMovie(){
    var movieInput = document.getElementById("new-movie").value;

    var inList = false;

    //If there is no movie in the list already, add it to the table and list with a watch number = 1
    if (moviehistory.length == 0){

        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var celltext = document.createTextNode(movieInput);

        cell.appendChild(celltext);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var celltext = document.createTextNode(1);

        cell.appendChild(celltext);
        row.appendChild(cell);

        tbl.appendChild(row);
        div.appendChild(tbl);

        moviehistory.push({
            "movie": movieInput,
            "watchnum": 1
        })
    }

    else{
        var inlist = false;

        //iterate through moviehistory array.
        for (var i = 0; i < moviehistory.length; i++){
            
            //if the movie is already in the list, increment watch counter by 1
            if (movieInput == moviehistory[i]['movie']){
                moviehistory[i]['watchnum']++;
                
                document.getElementById("tbl").rows[i].cells[1].innerHTML = moviehistory[i]['watchnum'];
                
                //console.log(moviehistory[i]['watchnum']);

                inlist = true;
                //console.log("Movie in list");
                
                //exit out of function
                return;
            }
            
        }
        //If the movie is not in the table, add it to the table and create a new object in moviehistory array
        if (inlist == false){
            
            //Create new row in table
            var row = document.createElement("tr");

            //Create cell in row for movie name
            var cell = document.createElement("td");
            var celltext = document.createTextNode(movieInput);
            cell.appendChild(celltext);
            row.appendChild(cell);

            //Create cell in row for watch number
            var cell = document.createElement("td");
            var celltext = document.createTextNode(1);
            cell.appendChild(celltext);
            row.appendChild(cell);

            //Add row to table and append it to div
            tbl.appendChild(row);
            div.appendChild(tbl);

            //Add object into moviehistory array
            moviehistory.push({
                "movie": movieInput,
                "watchnum": 1
            })
        }
    }
}

function getInput(){
    
    var li = document.createElement("li");
    var movieInput = document.getElementById("new-movie").value;
    var movieText = document.createTextNode(movieInput);
    li.appendChild(movieText);

    document.getElementById("movie-list").appendChild(li);
    
}




var list = document.getElementById("movie-list")
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI')
    document.getElementById("movie-list").removeChild(ev.target);
});

function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    var myMovieList = document.querySelector("ul");
    myMovieList.innerHTML = '';
}
// function clearMovies(){
//     var movieList = document.getElementById("movie-list");
//     //console.log(movieList.length);
//     while(movieList.hasChildNodes){
//         movieList.removeChild(movieList.firstChild);
//     }
// }
