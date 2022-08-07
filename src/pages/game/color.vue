<template>
    <div class="color-page">
        <div class="color-page-title">
            <div class="color-page-title-sum">得分<span>{{score}}</span></div>
            <div class="color-page-title-refresh" @click="refresh()">重置</div>
        </div>
        <ul
        class="color-page-game"
        :style="{
            gridTemplateColumns: `repeat(${gameNum}, 1fr)`,
            gridTemplateRows: `repeat(${gameNum}, 1fr)`
        }">
            <li
            class="color-page-game-item"
            v-for="(item, index) of list"
            :key="index"
            :style="{
                backgroundColor: item.color,
                opacity: item.opacity
            }"
            @click="clickScore(item.opacity)">
            </li>
        </ul>
        <div class="color-page-hard">
            <div class="color-page-hard-easy" @click="difficulty(.8)">简单</div>
            <div class="color-page-hard-difficulty" @click="difficulty(.9)">困难</div>
            <div class="color-page-hard-hell" @click="difficulty(.95)">地狱</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colorList: ['#3D5881', '#8F9EB5', '#CCD3DB', '#A85F02', '#BF834B', '#D9B48B', '#D7A59C', '#A13432', '#A8A5A3', '#68875C', '#A4AE9B', '#001A72'],
            gameNum: 0,
            score: 0,
            nowCheck: 0,
            list: [],
            hard: .8,
            switch: false,
        }
    },
    created() {
        this.bgColor()
    },
    mounted() {
    },
    methods: {
        bgColor() {
            let nowcheck = this.nowCheck
            let color = this.colorList[parseInt(Math.random() * this.colorList.length)]
            let gameNum = this.gameNum = parseInt(nowcheck / 3 + 4)
            let allNum = parseInt(gameNum ** 2)
            let keys = parseInt(Math.random() * allNum)
            let list = [];
            for(let i = 0; i < allNum; i++) {
                list.push({
                    color: color,
                    opacity: 1
                })
            }
            list[keys].opacity = this.hard
            this.list = list
        },
        clickScore(item) {
            console.log('clickScore', item)
            if(item < 1) {
                this.nowCheck++;
                this.score = parseInt(this.nowCheck * 10);
                this.bgColor()
            }
        },
        refresh() {
            this.gameNum = 0
            this.score = 0
            this.nowCheck = 0
            this.bgColor()
        },
        difficulty(hard) {
            this.hard = hard
            this.bgColor()
        }
    }
}
</script>

<style lang="scss">
    .color {
        &-page {
            width: 100vw;
            height: 100vh;

            &-title {
                display: flex;
                padding: 10px;

                &-sum {
                    margin: auto;

                    span {
                        margin-left: 10px;
                        color: skyblue
                    }
                }
                &-refresh {
                    margin: auto;
                }
            }

            &-game {
                width: 80vw;
                height: 80vw;
                display: grid;
                grid-gap: 2px;
                margin: 20px auto;

                &-item {
                    border-radius: 5px;
                }
            }

            &-hard {
                display: flex;
                padding: 10px;

                &-easy {
                    margin: auto;
                    color: orange;
                }

                &-difficulty {
                    margin: auto;
                    color: pink;
                }

                &-hell {
                    margin: auto;
                    color: red;
                }
            }
        }
    }
</style>