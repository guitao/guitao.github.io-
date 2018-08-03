<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <p class="card-text">1244397476@qq.com</p>
            <router-link :to=" { name: 'phoneLink'}">手机号码</router-link>
            <router-link :to=" { name: 'personnameLink'}">姓名</router-link>

            <router-view></router-view>
        </div>
    </div>
</template>
