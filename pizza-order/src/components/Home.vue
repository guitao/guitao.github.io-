<template>
    <div>
        <h1>Home</h1>
        <button class="btn btn-primary" @click="linkToMenu">Order</button>
    </div>

</template>


<script>
    export default {
        methods: {
            linkToMenu: function () {  
                //跳转到上次浏览的页面
                // this.$router.go(-1);

                // 跳转到指定的地址
                // this.$router.replace('/menu');

                //指定跳转路由的地址
                // this.$router.replace({ name: 'menuLink'});

                //通过push进行跳转
                // this.$router.push('/menu');
                this.$router.push({ name: 'menuLink'});
            }
        }
    }
</script>