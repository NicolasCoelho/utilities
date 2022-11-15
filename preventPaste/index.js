(function(){
	window.addEventListener("hashchange", function() {
		if(window.location.hash === "#payment/creditcard") {
			setTimeout(function(){
				document.querySelector(".card-number input").addEventListener("paste", function(e) {e.preventDefault()});
				document.querySelector(".securiry-code input").addEventListener("paste", function(e) {e.preventDefault()});		
			}, 1500);
		}
	});
})();