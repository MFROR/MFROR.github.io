

function ocultarMenu(){
	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    if(w.innerWidth >=  992){
    	document.getElementById("menu").style.display='inline-block';
	}else{
		
		if(document.getElementById("menu").style.display=='none'){

		document.getElementById("menu").style.display='inline-block';


		}else{

		document.getElementById("menu").style.display='none';

		}
	}
    


}



function videoSelect(name){
	window.location.href = "video.html?"+name;
}

function videoLoad(){
	var url = window.location.search;
	var name = url.replace("?","");
	var teste = "queijo";

	for(var i = 0; i < url.length; i++){
		name = name.replace("%20"," ")
	}
	
	encontrarUrl(name);

	document.getElementById("name").innerHTML = name;

}


function encontrarUrl(name){
	var links = [["Harry Potter e a Bruxinha Rabuda (ft. Mc Maha)","https://www.youtube.com/embed/Zw8tXAkXfZ0"]]
	var videoUrl = document.getElementById("vid");


	links.push(["Treta nas Estrelas","https://www.youtube.com/embed/5PIFStlmeQ4"]);
	links.push(["O Senhor dos Anais","https://www.youtube.com/embed/ccaMVRjpKUo"]);


	for (var i = 0; i < links.length; i++){
		if(links[i][0] == name){
			//return;
			videoUrl.setAttribute("src",links[i][1]);
		}
	}

	
}
