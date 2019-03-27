(function() {
    // 小屏幕下的导航栏折叠效果
    const toggleBtn = document.getElementById('toggle-btn'),
        navList = document.getElementById('nav-list');

    toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        navList.style.display = navList.style.display == 'none' ? 'block' : 'none';
    }, true);
    navList.addEventListener('click', function() {
        this.style.display = 'none'
    }, true)

    // 大屏幕下右侧导航的滚动监听



    window.onscroll = function() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollTop)
        const navBox = document.getElementById('nav-box');
        if (scrollTop >= 620) {
            navBox.style.position = 'fixed';
            navBox.style.top = '10%';
        } else {
            navBox.style.position = 'absolute';
            navBox.style.top = '100vh';
        }

        var navItem = document.getElementsByClassName('nav-item');
        // 选择触发的nav
        function setActiveDom(dataName) {

            const navItemArr = Array.prototype.slice.call(navItem);
            // console.log(Array.isArray(navItemArr))
            navItemArr.forEach(item => {
                item.classList.remove('active');
            })
            navItemArr.forEach(item => {
                if (item.getAttribute('data-name') == dataName) {
                    item.classList.add('active');
                }
            })
        }


        let target;
        if (scrollTop <= 1099) {
            setActiveDom('basc-info')
        } else if (scrollTop > 1099 && scrollTop <= 1900) {
            setActiveDom('skill');
        } else if (scrollTop > 1900 && scrollTop <= 2500) {
            setActiveDom('project')
        } else {
            setActiveDom('contact');
        }


    }
}())