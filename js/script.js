// check to see if menu is open or not based on icon
function menuButtonIconStatus(){
	(menuIsOpen()) ? showMenu() : hideMenu();
}

function showMenu(){
	// if closed show x
	$('#menuButton').removeClass('fa-bars').addClass('fa-times rotateIn animated');
	$('#sideBarMenu').removeClass('slideOutRight').show().addClass('slideInRight animated');
}

function hideMenu(){
	// if open show bars
	$('#menuButton').removeClass('fa-times rotateIn').addClass('fa-bars');

	$('#sideBarMenu').addClass('slideOutRight');

	setTimeout(function(){
		$('#sideBarMenu').fadeOut();
	},500);
}

// if menu is open return true
function menuIsOpen(){
	return $('#menuButton').hasClass('fa-bars');
}

$(document).ready(function(){
	$('#menuButton, #sideBarMenu > #sideBarMenuContents > a').click(function(){
		menuButtonIconStatus();
	});

	$('.excluded').click(function(){
		hideMenu();
	});
});

// loading screen logic
window.addEventListener("load",function(){
	hideMenu();

	setTimeout(function(){
		$('#loadingScreen').addClass('hidden');
		$('#wrapper').removeClass('hidden');
		$('body').addClass('fadeIn animated');
	},250);
});
