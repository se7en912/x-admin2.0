function in_array(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) {
	      return true;
	    }
	  }
	  return false;
}
function get_index(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) {
	      return i;
	    }
	  }
	  return false;
}
layui.use(['element'], function(){
	$ = layui.jquery;
  	element = layui.element(); 
  
  //导航的hover效果、二级菜单等功能，需要依赖element模块
  // 侧边栏点击隐藏兄弟元素
	$('.layui-nav-item').click(function(event) {
		$(this).siblings().removeClass('layui-nav-itemed');
	});

	$('.layui-tab-title li').eq(0).find('i').remove();

	height = $('.layui-layout-admin .site-demo').height();
	$('.layui-layout-admin .site-demo').height(height-100);

	navArr =["我的桌面"];

	$('.layui-tab-title li').on("mouseover",'.layui-tab-close"', function(){
		// alert($(this).parent().index());
		alert(777)
	});
	// alert(7777)

  	//监听导航点击
  	element.on('nav(side)', function(elem){
    	title = elem.find('cite').text();
    	url = elem.find('a').attr('_href');
    	// alert(url);

    	for (var i = 0; i <$('.x-iframe').length; i++) {
    		if($('.x-iframe').eq(i).attr('src')==url){
    			element.tabChange('x-tab', i);
    			return;
    		}
    	};

    	res = element.tabAdd('x-tab', {
	        title: title//用于演示
	        ,content: '<iframe frameborder="0" src="'+url+'" class="x-iframe"></iframe>'
		    });


		element.tabChange('x-tab', $('.layui-tab-title li').length-1);

    	$('.layui-tab-title li').eq(0).find('i').remove();
  });
});

