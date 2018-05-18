window.onload=function(){
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		var link=document.createElement("link");
		link.setAttribute("rel","stylesheet");
		link.setAttribute("href","http://www.classone.cn/Public/mobile/css/c3New.css");
		document.getElementsByTagName("head")[0].appendChild(link);

		var links=document.createElement("link");
		links.setAttribute("rel","stylesheet");
		links.setAttribute("href","../css/mobile.css");
		document.getElementsByTagName("head")[0].appendChild(links);
	    document.getElementById("mobile").style.display="block";


	    var jscript=document.createElement("script");
	    jscript.setAttribute("src","../js/mobile.js");
	    document.getElementsByTagName("html")[0].appendChild(jscript);

	} else {
		var link_1=document.createElement("link");
		link_1.setAttribute("rel","stylesheet");
		link_1.setAttribute("href","../css/pc.css");
		document.getElementsByTagName("head")[0].appendChild(link_1);
		var link_2=document.createElement("link");
		link_2.setAttribute("rel","stylesheet");
		link_2.setAttribute("href","../css/parameter.css");
		document.getElementsByTagName("head")[0].appendChild(link_2);
	    document.getElementById("pc").style.display="block";

	    var jscripts=document.createElement("script");
	    jscripts.setAttribute("src","../js/pc.js");
	    document.getElementsByTagName("html")[0].appendChild(jscripts);
	}
}