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
                <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
            </van-grid>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            active: 0,
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