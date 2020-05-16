  // if(res[ip].includes(".com") === false&res[ip].includes(extentioncheck[0])=== false &res[ip].includes(extentioncheck[1])=== false   &&res[ip].includes(extentioncheck[2])=== false   &&res[ip].includes(extentioncheck[3])=== false   &&res[ip].includes(extentioncheck[4])  === false &&res[ip].includes(extentioncheck[5]) === false  &&res[ip].includes(extentioncheck[6]) === false &&res[ip].includes(extentioncheck[7])=== false   &&res[ip].includes(extentioncheck[8])=== false   &&res[ip].includes(extentioncheck[9])=== false   &&res[ip].includes(extentioncheck[10])=== false   &&res[ip].includes(extentioncheck[11])=== false   &&res[ip].includes(extentioncheck[12])=== false   &&res[ip].includes(extentioncheck[13])=== false   &&res[ip].includes(extentioncheck[14]) === false  &&res[ip].includes(extentioncheck[15]) === false  &&res[ip].includes(extentioncheck[16]) === false  &&res[ip].includes(extentioncheck[17]) === false  &&res[ip].includes(extentioncheck[18]) === false &&res[ip].includes(extentioncheck[19]) === false  &&res[ip].includes(extentioncheck[20])=== false   &&res[ip].includes(extentioncheck[21])=== false   &&res[ip].includes(extentioncheck[22]) === false &&res[ip].includes(extentioncheck[23])=== false&&res[ip].includes(extentioncheck[24])=== false && res[ip].includes(extentioncheck[25])=== false){
  //      		console.log('door 2e:' + res[ip])
  //       res.splice(ip, 1);
       
  //   }




//define the variables;
var e;
var res;
var i;
var ip;
var extentioncheck;
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
	console.log(res)
 extentioncheck = [".com", ".nl", ".us",".be", ".ch", ".edu",".net", ".org", ".co",".info", ".uk", ".cn",".shop", ".store", ".gay",".game", ".ru", ".eu",".cx", ".to", ".ly",".gl", ".link", ".me", ".ffm", ".fi",".de", ".tl", ".tv", ".it",".es", ".gg", ".xyz",".io", ".bg",".st",".sc",".is",".CH",".click",".do",".md",".fm",".gd",".cr",".gov"];
 console.log(extentioncheck.length)
var search_term = '.com';

console.log(extentioncheck.length)
// var ip=res.length-1; ip>=0; ip--
for (ip = 0; ip < res.length; ip++) {

	//(extentioncheck[0]===false&extentioncheck[1]===false&extentioncheck[2]===false&extentioncheck[3]===false&extentioncheck[4]===false&extentioncheck[5]===false&extentioncheck[6]===false&extentioncheck[7]===false&extentioncheck[8]===false&extentioncheck[9]===false&extentioncheck[10]===false&extentioncheck[11]===false&extentioncheck[12]===false&extentioncheck[13]===false&extentioncheck[14]===false&extentioncheck[15]===false&extentioncheck[16]===false&extentioncheck[17]===false&extentioncheck[18]===false&extentioncheck[19]===false&extentioncheck[20]===false&extentioncheck[21]===false&extentioncheck[22]===false&extentioncheck[23]===false&extentioncheck[24]===false)

    if (res[ip].includes(".") === false ) {

    	console.log('I killed:' + res[ip])
        res.splice(ip, 1);
       
    }
       if(res[ip].includes(".com") === false&res[ip].includes(extentioncheck[0])=== false &res[ip].includes(extentioncheck[1])=== false   &&res[ip].includes(extentioncheck[2])=== false   &&res[ip].includes(extentioncheck[3])=== false   &&res[ip].includes(extentioncheck[4])  === false &&res[ip].includes(extentioncheck[5]) === false  &&res[ip].includes(extentioncheck[6]) === false &&res[ip].includes(extentioncheck[7])=== false   &&res[ip].includes(extentioncheck[8])=== false   &&res[ip].includes(extentioncheck[9])=== false   &&res[ip].includes(extentioncheck[10])=== false   &&res[ip].includes(extentioncheck[11])=== false   &&res[ip].includes(extentioncheck[12])=== false   &&res[ip].includes(extentioncheck[13])=== false   &&res[ip].includes(extentioncheck[14]) === false  &&res[ip].includes(extentioncheck[15]) === false  &&res[ip].includes(extentioncheck[16]) === false  &&res[ip].includes(extentioncheck[17]) === false  &&res[ip].includes(extentioncheck[18]) === false &&res[ip].includes(extentioncheck[19]) === false  &&res[ip].includes(extentioncheck[20])=== false   &&res[ip].includes(extentioncheck[21])=== false   &&res[ip].includes(extentioncheck[22]) === false &&res[ip].includes(extentioncheck[23])=== false&&res[ip].includes(extentioncheck[24])=== false && res[ip].includes(extentioncheck[25])=== false&& res[ip].includes(extentioncheck[26])=== false&& res[ip].includes(extentioncheck[27])=== false&& res[ip].includes(extentioncheck[28])=== false&& res[ip].includes(extentioncheck[29])=== false&& res[ip].includes(extentioncheck[30])=== false&& res[ip].includes(extentioncheck[31])=== false&& res[ip].includes(extentioncheck[32])=== false&& res[ip].includes(extentioncheck[33])=== false&& res[ip].includes(extentioncheck[34])=== false&& res[ip].includes(extentioncheck[35])=== false&& res[ip].includes(extentioncheck[36])=== false&& res[ip].includes(extentioncheck[37])=== false&& res[ip].includes(extentioncheck[38])=== false&& res[ip].includes(extentioncheck[38])=== false&& res[ip].includes(extentioncheck[39])=== false&& res[ip].includes(extentioncheck[40])=== false&& res[ip].includes(extentioncheck[41])=== false&& res[ip].includes(extentioncheck[42])=== false&& res[ip].includes(extentioncheck[43])=== false&& res[ip].includes(extentioncheck[44])=== false&& res[ip].includes(extentioncheck[45])=== false){
       		console.log('door 2e:' + res[ip])
        res.splice(ip, 1);
       
    }
	// else if (res[ip].includes(extentioncheck[1]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[2]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[3]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[4]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[5]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[6]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[7]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[8]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[9]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[10]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[11]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[12]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[13]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[14]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[15]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[16]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[17]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[18]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[19]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[20]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[21]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[22]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[23]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[24]) === false) {
 //        res.splice(ip, 1);
 //    }
 //    	else if (res[ip].includes(extentioncheck[25]) === false) {
 //        res.splice(ip, 1);
 //    }

}


	//log the new Array;

	
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



	//catches some bugs
	if(e[0]===null || e[0]==="" || e[0]===undefined || e[0]===" " || e[0]===false||e[0]==="false"){
		e[0]="*^"
	}
		if(e[1]===null || e[1]==="" || e[1]===undefined || e[1]===" " || e[1]===false||e[1]==="false"){
		e[1]="*^"
	
	}
	if(e[2]===null || e[2]==="" || e[2]===undefined || e[2]===" " || e[2]===false||e[2]==="false"){
		e[2]="*^"
		
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
	var extentionsdelete = [",nl", ",com", ",us",",be", ",ch", ",edu",",net", ",org", ",co",",info", ",uk", ",cn",",shop", ",store", ",gay",",game", ",ru", ",eu",",cx", ",to", ",ly",",gl", ",link", ",me", ",ffm"];
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
		    // console.log('hoi')
		}

}

function isresihttps(inpute){
	var yesorno=inpute.startsWith('https://');

	return yesorno;
}

// function checkforpoep(ezel){
// 	  	var kp;
// 		for ( kp = 0; kp < extentioncheck.length; kp++) {
// 			if(ezel.includes(extentioncheck[kp])===false){
// 				alert("deze klopt niet: "+ezel)
// 			}	
// 		}
// }