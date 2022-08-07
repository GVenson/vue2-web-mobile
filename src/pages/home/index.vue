<template lang="html">
    <div class="home-page">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <div class="content">
            <van-notice-bar color="#1989fa" background="#ecf9ff" scrollable text="技术是开发它的人的共同灵魂。" />
            <van-grid :gutter="5">
                <van-grid-item v-for="(value, index) of list" :key="index" icon="photo-o" :text="value.title" :to="value.route" />
            </van-grid>
        </div>
        <van-tabbar v-model="active" @change="tabBarChange">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <!-- <van-tabbar-item icon="search">标签</van-tabbar-item> -->
            <van-tabbar-item icon="user-o">我</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            active: 0,
            list: [{
                title: '游戏',
                route: '/game',
            }]
        }
    },
    computed: {
        ...mapState({
            navTitle: state => state.title
        })
    },
    mounted() {
        console.log('this', this);
    },
    methods: {
        tabBarChange(item) {
            console.log('tabBarChange', item)
            if(item === 0) {
              this.$router.push({
                  name: 'Home',
              })
            } else if(item === 1) {
              this.$router.push({
                  name: 'User',
              })
            }
        },
    },
    created() {
    }
}
</script>

<style lang="scss">
    .home-page {
        height: 100%;
        overflow: hidden;
        background-color: #F7F8FA;

        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            background-color: #39a9ed;
        }

        .content {
            height: calc(100vh - 150px - 50px);
            overflow: scroll;
        }
    }
</style>