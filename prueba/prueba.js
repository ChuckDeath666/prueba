function prueba(){
	$(document).ready(function(){
				var menu;
				var item;
				var form;
				
				/*-------------------------------MENU-------------------------------------*/
				$.getJSON('json.json',function(data){
						
						$.each(data[0].header.menu,function(key1,val1){
							$(".navbar-nav").append("<li><a  href=''>" + val1 + "</a></li>");
						});

					/*------------------------------BANNER--------------------------------------*/

					$.each(data[0].body.banner,function(index2, value2){
						$(".banner").append("<img src=" + value2 + ">");
					});
					/*-----------------------------SLIDER---------------------------------------*/


					$.each(data[0].body.carousel,function(index3,value3){
							$("#slider").append("<section class='slider__section'><img src='"+value3+"' class='slider__img'></section>");
					});


					/*---------------------------------FORM-----------------------------------*/
						$.each(data[0].body.extructure,function(index4,value4){
								form = $("<" + index4 + "/>"), item_form = [];
								$.each(value4,function(key3,val3){
									 item_form.push (key3 + ": " + "<input class='form-control' style='width:40%;text-align:center' type=" + val3.type + " placeholder=" + val3.placeholder  +">" +"<br>"), formID = [];
									
								});
								

								form.append(item_form);
								$("#form").append(form);

						});
					
					/*---------------------------------FOOTER-----------------------------------*/
					$.each(data[0].footer.links.link_name,function(index5,value3){
						$("body").append("<script src=" + value3 + "></script>");
					});



					});



					
				});
			
}