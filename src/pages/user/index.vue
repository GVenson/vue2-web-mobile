<template>
    <div class="user-pages">
        <div class="content">
            123
        </div>
        <v-input
        v-model="value"
        type="text"
        title="姓名"
        placeholder="请输入姓名"/>
    </div>
</template>

<script>
import VInput from '@/components/v-input.vue'
export default {
    data() {
        return {
            value: ''
        }
    },
    components: {
        VInput
    },
    mounted() {
        
    },
    methods: {
        
    },
    created() {
        console.log('created')
    }
}
</script>

<style lang="scss">
    .user-pages {
        height: 100%;
    }
</style>