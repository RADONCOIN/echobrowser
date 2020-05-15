


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
	if(e[0]===null || e[0]==="" || e[0]===undefined || e[0]===" " || e[0]===false||e[0]==="false"){
		e[0]="*^"
		console.log('sliced!')
	}
		if(e[1]===null || e[1]==="" || e[1]===undefined || e[1]===" " || e[1]===false||e[1]==="false"){
		e[1]="*^"
		console.log('sliced!')
	}
	if(e[2]===null || e[2]==="" || e[2]===undefined || e[2]===" " || e[2]===false||e[2]==="false"){
		e[2]="*^"
		console.log('sliced')
	}

	
	resultaat = resultaat +  "{'vertaling':"+"'https://"+res[i]+"','stam':'"+e[0]+"','stam2':'"+e[1]+"','stam3':'"+e[2]+"','tekstlink':'"+res[i]+"'},";
 	// https://pt-br.facebook.com/pages/category/dvd-video-store/
	resultaat = resultaat.replace(/\s/g, '');

	resultaat = resultaat.replace(/,'stam3':''/g, "");
	resultaat = resultaat.replace(/,'stam2':''/g, "");
	resultaat = resultaat.replace(/,'stam1':''/g, "");

	$( "#tekst" ).text(resultaat);
}
}


