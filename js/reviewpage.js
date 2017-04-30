
var flag=0;


		function readURL(input)
        {
            if (input.files && input.files[0])
            {
                var reader = new FileReader();
                reader.onload = function (e)
                {
                	//alert(input.id);

	                	if(input.id=="imageoneselect")
                    	$('#imageone').attr('src',e.target.result);

                    	if(input.id=="imagetwoselect")
                    	$('#imagetwo').attr('src',e.target.result);

                    	if(input.id=="imagethreeselect")
                    	$('#imagethree').attr('src',e.target.result);

                    	if(input.id=="imagefourselect")
                    	$('#imagefour').attr('src',e.target.result);

                   		 if(input.id=="imagebottomselect")
                    	$('#imagebottom').attr('src',e.target.result);

                };
                reader.readAsDataURL(input.files[0]);
            }
        }


$(document).ready(function(){


		$("input").hide();

		//$(window).click(function(){});
		//$(".three img").attr("src", "img/bigimage.jpg");



	$(".btn").on("click",function(){		
		if (flag==0){
			alert("You can edit the document now");

			$(".btn").text("Save");
			
			$("input").show();

			document.getElementById("text").contentEditable = "true";
			document.getElementById("textone").contentEditable = "true";
			document.getElementById("texttwo").contentEditable = "true";


			
			document.getElementById("imageoneanchor").removeAttribute("href");
			document.getElementById("imagetwoanchor").removeAttribute("href");
			document.getElementById("imagethreeanchor").removeAttribute("href");
			document.getElementById("imagefouranchor").removeAttribute("href");
			document.getElementById("imagebottomanchor").removeAttribute("href");

			$("#text").focus();
			$("#text").css("border","2px dotted grey");
			$("#textone").css("border","2px dotted grey");
			$("#texttwo").css("border","2px dotted grey");
			$("#imageonediv").css("border","2px dotted grey");
			$("#imagetwodiv").css("border","2px dotted grey");
			$("#imagethreediv").css("border","2px dotted grey");
			$("#imagefourdiv").css("border","2px dotted grey");
			$(".four").css("border","2px dotted grey");

			

			//$("#imageone").click(function(){	
			//	alert("You Clicked an ImageOne");
			//});

			flag=1;


		}
		else{
			document.getElementById("text").contentEditable = "false";
			document.getElementById("textone").contentEditable = "false";
			document.getElementById("texttwo").contentEditable = "false";

			document.getElementById("imageoneanchor").setAttribute("href","#");
			document.getElementById("imagetwoanchor").setAttribute("href","#");
			document.getElementById("imagethreeanchor").setAttribute("href","#");
			document.getElementById("imagefouranchor").setAttribute("href","#");
			document.getElementById("imagebottomanchor").setAttribute("href","#");

			
			$(".btn").text("Edit");
			$("input").hide();
			flag=0;
			$("#text").css("border","2px solid transparent");
			$("#textone").css("border","2px solid transparent");
			$("#texttwo").css("border","1px dashed royalblue");
			$("#imageonediv").css("border","none");
			$("#imagetwodiv").css("border","none");
			$("#imagethreediv").css("border","none");
			$("#imagefourdiv").css("border","none");
			$(".four").css("border","2px solid black");

			alert("Changes Saved");
			
			
		}

	});



	








});






	//function myFunction(){

	//alert(document.getElementById("test").parentElement);
	//document.getElementById("text").contentEditable = "true";
	//document.getElementById("textone").contentEditable = "true";
	//document.getElementById("imageone").contentEditable = "true";

	//}


	




