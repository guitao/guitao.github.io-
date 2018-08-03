//搜索框聚焦事件
(function() {
    var $searchInput = $('.search-input'),
        $searchList = $('.search-list-wrap'),
        $placeholder = $('.placeholder'),
        $searchWrap = $('.search'),
        reg = /大家都在搜：/g;
    var text = $placeholder.text().replace(reg, '');


    $searchInput.on('focus', function() {
        $searchList.css({
            display: 'block'
        });
        $searchWrap.css({
            borderColor: '#f06923'
        });
        $placeholder.css({
            display: 'none'
        });
        $searchInput.attr('placeholder', text);
    });
    $searchInput.on('blur', function() {
        $searchList.css({
            display: 'none'
        });
        $searchWrap.css({
            borderColor: '#ccc'
        });
        $placeholder.css({
            display: 'inline-block'
        });
        $searchInput.removeAttr('placeholder');
    });
}());

//滚动条事件：当页面滚动时，顶部导航栏变透明

(function() {
    var $topNav = $('.top-nav');
    $(window).on('scroll', function() {
        $topNav.css({
            opcity: '0.5'
        });
    });
}());

//登录alert
(function() {
    var $logoLable = $('#logo-in'),
        $shadow = $('#shadow'),
        $alertBox = $('.alert-box'),
        $closeBtn = $('.close-btn');
    $logoLable.on('click', function() {
        $shadow.css({
            display: 'block'
        });
        $alertBox.show(400);
    });
    $closeBtn.on('click', function() {
        $shadow.css({
            display: 'none'
        });
        $alertBox.hide(400);
    });

    var $numLogoBtn = $('#num-logo-btn'),
        $safeLogoBtn = $('#safe-logo-btn'),
        $username = $('#userbox'),
        $userWrap = $('.username'),
        $password = $('#password'),
        $pwdWrap = $('.password'),
        $logoBox = $('#logo-box'),
        $qrcodeBox = $('#qrcode-box'),
        $placeholder = $('.password .placeholder');

    $safeLogoBtn.on('click', function() {
        $logoBox.hide(400);
        $qrcodeBox.show(400);
        $(this).addClass('select').siblings().removeClass('select');
    });
    $numLogoBtn.on('click', function() {
        $qrcodeBox.hide(400);
        $logoBox.show(400);
        $(this).addClass('select').siblings().removeClass('select');
    });
    $username.on('focus', function() {
        $userWrap.css({
            borderColor: '#f06923'
        });
    });
    $username.on('blur', function() {
        $userWrap.css({
            borderColor: '#ccc'
        });
    });
    $password.on('focus', function() {
        $pwdWrap.css({
            borderColor: '#f06923'
        });
        $placeholder.hide();

    });
    $password.on('blur', function() {
        $pwdWrap.css({
            borderColor: '#ccc'
        });
    });

}());


//轮播图开始
(function() {

    var picScroll = document.getElementsByClassName('pic-scroll')[0],
        $picScroll = $(picScroll),
        $dots = $('.dots'),
        reg = /[+-]?[0-9]+/g,
        timer = null,
        index = 0;

    function nextPic() {
        index++;
        if (index > 4) {
            index = 0;
        }
        showDot();
        dotClick();
        var transX = picScroll.style.transform,
            transXnum = parseInt(transX.match(reg)[0]);
        if (transXnum === -3960) {
            $picScroll.css({
                transform: 'translateX(-1320px)'
            });
        } else {
            var newTransX = transXnum - 660;
            $picScroll.css({
                transform: "translateX(" + newTransX + "px)"
            });
        }
    }


    function autoPic() {
        timer = setInterval(nextPic, 5000);
    }
    autoPic();

    function showDot() {
        $dots.eq(index).addClass('select').siblings().removeClass('select');
    }



    function dotClick() {
        $dots.on('click', function() {
            index = $(this).index();
            showDot();
            var newTransX = -660 - 660 * index;
            $picScroll.css({
                transform: 'translateX(' + newTransX + 'px)'
            });
        });
    }

    function bindEvent() {
        $dots.on('mouseenter', function() {
            clearInterval(timer);
        });
        $dots.on('mouseleave', function() {
            autoPic();
        });
    }
    bindEvent();

}());

(function() {
    //中间的未读信息提示
    var $infoTip = $('#info-tip'),
        $closeBtn = $('#info-tip-close');
    $(window).on('scroll', function() {
        var scroHei = $(window).scrollTop();
        if (scroHei > 380) {
            $infoTip.css({
                width: '208px',
                height: '36px',
                position: 'fixed',
                left: '39%',
                top: '50px',
                marginTop: '0'

            });
        } else {
            $infoTip.css({
                position: 'relative',
                width: '660px',
                left: '0',
                top: '0',
                marginTop: '20px'
            });
        }

    });
    $closeBtn.on('click', function() {
        $infoTip.hide();
    });
}());

//点赞数量累加 （功能未实现）
(function() {
    var zanBnts = $('.news-zan');

    for (let i = 0, len = zanBnts.length; i < len; i++) {
        zanBnts.eq(i).on('click', function() {
            var $zanNum = $(this).siblings();
            var newZanNum = parseInt($zanNum.text()) + 1;
            $zanNum.text('' + newZanNum);
        });
    }
}());

//右侧登录部分

var $zhLogin = $('#zH-login'),
    $qrcodeBtn = $('#qrcode-login'),
    $changeBtn = $('#box-change'),
    // login-form下的操作
    $loginForm = $('#login-form'),
    $usernamebox = $('#input-wrap-1'),
    $passwordbox = $('#input-wrap-2'),
    $userInput = $('#user-in'),
    $pwdInput = $('#pwd-input'),
    $pwdTip = $('#pwd-tips'),
    $loginFormBtn = $('#login-form-btn'),

    //safe-login
    $qrcodeLogin = $('#safe-login'),
    // dx-logoin部分
    $dxLogin = $('#dx-login'),
    //电话号码格式
    reg = /^[1][3,4,5,7,8][0-9]{9}$/,
    //信息提示框
    $tipBox = $('#DL-tips-box'),
    $tipCon = $('#tip-con'),
    $tipCloseBtn = $('#DL-tips-box .close-btn');

function bindEvent() {
    //切换为账号登陆
    $zhLogin.on('click', zhLoginClick);
    //切换为二维码登录
    $qrcodeBtn.on('click', qrcodeLoginClick);
    //切换为短信登录
    $changeBtn.on('click', changeBtnClick);
    $userInput.on('focus', userInputFocus);
    $pwdInput.on('focus', pwdInputFocus);
    $userInput.on('blur', userInputBlur);
    $pwdInput.on('blur', pwdInputBlur);
    $loginFormBtn.on('click', loginFormBtnClick);
    //关闭提示框
    $tipCloseBtn.on('click', tipCloseBtnClick);

}
bindEvent();

function zhLoginClick() {
    $qrcodeBtn.removeClass('select');
    $(this).addClass('select');
    $loginForm.show();
    $qrcodeLogin.hide();
    $dxLogin.hide();


}

function qrcodeLoginClick() {
    $zhLogin.removeClass('select');
    $(this).addClass('select');
    $loginForm.hide();
    $qrcodeLogin.show();
    $dxLogin.hide();
}

function changeBtnClick() {
    $zhLogin.removeClass('select');
    $qrcodeBtn.removeClass('select');
    $loginForm.hide();
    $qrcodeLogin.hide();
    $dxLogin.show();
}

function userInputFocus() {
    $userInput.attr('value', '');
    $usernamebox.css({
        borderColor: '#fa7d3c'
    });
}

function pwdInputFocus() {
    $passwordbox.css({
        borderColor: '#fa7d3c'
    });
    $pwdTip.hide();
}

function userInputBlur() {
    $userInput.attr('value', '邮箱/会员帐号/手机号');
    $usernamebox.css({
        borderColor: '#ccc'
    });
}

function pwdInputBlur() {
    $passwordbox.css({
        borderColor: '#ccc'
    });
    $pwdTip.show();
}

function loginFormBtnClick() {
    if ($userInput.val() === '邮箱/会员帐号/手机号') {
        $tipBox.show();
        userInputFocus();
    } else if (!reg.test($userInput.val())) {
        $tipCon.html('输入格式有误！');
        $tipBox.show();
        userInputFocus();
    } else if ($pwdInput.val() === '') {
        $tipBox.css({
            top: '149px'
        });
        $tipBox.show();
        $tipCon.html('密码不能为空！');
    }
}

function tipCloseBtnClick() {
    $tipBox.hide();
    userInputBlur();
}


//输入框提示信息的弹出

var $phoneNumber = $('#phone-number'),
    $phoneNumberBox = $('#input-wrap-3'),
    $dxLoginBtn = $('#dxlogin-btn');