

let titles = ['My Illustrations', "My Designs", "My Art", "My Work"];
let currentIndex = 0;
let aSpan = document.getElementById("WFSHeader");

setInterval(() => {
   
	
   aSpan.innerHTML= titles[currentIndex];   
   
   currentIndex++;
   
   if (currentIndex === 4)
    currentIndex = 0;

}, 2000)


            function onHover_1533()
{
    $("#1533").attr('src', 'images/Logos_1533.png');
}

function offHover_1533()
{
    $("#1533").attr('src', 'images/Logos_1533BW.png');
}
            function onHover_Piccolo_Lusso()
{
    $("#Piccolo_Lusso").attr('src', 'images/Logos_Piccolo_Lusso.png');
}

function offHover_Piccolo_Lusso()
{
    $("#Piccolo_Lusso").attr('src', 'images/Logos_Piccolo_LussoBW.png');
}
            function onHover_Dante()
{
    $("#Dante").attr('src', 'images/Logos_Dante.png');
}

function offHover_Dante()
{
    $("#Dante").attr('src', 'images/Logos_DanteBW.png');
}
            function onHover_Mayhem()
{
    $("#Mayhem").attr('src', 'images/Logos_Mayhem.png');
}

function offHover_Mayhem()
{
    $("#Mayhem").attr('src', 'images/Logos_MayhemBW.png');
}
            function onHover_beecause()
{
    $("#beecause").attr('src', 'images/Logos_beecause.png');
}

function offHover_beecause()
{
    $("#beecause").attr('src', 'images/Logos_beecauseBW.png');
}
            function onHover_AWM()
{
    $("#AWM").attr('src', 'images/Logos_AWM.png');
}

function offHover_AWM()
{
    $("#AWM").attr('src', 'images/Logos_AWMBW.png');
}
            function onHover_1533()
{
    $("#1533").attr('src', 'images/Logos_1533.png');
}

function offHover_1533()
{
    $("#1533").attr('src', 'images/Logos_1533BW.png');
}


initComparisons();

//Image Comparision Script - w3schools method - https://www.w3schools.com/howto/howto_js_image_comparison.asp
function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("OverlayOverlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, sliderLine, img, clicked = 0, w, h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w / 2) + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "Overlayslider");
	sliderLine = document.createElement("DIV");
    sliderLine.setAttribute("class", "OverlaysliderLine");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
	img.parentElement.insertBefore(sliderLine, img);
    /* Position the slider in the middle: */
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
	sliderLine.style.top = (h / 2) - (sliderLine.offsetHeight / 2) + "px";
    sliderLine.style.left = (w / 2) - (sliderLine.offsetWidth / 2) + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
	sliderLine.addEventListener("mousedown", sliderLineReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
	window.addEventListener("mouseup", sliderLineFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
	sliderLine.addEventListener("touchstart", sliderLineReady);
     /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
	 window.addEventListener("touchend", sliderLineFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
	  sliderLine.style.left = img.offsetWidth - (sliderLine.offsetWidth / 2) + "px";
    }
	//sliderLine

   function sliderLineReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", sliderLineMove);
      window.addEventListener("touchmove", sliderLineMove);
    }
	   function sliderLineFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function sliderLineMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      sliderLine(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function sliderLine(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      sliderLiner.style.left = img.offsetWidth - (sliderLiner.offsetWidth / 2) + "px";
    }
  }
}
		function OpenLightbox() {

		  document.getElementById("Lightbox").style.opacity = 1;
			document.getElementById("LightboxBack").style.opacity = 1;
			document.getElementById("Lightbox").style.visibility = "visible";
			document.getElementById("LightboxBack").style.visibility = "visible";
		}

				function OpenLightboxAbout() {

		  document.getElementById("LightboxA").style.opacity = 1;
			document.getElementById("LightboxBack").style.opacity = 1;
			document.getElementById("LightboxA").style.visibility = "visible";
			document.getElementById("LightboxBack").style.visibility = "visible";
		}

		// Close the Modal
		function CloseLightbox() {
			document.getElementById("Lightbox").style.opacity = 0;
			document.getElementById("LightboxBack").style.opacity = 0;
			 document.getElementById("LightboxA").style.opacity = 0;
			document.getElementById("Lightbox").style.visibility = "hidden";
			document.getElementById("LightboxA").style.visibility = "hidden";
			document.getElementById("LightboxBack").style.visibility = "hidden";
		}


		let typeTextStarted = false;
		let typeTextStarted2 = false;
		let typeTextStarted3 = false;
		let typeTextStarted4 = false;
		let typeTextStarted5 = false;
		// Get the section<s position in the document
		let FirstScroll = $("#PWBegins").offset()
		let SecondScroll = $("#PWAutoItalia").offset()
		let ThirdScroll = $("#PWPersonal").offset()
		let FourthScroll = $("#WFSSection").offset()
		let FifthScroll = $("#WFSSection2").offset()
		let EndSticky = $("#PWPersonal").offset()
		let viewportHeight = $(window).height();



$(window).on("scroll", function() {
// Flag to execute the function only once


	//Change to MC CORSA Scrolling Down

	  if ($(this).scrollTop()>FirstScroll.top - viewportHeight && !typeTextStarted) {
				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "0";
				}, 0)

				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "1";
				}, 300)
				setTimeout(() => {




						document.getElementById("WorkLeftimg").src = "images/PhoneMockup.jpg";
						document.getElementById("WorkHeader").innerHTML = "MC Corsa";
						document.getElementById("WorkSubHeader").innerHTML = "Finali Mondiali";
						//document.getElementById("MotorsportH").style.color = "#ba1f32";
						//document.getElementById("MotorsportT").innerHTML = "Canberra Festival of Speed<br/>Porsche Martini Livery";
						//document.getElementById("MotorsportB").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB2").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB3").style.backgroundColor = "#ba1f32";
						//document.getElementById("MotorsportB4").style.backgroundColor = "#ba1f32";
						//document.getElementById("scrollSVG").style.stroke = "#ba1f32";
						//document.getElementById("scrollSVG1").style.fill = "#ba1f32";


						typeTextStarted = true;

    	// 4 second delay here before running next line
    		//document.getElementById("Motorsportimg").style.visibility = "visible";
				// document.getElementById("Motorsportimg").style.position = "fixed";
			}, 300)

		    // Set flag

	  }

	  //Change to Bathurst Scrolling Up

	  if ($(this).scrollTop()<FirstScroll.top - viewportHeight && typeTextStarted) {
				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "0";
				}, 0)

				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "1";
				}, 300)
				setTimeout(() => {




						document.getElementById("WorkLeftimg").src = "images/Autograph_Poster2.JPG";
						document.getElementById("WorkHeader").innerHTML = "Bathurst 12 Hour";
						document.getElementById("WorkSubHeader").innerHTML = "Autograph Poster";
						//document.getElementById("MotorsportH").style.color = "#ba1f32";
						//document.getElementById("MotorsportT").innerHTML = "Canberra Festival of Speed<br/>Porsche Martini Livery";
						//document.getElementById("MotorsportB").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB2").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB3").style.backgroundColor = "#ba1f32";
						//document.getElementById("MotorsportB4").style.backgroundColor = "#ba1f32";
						//document.getElementById("scrollSVG").style.stroke = "#ba1f32";
						//document.getElementById("scrollSVG1").style.fill = "#ba1f32";




    	// 4 second delay here before running next line
    		//document.getElementById("Motorsportimg").style.visibility = "visible";
				// document.getElementById("Motorsportimg").style.position = "fixed";
			}, 300)

		    // Set flag
			typeTextStarted = false;
	  }





	  //Change to Auto Italia Scrolling Down

	  	  if ($(this).scrollTop()>SecondScroll.top - viewportHeight && !typeTextStarted2) {
				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "0";
				}, 0)

				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "1";
				}, 300)
				setTimeout(() => {




						document.getElementById("WorkLeftimg").src = "images/AutoItaliaFirstImage.JPG";
						document.getElementById("WorkHeader").innerHTML = "Auto Italia";
						document.getElementById("WorkSubHeader").innerHTML = "Logo Redesign";
						//document.getElementById("MotorsportH").style.color = "#ba1f32";

						//document.getElementById("MotorsportB").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB2").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB3").style.backgroundColor = "#ba1f32";
						//document.getElementById("MotorsportB4").style.backgroundColor = "#ba1f32";
						//document.getElementById("scrollSVG").style.stroke = "#ba1f32";
						//document.getElementById("scrollSVG1").style.fill = "#ba1f32";


						typeTextStarted2 = true;

    	// 4 second delay here before running next line
    		//document.getElementById("Motorsportimg").style.visibility = "visible";
				// document.getElementById("Motorsportimg").style.position = "fixed";
			}, 300)

		    // Set flag

	  }

	  	  //Change to Mc Corsa Scrolling Up

	  	  if ($(this).scrollTop()<SecondScroll.top - viewportHeight && typeTextStarted2) {
				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "0";
				}, 0)

				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "1";
				}, 300)
				setTimeout(() => {




						document.getElementById("WorkLeftimg").src = "images/PhoneMockup.jpg";
						document.getElementById("WorkHeader").innerHTML = "MC Corsa";
						document.getElementById("WorkSubHeader").innerHTML = "Finali Mondiali";
						//document.getElementById("MotorsportH").style.color = "#ba1f32";

						//document.getElementById("MotorsportB").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB2").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB3").style.backgroundColor = "#ba1f32";
						//document.getElementById("MotorsportB4").style.backgroundColor = "#ba1f32";
						//document.getElementById("scrollSVG").style.stroke = "#ba1f32";
						//document.getElementById("scrollSVG1").style.fill = "#ba1f32";


						typeTextStarted2 = false;

    	// 4 second delay here before running next line
    		//document.getElementById("Motorsportimg").style.visibility = "visible";
				// document.getElementById("Motorsportimg").style.position = "fixed";
			}, 300)

		    // Set flag

	  }


	  //Change to Personal Scrolling Down

	  	  	  	  if ($(this).scrollTop()>ThirdScroll.top - viewportHeight && !typeTextStarted3) {
				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "0";
				}, 0)

				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "1";
				}, 300)
				setTimeout(() => {




						document.getElementById("WorkLeftimg").src = "images/Poster_Gallery.JPG";
						document.getElementById("WorkHeader").innerHTML = "Personal Illustraions";
						document.getElementById("WorkSubHeader").innerHTML = "A collection of motorsport Illustrations";
						//document.getElementById("MotorsportH").style.color = "#ba1f32";

						//document.getElementById("MotorsportB").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB2").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB3").style.backgroundColor = "#ba1f32";
						//document.getElementById("MotorsportB4").style.backgroundColor = "#ba1f32";
						//document.getElementById("scrollSVG").style.stroke = "#ba1f32";
						//document.getElementById("scrollSVG1").style.fill = "#ba1f32";


						typeTextStarted3 = true;

    	// 4 second delay here before running next line
    		//document.getElementById("Motorsportimg").style.visibility = "visible";
				// document.getElementById("Motorsportimg").style.position = "fixed";
			}, 300)

		    // Set flag

	  }

	  	  //Change to Auto Italia Scrolling Up

	  	  	  	  if ($(this).scrollTop()<ThirdScroll.top - viewportHeight && typeTextStarted3) {
				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "0";
				}, 0)

				setTimeout(() => {
					document.getElementById("PrimaryWork").style.opacity = "1";
				}, 300)
				setTimeout(() => {




						document.getElementById("WorkLeftimg").src = "images/AutoItaliaFirstImage.JPG";
						document.getElementById("WorkHeader").innerHTML = "Auto Italia";
						document.getElementById("WorkSubHeader").innerHTML = "Logo Redesign";
						//document.getElementById("MotorsportH").style.color = "#ba1f32";

						//document.getElementById("MotorsportB").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB2").style.backgroundColor = "#315ba9";
						//document.getElementById("MotorsportB3").style.backgroundColor = "#ba1f32";
						//document.getElementById("MotorsportB4").style.backgroundColor = "#ba1f32";
						//document.getElementById("scrollSVG").style.stroke = "#ba1f32";
						//document.getElementById("scrollSVG1").style.fill = "#ba1f32";


						typeTextStarted3 = false;

    	// 4 second delay here before running next line
    		//document.getElementById("Motorsportimg").style.visibility = "visible";
				// document.getElementById("Motorsportimg").style.position = "fixed";
			}, 300)

		    // Set flag

	  }

	  	  	  	  	  if ($(this).scrollTop()>FourthScroll.top - viewportHeight && !typeTextStarted4) {
				setTimeout(() => {
					document.getElementById("WFSSubHeader").style.opacity = "0";
				}, 0)

				setTimeout(() => {
					document.getElementById("WFSSubHeader").style.opacity = "1";
				}, 300)
				setTimeout(() => {


						typeTextStarted4 = true;

    	// 4 second delay here before running next line
    		//document.getElementById("Motorsportimg").style.visibility = "visible";
				// document.getElementById("Motorsportimg").style.position = "fixed";
			}, 300)

		    // Set flag

	  }

	  	  	  	  	  if ($(this).scrollTop()>FifthScroll.top - viewportHeight && !typeTextStarted5) {
				setTimeout(() => {
					document.getElementById("WFSBody").style.opacity = "0";
				}, 0)

				setTimeout(() => {
					document.getElementById("WFSBody").style.opacity = "1";
				}, 300)
				setTimeout(() => {


						typeTextStarted5 = true;

    	// 4 second delay here before running next line
    		//document.getElementById("Motorsportimg").style.visibility = "visible";
				// document.getElementById("Motorsportimg").style.position = "fixed";
			}, 300)

		    // Set flag

	  }
		})

		 window.onload = function() {
        // Reset the form fields when the page loads
        document.getElementById("form").reset();
    }

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
			
            if (response.status == 200) {
				result.style.color = "#00A651";
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                
            }, 3000);
        });
});