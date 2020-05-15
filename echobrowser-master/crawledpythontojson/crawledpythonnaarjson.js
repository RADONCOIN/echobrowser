//define the variables;
var e;
var res;
var i;
var httpCheck;
//start the functions
function start(){
	//define resultaat;
	var resultaat="";

	var result2;

	//aks for input;
	var str = prompt("input graag");

	//split on every ENTER;
	res = str.split('\n');
		
	//log the new Array;
	console.log(res)
	
	//define the loop that creates the text in JSON;

for (i = 2; i < res.length; i++) {


	var isresihttps1 = isresihttps(res[i]);
	if(isresihttps1===false){
		httpsCheck="'ishttp':'true'";
	}
	else{

		httpsCheck="'ishttp':'false'";
	
	}





	//calls the removeExtentionsfunction;
	removeExtentions()


 	e=e.split('/');

	console.log(e)

	//catches some bugs
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

	

	 // {
     //        'vertaling':'https://www.amazon.com/PlayStation-Slim-1TB-Console-Fortnite/dp/B07VJWMQ5T/ref=as_li_ss_tl?crid=3S5VZPW7FCT29&keywords=playstation+4&qid=1581009194&sprefix=plays,aps,247&sr=8-4&linkCode=ll1&tag=searchify01b-20&linkId=099b25645ab66fe3f831482d153dc5d2',
     //        'stam': 'console',
     //        'stam2': 'play station',
     //        'stam3': 'ps4',
     //        'tekstlink': 'PlayStation 4 Slim 1TB Console - Fortnite Bundle $250.99',
    //			'ishttp': 'true'
     //    },



	//the thing
	resultaat = resultaat +  "{'vertaling':"+"'"+res[i]+"','stam':'"+e[0]+"','stam2':'"+e[1]+"','stam3':'"+e[2]+"','tekstlink':'"+res[i]+"',"+httpsCheck+"},";
 	// https://pt-br.facebook.com/pages/category/dvd-video-store/


 	//deletes spaces+enters
	resultaat = resultaat.replace(/\s/g, '');
	//catches bugs
	resultaat = resultaat.replace(/,'stam3':''/g, "");
	resultaat = resultaat.replace(/,'stam2':''/g, "");
	resultaat = resultaat.replace(/,'stam':''/g, "");

	//displays result
	$( "#tekst" ).text(resultaat);
}
}


function removeExtentions(){
	 e=res[i].split('.')
	var extentionsdelete = [",nl", ",com", ",us",",be", ",ch", ",edu",",net", ",org", ",co",",info", ",uk", ",cn",",shop", ",store", ",gay",",game", ",ru", ",eu",",cx", ",to", ",ly",",gl", ",link", ",me", ",ffm",","];
 	e=e.toString();


 	e=e.replace("www,", "");
 	e=e.replace("https://", "");
 		e=e.replace("http://", "");


 	 // 	e=e.replace(',com',"")
 	 // 	e=e.replace(',ch',"")
 	 // 	e=e.replace(',org',"")
 	 // 	e=e.replace(',net',"")
 	 // 	e=e.replace(',co',"")
 	 // 	e=e.replace(',de',"")
 	 // 	e=e.replace(',nl',"")
 	 // 	e=e.replace(',us',"")
 	 // 	e=e.replace(',be',"")
 	 // 	e=e.replace(',edu',"")

 	var k;
		for ( k = 0; k < extentionsdelete.length; k++) {
		 	e=e.replace(extentionsdelete[k],"")
		    console.log('hoi')
		}

}

function isresihttps(inpute){
	var yesorno=inpute.startsWith('https://');

	return yesorno;
}