if (window.XMLHttpRequest) {	
			xmlhttp = new XMLHttpRequest();
			
} else {
			
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		
	}
			
xmlhttp.open("GET", "input.xml", false);
		
	xmlhttp.send();
	
		xmlDoc = xmlhttp.responseXML;

	
		document.write("<table border='1'>");
	
		var x = xmlDoc.getElementsByTagName("LOCATION");

var city=[];
var state=[];	
		for ( i = 0; i < x.length; i++) {
		
		document.write("<tr><td>");
			
	document.write(x[i].getElementsByTagName("CITY")[0].childNodes[0].nodeValue);

//city[i]=x[i].getElementsByTagName("CITY")[0].childNodes[0].nodeValue;
city.push(x[i].getElementsByTagName("CITY")[0].childNodes[0].nodeValue);
//alert(city);	
			document.write("</td><td>");
			
	document.write(x[i].getElementsByTagName("STATE")[0].childNodes[0].nodeValue);
//state[i]=x[i].getElementsByTagName("STATE")[0].childNodes[0].nodeValue;

state.push(x[i].getElementsByTagName("STATE")[0].childNodes[0].nodeValue);
//alert(state);
			document.write("</td></tr>");
		
	}
		
	document.write("</table>");
