var imageIndex = 0;
/*
 * This function is use to display image
 * @param : index of image in image array
 * @retval : none
 * Author: Tan Hoa
 * Date: 23/03/2019
*/
function displayImage(imageIndex){
	var images = document.getElementsByClassName('images');
	var navigates = document.getElementsByClassName('slideNavigateItem');
	imageIndex = imageIndex % images.length;
	for(var count=0; count<images.length; count++){
		images[count].style.display = 'none';
	}
	for(var count=0; count<navigates.length; count++){
		navigates[count].style.backgroundColor = "black";
	}
	images[imageIndex].style.display = "block";
	navigates[imageIndex].style.backgroundColor = "";
}
/*
 * Author : Tan Hoa
 * Date : 23/03/2019
 * This function is used to set timer 
 * @param: time
*/
function runTimer(time){
	setInterval(function(){
		imageIndex += 1;
		displayImage(imageIndex);
	},time);
}
//-----------------------------------------------------------------------------------------
runTimer(5000);
displayImage(imageIndex);
