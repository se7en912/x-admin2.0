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


  	//监听导航点击
  	element.on('nav(side)', function(elem){
    	title = elem.find('cite').text();
    	url = elem.find('a').attr('_href');
    	// alert(url);

    	res = element.tabAdd('x-tab', {
	        title: title//用于演示
	        ,content: '<iframe frameborder="0" src="'+url+'" class="x-iframe"></iframe>'
	    });

	    element.tabChange('x-tab', $('.layui-tab-title li').length-1);

	    $('.layui-tab-title li').eq(0).find('i').remove();
	    //切换到第2项（注意序号是从0开始计算）
    	
    	// $('.x-admin-title').append("<li class='layui-this'>"+title+"<i class='layui-icon layui-unselect layui-tab-close'>ဆ</i></li>")
  });
});

