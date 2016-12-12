/**
 * Created by wyc on 2016/12/9.
 */
$(function () {
    var showTime = {
        time: $('#header .time'),
        init: function(){
            this.getTime();
        },
        getTime: function(){

            var that = this;
            setInterval(function(){
                var date = new Date();
                var timer1 = date.getHours();
                var timer2 = date.getMinutes();
                var timer3 = date.getSeconds();
                // console.log(timer1,timer2,timer3);
                var content = timer1 + ':'+ that.zero(timer2)+ ':'+that.zero(timer3);

                that.time.html(content);
            },1000);


        },
        zero: function (a) {
            return (a>=10?  a : '0'+a);
        }
    };
    showTime.init();

    //轮播
    var carousel = {
        carousel: $('#header .carousel'),
        container: $('#header .container'),
        spans: $('#header span'),
        arrow: $('#header .arrow'),
        forward: $('#header .forward'),
        backup: $('#header .backup'),
        index: 0,
        init: function(){
            //调用自动轮播
            this.autoPlay();

            this.showArrow();

            //调用鼠标停止事件
            this.stopCarousel();
            //调用鼠标点击事件
            this.mouseClick();
        },
    //    鼠标移入显示左右箭头
        showArrow: function(){
            var that = this;
            this.carousel.hover(function(){


                that.arrow.stop(true).animate({
                    opacity: 1
                },500);
            },function(){
                that.arrow.stop(true).animate({opacity:0})
            },500);
        },
        //自动轮播
        autoPlay: function () {
            var that = this;

            timer = setInterval(function(){
                that.index++;
                that.index %= 4;
                that.container.animate({
                    marginTop: -253*that.index
                })
            },1000)
        },
        //添加点击事件
        //鼠标移到箭头上轮播停止
        stopCarousel: function () {
            var that = this;
            this.spans.hover(function(){
                clearInterval(timer);
            },function(){
                that.autoPlay();
            })
        },
        //鼠标点击
        mouseClick: function () {
            //forward点击的时候
            var that = this;
            this.forward.click(function(){
                that.index++;
                that.index %= 4;
                that.container.animate({
                    marginTop: -253*that.index
                });

            });
            this.backup.click(function(){
                that.index--;
                if(that.index <= -1){
                    that.index =3;
                }
                that.index %= 4;
                that.container.animate({
                    marginTop: -253*that.index
                });
            });

        }
    };
    carousel.init();

    //加载更多的js
    var loadMore = {
        more: $('#header .load_more'),
        title: $('#header .titel'),
        em: $('#header em'),
        init: function () {
            this.loadMore();
            //点击收藏
            // this.collect();
        },
        //点击加载更多的时候
        loadMore: function () {
            var that = this;
            this.more.click(function(){
                $.ajax({
                    url: 'php/getShow.php',
                    success: function(result){
                        console.log(typeof(result));
                        console.log(result);
                        console.log(JSON.parse(result));
                        var data = JSON.parse(result);
                        console.log(data);
                        // console.log(data[0].pic-url);
                        var box = $('<div class="img_box clear"/>');
                        var content = '';
                        for(var i in data){
                            content += '<div class="l" data-id='+data[i].id+'><img src="'+data[i]["pic-url"]+'" alt="">'
                                    +   '<p>'+data[i].title+'</p>'
                                    +  '<span>'+data[i]["sort-type"]+'</span><i>'+data[i]["author"]+'</i>'
                                    + '<em>收藏</em>'
                                    + '</div>'
                        }
                        console.log(content);
                        box.html(content);
                        that.title.append(box);
                        that.em = $('#header em');
                        console.log(that.em);
                        that.collect();


                    }
                })
            });
        },
        //收藏
        collect: function () {

            this.em.click(function () {
                // console.log();
                // alert(0);
                var id = $(this).parent().attr('data-id');
                console.log(typeof(id));
                $.cookie(id,Math.random(),{expires:365,path:'/'})
            });
        }
    };
    loadMore.init();
});
