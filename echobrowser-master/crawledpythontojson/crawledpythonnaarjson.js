


function start(){
var resultaat="";
var result2;
	var str = $( "#tekst" ).text();

	var res = str.split('https://');

	console.log(res)
	var i;
for (i = 2; i < res.length; i++) {
 	

 	resultaat =  "{'vertaling':"+"'https://"+res[i]+"','stam':'"+res[i]+"','stam2':'"+res[i]+"','stam3':'"+res[i]+"','tekstlink':'"+res[i]+"'},";
	

	// result2=resultaat.split(' ')
	// resultaat=result2;
	resultaat = resultaat.replace(/\s/g, '');
	$( "#tekst" ).text(resultaat);
}
}


