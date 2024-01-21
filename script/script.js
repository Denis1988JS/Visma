/*Событие открыть в футере список ссылок */

$('.nav_block_title').on('click', function(){
	$(this).next('.nav_block_list').slideToggle(500);
	
	$(this).toggleClass('nav_block_title_rotate')
})

/*Клик по кнопке открыть меню */

$('.menu_button').on('click', function(){
	$('.nav').slideToggle("slow", function () {
		
	});
	$('.nav').css('display','flex')
}
)