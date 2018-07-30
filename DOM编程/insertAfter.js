function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;

	if(parent.lastChild===targetElment){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling)
	}
}