

function getSelectionText() {
    var text = "";
    
    if (window.getSelection) {
        text = window.getSelection().toString();
       // console.log(text);
        //console.log("1");
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
        //console.log("2");
    }
    text=text.trim();
    return text;
}



document.onmouseup=function(){
//console.log("1");
var ul = getSelectionText();
//console.log(ul);


//var baseUrl = "http://www.omdbapi.com/?t=+ $(ul)&apikey=3e0bfca6 ";
var baseurl = "http://www.omdbapi.com/?t=+$"+ ul + "&apikey=3e0bfca6";
//console.log(baseurl);




$.ajax({
            type: 'GET',
            url: baseurl,
            //data: {id: 'enter_game'},
            dataType: 'json',
            cache: false,
            success: function(result) {

                    alert(result.imdbRating);

                    
}
})
 


};


//var lis = ul.getElementsByTagName('li');
//for (var i = 0; i < lis.length; i++) {
  //  console.log(lis[i].innerText);
