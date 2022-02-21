<template>
    <div class="login-pages">
        <div ref="navBar" class="head">
            <van-nav-bar
            title="登录"
            left-arrow
            @click-left="pageBack"
            />
        </div>
        <div class="content">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
            }
    },
    mounted() {
        console.log('navBar', this.$refs.navBar.clientHeight);
    },
    methods: {
        pageBack: function() {
            console.log('pageBack', window.history.go)
            window.history.go(-1);
        }
    },
    created() {
    }
}
</script>

<style lang="scss">
    .login-pages {
        height: 100%;
    }
</style>