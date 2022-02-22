<template>
  <div id="app">
    <transition name="fade">
      <div ref="navBar" class="head">
          <van-nav-bar
          v-show="!isHeader"
          :title="navTitle"
          left-arrow
          @click-left="pageBack"
          />
      </div>
    </transition>
    <transition name="fade">
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
            active: 0
        }
    },
    components: {
      // HelloWorld
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

        &.no-header {
            height: calc(100% - 50px);
        }
    }
}
</style>
