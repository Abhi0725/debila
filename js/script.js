jQuery(document).ready(function(){
	$('#web-button').click(function(){
	   $('.work-dropdown').addClass('work-dropdown-clicked')
	   $('.work-dropdown').removeClass('work-dropdown')
		})
	
	var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 5000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();

	
	$('#contactform').submit(function(e){
		e.preventDefault();
		$('#message').hide();
 		$('#send-btn').after('<img src="img/ajax-loader.gif" class="loader" />').attr('disabled','disabled');
		work= $('#work').val();
		name= $('#name').val();
		email= $('#email').val();
		query= $('#query').val();
		
		if(work=="" || work==null){ 
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#send-btn').removeAttr('disabled');
			$('#message').text('ERROR: Please select work required.');
			$('#message').show('slow');
			return false;
			}
		
		if(name=="" || name==null){ 
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#send-btn').removeAttr('disabled');
			$('#message').text('ERROR: Please enter your name.');
			$('#message').show('slow');
			return false;
			}
			
		var x = email;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
		if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
           $('#message').text('ERROR: Please enter valid email id');
		   $('#message').show('slow');
		   $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
		   $('#send-btn').removeAttr('disabled');
           return false;
           }
		   
		if(query=="" || query==null){
			$('#message').text('ERROR: Please enter your query.');
		    $('#message').show('slow');
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#send-btn').removeAttr('disabled');
			return false;
			}
			
		else{
			$('#message').text('ERROR: PHP file required.');
		    $('#message').show('slow');
			$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
			$('#send-btn').removeAttr('disabled');
			return false;
		}

	});

});
