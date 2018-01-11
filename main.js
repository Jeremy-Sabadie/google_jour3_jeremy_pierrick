
/*   Masquer/Afficher le logo, la barre de recherche & les boutons     */

let centre = document.querySelector('section');
centre.style.display = "none";

let boutonAff = document.querySelector(".afficher");

boutonAff.onclick= function (){
	centre.style.display = "inline";
	document.querySelector('.sectionbouton').style.display= "none";
}






/*   Recherche Google     */
document.querySelector("#rech").onclick = function(){
	if (document.querySelector("#search").value !== "")
		document.location.href="https://www.google.com/#q=" + document.querySelector("#search").value.split(" ").join("+");
}







/*   Pop-up     */
function alertPop() {
	alert ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp por favor !");
}
window.setTimeout("alertPop()",10000);