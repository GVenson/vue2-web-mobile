<template lang="html">
    <div class="v-input">
        <div class="v-input-title">
            {{title}}
        </div>
        <input
        v-model="value"
        :type="eyeType ? 'text': type"
        :placeholder="placeholder"
        @focus="onFocus()"
        @blur="onFlur()"
        :style="[inputBorder,inputColor]">
        <div class="v-input-eye" v-if="type == 'password'" @click="clickEye()">
            <van-icon :name="eye ? 'eye-o' : 'closed-eye'" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Vinput',
    data() {
        return {
            value: '',
            hover: false,
            eye: false,
            eyeType: false,
            inputStyle: {
                border: '0px',
                borders: '1px solid #b8b8b8'
            },
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#000000'
        },
        border: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value(val) {
            this.$emit('input', val)
        },
        eye(val) {
            if(this.eye) {
                this.eyeType = val
            } else {
                this.eyeType = val
            }
        }
    },
    computed: {
        inputBorder() {
            if(this.border) {
                return this.hover ? {border: '1px solid #0ba3e9','--border': this.inputStyle.borders} : {border: '1px solid #979797','--border': this.inputStyle.borders}
            } else {
                return {
                    '--border--hover': this.inputStyle.border
                }
            }
        },
        inputColor() {
            return {color: this.color}
        }
    },
    methods: {
        onFocus() {
            console.log('onFocus');
            this.hover = true
        },
        onFlur() {
            console.log('onFlur');
            this.hover = false
        },
        clickEye() {
            console.log('clickEye')
            if(this.eye) {
                this.eye = false
            } else {
                this.eye = true
            }
        }
    }
}
</script>

<style lang="scss">
    
    .v-input {
        display: flex;
        padding: 0 15px;
        margin: 0 20px;

        &-title {
            margin: auto 0 auto 0;
            font-size: 14px;
        }
        input {
            border: 0px solid #979797;
            margin-left: 20px;
            border-radius: 10px;
            padding: 10px;
            font-size: 14px;
            &:hover {
                border: var(--border)
            }
        }
        &-eye {
            margin: auto 0 auto 20px;
        }
    }
</style>