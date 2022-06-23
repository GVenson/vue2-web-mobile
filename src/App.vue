<template>
  <div id="app">
    <transition name="slide-fade">
      <div ref="navBar" class="head">
          <van-nav-bar
          v-show="!isHeader"
          :title="navTitle"
          left-arrow
          @click-left="pageBack"
          />
      </div>
    </transition>
    <transition name="slide-fade">
        <router-view class="router-view" :class="{'no-header': isHeader}"></router-view>
    </transition>
    <van-tabbar v-model="active" @change="tabBarChange">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <!-- <van-tabbar-item icon="search">标签</van-tabbar-item> -->
        <van-tabbar-item icon="user-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'
export default {
    name: 'App',
    data() {
        return {
            active: 0,
            animation: ''
        }
    },
    components: {
      // HelloWorld
    },
    watch: {
        $route(to, from) {
            console.log('$route',to, from)
        }
    },
    computed: {
        ...mapState({
            navTitle: state => state.title
        }),
        isHeader: function() {
            console.log('isHeader', this.$route.path);
            if ([
                '/home',
            ].indexOf(this.$route.path) >= 0) {
                return true;
            }
            return false;
        },
    },
    methods: {
        pageBack: function() {
            console.log('pageBack', window.history.go)
            window.history.go(-1);
        },
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
        console.log('this', this);
        this.$router.push({
            name: 'Home'
        })
    }
}
</script>

<style lang="scss">
body {
    margin: 0
}
#app {
    width: 100%;
    height: 100vh;

    .router-view {
        height: calc(100% - 96px);
        overflow: hidden;

        &.no-header {
            height: calc(100% - 50px);
            overflow: hidden;
        }
    }

    .slide-fade-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-leave-active {
        // transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        display: none;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        // transform: translateX(10px);
        opacity: 0;
    }
}
</style>
