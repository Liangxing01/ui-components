//展开点击事件代理
$('.v6-u-first-nav').delegate('.u-first-level','click',function(){
	if($(this).parent().hasClass('active')){
		$(this).parent().find('.v6-u-secend-nav').slideUp('slow');
		$(this).parent().removeClass('active');
		$(this).find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
	}else{
		$(this).parent().find('.v6-u-secend-nav').slideDown('slow');
		$(this).parent().addClass('active');
		$(this).find('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		if($(this).parent().siblings('.active')){
			var targ = $(this).parent().siblings('.active');
			targ.find('.u-first-level span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
			targ.find('.v6-u-secend-nav').slideUp('slow');
			targ.removeClass('active');
		}
	}
	$('.v6-u-third-nav').hide();
})	

$('.v6-u-first-nav').delegate('.u-second-level','click',function(){
	if($(this).parent().hasClass('active')){
		$(this).parent().find('ul').slideUp('slow');
		$(this).parent().removeClass('active');
	}else{
		$(this).parent().find('ul').slideDown('slow');
		$(this).parent().addClass('active');
	}
})