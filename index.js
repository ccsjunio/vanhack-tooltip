//set actions to begin after document is fully loaded
window.onload = ()=>{
    
    $("#sample").showToolTip({
        title : "title test",
        contents : "contents test"
    });
    
}

(function( $ ) {
 
    $.fn.showToolTip = function( parameters ) {
 
        this.on("mouseover",function(event){
            
            event.stopPropagation();
            event.preventDefault();
            if($("#toolTip").length>0){
                console.log("there is already a box.");
                return;
            };
            let elementOffset = $(this).offset();
            let elementDimensions = {
                width : $(this).outerWidth,
                height : $(this).outerHeight;
            }
            
            var boxMarkup = "";
            boxMarkup += "<div id='toolTip' style='position:absolute;display:none;left:0;top:0;background-color:white;border:black solid 1px;padding:5px'>";
            boxMarkup += "<div id='toolTipTitle'><h2>"+parameters.title+"</h2></div>";
            boxMarkup += "<div id='toolTipContents'><p>"+parameters.contents+"</p></div>";
            boxMarkup += "<div id='toolTipButtonDiv'><button id='toolTipButton'>ok</button></div>";
            boxMarkup += "</div>";

            //append tootltip box into body, but hidden
            $("body").append(boxMarkup);

            //bind action to button press
            //when pressed, fadeout and remove
            $("#toolTip button").on("click",function(event){
                event.preventDefault();
                event.stopPropagation();
                $("#toolTip").fadeOut().remove();
            })

            //with tooltip in place, get dimensions
            let toolTipDimensions = {
                height : $("#toolTip").outerHeight(),
                width : $("#toolTip").outerWidth()
            }
            //initialize position variable
            let toolTipPosition = {
                left:0,
                top:0
            }

            //decide where to place it
            //priority is to place at top
            let placed = false;
            let positions = ['top','bottom','left','right'];

            for(position of positions){
                console.log("position:");
                console.log(position);
            }

            while(!placed)

            if(offset.top<toolTipDimensions.height){
                $("#toolTip").offset({top:height+offset.top+5,left:offset.left});
            }

            $("#toolTip").fadeIn();

        });

        console.log("title:" + parameters.title);
        console.log("content:" + parameters.contents);
 
    };
 
}( jQuery ));

