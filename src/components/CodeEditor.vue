
<template>
    <div class="editor">
        <div class="line-numbers">
            <span v-for="{index} in value.split('\n')" :key="index"></span>
        </div>
        <el-input class="code-input" ref="codeInput" v-model="value" @keydown.tab.prevent="onTabKeyDown"
            :autosize="{ minRows: 20 }" style="background-color: #403c3c;" type="textarea" placeholder="Please input" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const codeInput = ref(null);

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const onTabKeyDown = (event: any) => {
    const start = event.target.selectionStart
    const end = event.target.selectionEnd
    value.value = value.value.substring(0, start) + '\t' + value.value.substring(end)
}
</script>


<style scoped>
.editor {
    display: inline-flex;
    gap: 10px;
    width: 96%;
    font-family: monospace;
    line-height: 21px;
    border-radius: 2px;
    padding: 20px 20px;
    background-color: #eee;
}

.line-numbers {
    width: 20px;
    text-align: right;
}

.line-numbers span {
    counter-increment: linenumber;
}

.line-numbers span::before {
    content: counter(linenumber);
    display: block;
    color: #506882;
}

.code-input {
    line-height: 21px;
    overflow-y: hidden;
    padding: 0;
    border: 0;
    min-width: 500px;
    outline: none;
    resize: none;
    tab-size: 4;
}
</style>