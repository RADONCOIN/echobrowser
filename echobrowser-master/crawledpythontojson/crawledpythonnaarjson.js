


function start(){
var resultaat="{";
	var str = $( "#tekst" ).text();

	var res = str.split('https://');

	console.log(res)
	var i;
for (i = 1; i < res.length; i++) {
 	

 	resultaat = resultaat + "{'vertaling':"+"'"+"https://"+res[i]+"',\n"+"'stam':'"+res[i]+"',\n"+"'stam2':'"+res[i]+"',\n'stam3':'"+res[i]+"',\n"+"'tekstlink':'"+res[i]+"'},\n";
		 $( "#tekst" ).text(resultaat);
 	 // {
   //          'vertaling':'https://www.amazon.com/gp/product/B07PXGQC1Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PXGQC1Q&linkCode=as2&tag=searchify01b-20&linkId=93cfa5f1bd162035a34597ce42ac5356',
   //          'stam': 'airpods',
   //          'stam2': 'music',
   //          'stam3': 'apple',
   //          'tekstlink': 'Airpods Apple '
   //      },

   //      {
   //          'vertaling':'https://www.amazon.com/gp/product/B07GHWHFR5/ref=as_li_ss_tl?ie=UTF8&th=1&linkCode=ll1&tag=searchify01b-20&linkId=f6967efee39ae95267d280c181df0641',
   //          'stam': 'controller',
   //          'stam2': 'gaming',
   //          'stam3': 'xbox',
   //          'tekstlink': 'Xbox Wireless Controller - Grey And Blue $49.88'
   //      },
}
}