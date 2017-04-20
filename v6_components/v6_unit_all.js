
/**** v6-u-select start *****/

$('.v6-u-select-icon').click(function(){
	$(this).parent().next().slideToggle("600");
})

$('.v6-u-select-content').delegate('li', 'click', function(){
	var select = $(this).html();
	$('.v6-u-select-main').html(select);
	$(this).parent().hide();
})
/**** v6-u-select end *****/

/******* v6-u-paging start ******/
var paging = {
	index : 1,	//起始页码
	total: 20,	//总的页码
	targ: document.getElementById('app'),	//目标元素
	init: function(){
		this.showPage2(this.index, this.total);
		this.events();
	},
	showPage2: function(index, total){
		this.targ.innerHTML = '';

		var str = '<span class="active">'+index+'</span>';
		
		if(index-1>1){
			str = '<span>'+(index-1)+'</span>'+ str;
		}

		if(index+1 < total){
			str = str + '<span>' + (index + 1)+'</span>';
		}

		
		if(index-3>=1){
			str = '<span>...</span>' + str;
		}

		if(index > 1){
			str = '<span class="prev">上一页</span><span>1</span>'+ str;
		}

		if( index + 3 <= total){
			str = str + '<span>...</span>';
		}
		
		if(index <total){
			str = str +'<span>' +total+ '</span><span class="next">下一页</span>';
		}

		this.targ.innerHTML = str;
	},
	events: function(){
		var _this = this ;
		this.targ.addEventListener('click',function(e){
			var e = e || window.event;
			var target = e.target || e.srcElement;

			if( target.nodeName.toLowerCase() == 'span' && target.className == 'next'){
				
				var index = document.getElementsByClassName('active')[0].innerHTML;
				var page = parseInt(index) + 1;
				_this.showPage2(page,20);
				return;
			}
			if( target.nodeName.toLowerCase() == 'span' && target.className == 'prev'){
				
				var index = document.getElementsByClassName('active')[0].innerHTML;
				var page = parseInt(index) - 1;
				_this.showPage2(page,20);
				return;
			}
			if(target.nodeName.toLowerCase() == 'span'){
				var index = parseInt(target.innerHTML);
				if(index){
					_this.showPage2(index, 20);
				}
			}
		})
	}
}

paging.init();
/******* v6-u-paging end ******/


/***** v6-u-message start ****/
$('.v6-u-message-btn').click(function(){
	$(this).next().toggle('fast');
})
/***** v6-u-message end ****/
