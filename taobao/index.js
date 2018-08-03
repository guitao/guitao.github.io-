(function() {
    //导航栏的实现方法
    function showFloat(listON, targetFloat) {
        listON.mouseenter(function() {
            targetFloat.css({
                'display': 'block'
            });
        });
        listON.mouseleave(function() {
            targetFloat.css({
                'display': 'none'
            });
        });

        targetFloat.mouseenter(function() {
            $(this).css({
                'display': 'block'
            });
        });
        targetFloat.mouseleave(function() {
            $(this).css({
                'display': 'none'
            });
        });
    }

    // 顶部二级导航栏的实现
    var $placeChose = $('#place-chose'),
        $placeList = $('#place-list'),
        $myTb = $('#myTb'),
        $myTbList = $('#myTb-list'),
        $shouCj = $('#shouCj'),
        $shouCjList = $('#shouCj-list'),
        $seller = $('#seller'),
        $sellerList = $('#seller-list'),
        $servicer = $('#servicer'),
        $servicerList = $('#servicer-list'),
        $webNav = $('#web-nav'),
        $webNavList = $('#web-nav-list');

    showFloat($placeChose, $placeList);
    showFloat($myTb, $myTbList);
    showFloat($shouCj, $shouCjList);
    showFloat($seller, $sellerList);
    showFloat($servicer, $servicerList);
    showFloat($webNav, $webNavList);


    var $searchTab = $('.search-tab li'),
        $searchFoot = $('.search-foot'),
        $searchInput = $('#search-input'),
        $cameraLogo = $('.camera-logo'),
        ewmWrap = $('#ewm'),
        closeEwm = $('#close-ewm');
    $searchTab.click(function() {
        var index = $searchTab.index(this);
        if (index === 0) {
            $searchFoot.css({
                display: 'block'
            });
            $searchInput.attr('placeholder', 'javascript高级程序设计');
            $cameraLogo.css({
                display: 'inline-block'
            });
            $(this).addClass('select').siblings().removeClass('select');
        } else if (index === 1) {
            $searchFoot.css({
                display: 'none'
            });
            $searchInput.attr('placeholder', '');
            $cameraLogo.css({
                display: 'none'
            });
            $(this).addClass('select').siblings().removeClass('select');

        } else {
            $searchFoot.css({
                display: 'block'
            });
            $searchInput.attr('placeholder', '');
            $cameraLogo.css({
                display: 'none'
            });
            $(this).addClass('select').siblings().removeClass('select');

        }
    })



    //关闭二维码
    closeEwm.on('click', function() {
        ewmWrap.css({
            display: 'none'
        });
    });

    //左侧导航栏
    var $firstList = $('.list-bd>li:eq(0)'),
        $secendList = $('.list-bd>li:eq(1)'),
        $thirdList = $('.list-bd>li:eq(2)'),
        $listfour = $('.list-bd>li:eq(3)'),
        $firstListFloat = $('.list-float:eq(0)'),
        $secendListFloat = $('.list-float:eq(1)'),
        $thirdListFloat = $('.list-float:eq(2)'),
        $ListFloatfour = $('.list-float:eq(3)');


    showFloat($firstList, $firstListFloat);
    showFloat($secendList, $secendListFloat);
    showFloat($thirdList, $thirdListFloat);
    showFloat($listfour, $ListFloatfour);

}());

//中间上部分轮播图
(function() {
    var $picWrap = $(".h-LB-pic"),
        $wrapper = $(".h-LB-wrap"),
        $arrow = $(".arrow"),
        $leftArrow = $('.arrow-left'),
        $rightArrow = $('.arrow-right'),
        $dots = $('.button>span'),
        len = $dots.length,
        index = 0;

    function nextPic() {
        index++;
        if (index > 3) {
            index = 0
        }
        showDot();
        if ($picWrap.css('left') == '-2600px') {
            $picWrap.css({
                left: '-1040px'
            })
        } else {
            var newLeft = parseInt($picWrap.css('left')) - 520;
            $picWrap.css({
                left: newLeft + 'px'
            })
        }
    }

    function beforePic() {
        index--;
        if (index < 0) {
            index = 3
        }
        showDot();
        if ($picWrap.css('left') == '0px') {
            $picWrap.css({
                left: '-1560px'
            })
        } else {
            var newLeft = parseInt($picWrap.css('left')) + 520;
            $picWrap.css({
                left: newLeft + 'px'
            });
        }
    }

    function showDot() {
        for (var i = 0; i < len; i++) {
            $dots[i].className = '';
        }
        $dots[index].className = 'on';
    }

    dotClick();

    function dotClick() {
        $dots.click(function() {
            index = $dots.index(this);
            var newLeft = -520 - 520 * index;
            $picWrap.css({
                left: newLeft + 'px'
            })
            showDot();
        });
    }

    var timer = null;
    autoPic();

    function autoPic() {
        timer = setInterval(nextPic, 2000);
    }

    bindEvent();

    function bindEvent() {
        $wrapper.on("mouseenter", function() {
            clearInterval(timer);
            $arrow.css({
                display: 'inline-block'
            });
        });
        $wrapper.on('mouseleave', function() {
            autoPic();
            $arrow.css({
                display: 'none'
            });
        });
        $leftArrow.on('click', function() {
            beforePic();
        });
        $rightArrow.on('click', function() {
            nextPic();
        });
        $dots.click(function() {
            var $index = $(this).index('span'),
                num = $wrapper.width();
        })

    }
}());


(function() {
    //中间下部分轮播图
    var $divWrap = $('.tmall-LB-wrap'),
        $wrapper = $('.tmall-bd'),
        $tmallArrow = $('.tmall-arrow'),
        $leftTmallArrow = $('.tmall-arrow-left'),
        $rightTmallArrow = $('.tmall-arrow-right'),
        $count = $('.inner i'),
        $dots = $('.tmall-dots>li'),
        len = $dots.length,
        index = 0;

    function nextDiv() {
        index++;
        if (index > 5) {
            index = 0
        }
        $count.text(index + 1);
        showDot();
        if ($divWrap.css('left') == '-3120px') {
            $divWrap.css({
                left: '-1040px'
            })
        } else {
            var newLeft = parseInt($divWrap.css('left')) - 520;
            $divWrap.css({
                left: newLeft + 'px'
            })
        }
    }

    function beforeDiv() {
        index--;
        if (index < 0) {
            index = 5
        }
        $count.text(index + 1);
        showDot();
        if ($divWrap.css('left') == '0px') {
            $divWrap.css({
                left: '-2600px'
            })
        } else {
            var newLeft = parseInt($divWrap.css('left')) + 520;
            $divWrap.css({
                left: newLeft + 'px'
            });
        }
    }

    function showDot() {
        for (var i = 0; i < len; i++) {
            $dots[i].className = '';
        }
        $dots[index].className = 'select';
    }

    var timer = null;
    autoPic();

    function autoPic() {
        timer = setInterval(nextDiv, 3000);
    }

    bindEvent();

    function bindEvent() {
        $wrapper.on("mouseenter", function() {
            clearInterval(timer);
            $tmallArrow.css({
                display: 'inline-block'
            });
        });
        $wrapper.on('mouseleave', function() {
            autoPic();
            $tmallArrow.css({
                display: 'none'
            });
        });
        $leftTmallArrow.on('click', function() {
            beforeDiv();
        });
        $rightTmallArrow.on('click', function() {
            nextDiv();
        });


    }
}());

(function() {
    //淘宝头条的轮播
    var $divWrap = $('.LB-wrap'),
        $wrapper = $('.right-con-LB');

    function nextDiv() {
        if ($divWrap.css('top') == '-292px') {
            $divWrap.css({
                top: '-73px'
            });
        } else {
            var newTop = parseInt($divWrap.css('top')) - 73;
            $divWrap.css({
                top: newTop + 'px'
            });
        }
    }
    var timer = null;

    autoDiv();

    function autoDiv() {
        timer = setInterval(nextDiv, 2000);
    }
    $wrapper.on('mouseenter', function() {
        clearInterval(timer);
    });
    $wrapper.on('mouseleave', function() {
        autoDiv();
    });

}());


var rightScreen = {
    init: function() {
        this.ggPart();
        this.innerTabPart();
        this.close();
        this.help();
        this.appEwm();
    },
    //公告部分
    ggPart: function() {
        var $tabs = $('.notice-hd>li'),
            $panels = $('.notice-bd>ul');
        $tabs.on('mouseenter', function() {
            var index = $(this).index();
            $(this).addClass('select').siblings().removeClass('select');
            $panels.eq(index).css({
                display: 'block'
            }).siblings().css({
                display: 'none'
            });
        })
    },
    //充话费、流量、固话部分
    innerTabPart: function() {
        var $tabs = $('.rechange-tabs>a'),
            $divWrap = $('.rechange-bd-wrap');

        $tabs.on('mouseenter', function() {
            var index = $(this).index();
            var newLeft = 0 - index * 300;
            $divWrap.css({
                left: newLeft + 'px'
            });
        });
    },
    //详情的显示
    help: function() {
        var $tipLabel = $('.Ll-select .help'),
            $tip = $('.Ll-select .tip-wrap');
        $tipLabel.on('mouseenter', function() {
            $tip.css({
                display: 'block'
            })
        })
        $tipLabel.on('mouseleave', function() {
            $tip.css({
                display: 'none'
            });
        });
    },
    //close
    close: function() {
        var $closeBtn = $('.sever-bd a.close'),
            $closeCon = $('.sever-bd'),
            $tabs = $('.sever-list li:eq(0)');
        $closeBtn.on('click', function() {
            $closeCon.css({
                display: 'none'
            })
            $tabs.removeClass('select');
        })
        $tabs.on('mouseenter', function() {
            $closeCon.css({
                display: 'block'
            })
            $tabs.addClass('select');
        })
    },
    appEwm: function() {
        var $appOn = $('.apps-list a');
        $appOn.on('mouseenter', function() {
            $(this).siblings().css({
                display: 'block'
            })
        })
        $appOn.on('mouseleave', function() {
            $(this).siblings().css({
                display: 'none'
            })
        })

    }


}
rightScreen.init();