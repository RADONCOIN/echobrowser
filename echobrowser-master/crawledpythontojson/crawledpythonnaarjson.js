


function start(){
var resultaat="";
var result2;
	var str = prompt("input graag")

	var res = str.split('https://');

	console.log(res)
	var i;
for (i = 2; i < res.length; i++) {
 	



 	var e=res[i].split('.')

 	e=e.toString();
 	e=e.replace("www", "");
 	e=e.replace(',',"")
 	e=e.replace(',',"")
 		e=e.replace(',',"")
 			e=e.replace(',',"")
 	e=e.replace('com',"")
 	e=e.split('/');

	console.log(e)
	if(e[0]===undefined){
		e.slice([0[0]])
		console.log('sliced!')
	}

	
	resultaat = resultaat +  "{'vertaling':"+"'https://"+res[i]+"','stam':'"+e[0]+"','stam2':'"+e[1]+"','stam3':'"+e[2]+"','tekstlink':'"+res[i]+"'},";
 	// https://pt-br.facebook.com/pages/category/dvd-video-store/
	resultaat = resultaat.replace(/\s/g, '');
	$( "#tekst" ).text(resultaat);
}
}


