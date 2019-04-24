(function() {

    // 一进来的加载效果
    const loading = document.getElementById('loading');
    const timer = setTimeout(function() {
        loading.style.visibility = 'hidden'
        clearTimeout(timer)
    }, 2000)

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

        // 右边导航栏定位的切换
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


        const bascInfo = document.getElementById('basic-info'),
            skill = document.getElementById('skill'),
            project = document.getElementById('project');
        // console.log(scrollTop)

        // 基本信息区域
        const basicInfoArea = bascInfo.offsetTop + bascInfo.offsetHeight - 200;
        // 个人能力区域
        const skillArea = skill.offsetTop + skill.offsetHeight - 200;
        // 个人项目区域
        const projectArea = project.offsetTop + project.offsetHeight - 300;

        if (scrollTop <= basicInfoArea) {
            setActiveDom('basc-info')
        } else if (scrollTop > basicInfoArea && scrollTop <= skillArea) {
            setActiveDom('skill');
        } else if (scrollTop > skillArea && scrollTop <= projectArea) {
            setActiveDom('project')
        } else {
            setActiveDom('contact');
        }


    }
}())