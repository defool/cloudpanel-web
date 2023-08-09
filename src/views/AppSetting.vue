<template>
    <el-form>
        <el-form-item label="Spec">
            <CodeEditor v-model="form.spec" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import CodeEditor from "@/components/CodeEditor.vue"
import { reactive, toRefs } from 'vue'
import { ElNotification } from 'element-plus'


const props = defineProps({
    dialogVisible: Boolean,
});

// do not use same name with ref
const form = reactive({
    spec: 'clusters:\n- name: cn.sh.1\n',
})

const onSubmit = () => {
    ElNotification({
        title: 'Prompt',
        message: 'Submit successfully',
        duration: 6000,
    })
}
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
  