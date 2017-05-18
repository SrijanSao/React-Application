  // Author: Visagan Santhanam
  // 
  // This script is called in all the content html files.
  // This script Highlights the search text entered on the search box
  // 
  // 
 	$( document ).ready(function() {
	   var query = window.location.search.substring(1);
	   var vars = query.replace("qry=","");
	 
	    vars = vars.replace("$","\\$");
		//alert(vars);
	 
	   if( vars.indexOf("%20") !== -1 )
	   {
		   var arr = vars.split('%20');
		   $.each( arr, function( key, value ) {
				$('p').replaceText(new RegExp('\\b('+value+'.*?)\\b','gi'), '<span class="highlight">$1</span>'); 
			});
	   }
	   else
	   {
		      if( vars.indexOf(" ") !== -1 )
			   {
				   var arr = vars.split(' ');
				   $.each( arr, function( key, value ) {
						$('p').replaceText(new RegExp('\\b('+value+'.*?)\\b','gi'), '<span class="highlight">$1</span>'); 
					});
			   }else
			   {
					$('p').replaceText(new RegExp('\\b('+vars+'.*?)\\b','gi'), '<span class="highlight">$1</span>'); 
			   }
	   }
    });