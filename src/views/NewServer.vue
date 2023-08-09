<template>
    <el-tabs type="border-card" class="demo-tabs">
        <el-tab-pane label="New Component">
            <el-form>
                <el-form-item label="Application">
                    <el-select v-model="form.app" allow-create>
                        <el-option value="app1" label="App1"></el-option>
                        <el-option value="app2" label="App2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Component">
                    <el-input v-model="form.server" />
                </el-form-item>

                <el-form-item label="Spec">
                    <CodeEditor v-model="form.spec" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Submit</el-button>
                    <el-button @click="onSubmit">Cancel</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Cloud Market">
            <el-input placeholder="Type something" style="width: 300px; margin-bottom: 10px;" :prefix-icon="Search" />
            <div class="demo-image">
                <div v-for="item in data" :key="item.key" class="block">
                    <span class="demonstration">{{ item.name }}</span>
                    <el-image style="width: 100px; height: 100px" :src="url" fit="fill" />
                    <div><el-button>Install</el-button></div>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue'
import CodeEditor from "@/components/CodeEditor.vue"
import { Search } from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive({
    app: '',
    server: '',
    spec: '',
})

const data = [
    {
        key: 'k8s',
        name: 'Kubernetes',
    },
    {
        key: 'mysql',
        name: 'MySQL',
    },
    {
        key: 'elk',
        name: 'ELK',
    },
]
const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const onSubmit = () => {
    console.log('submit!', JSON.stringify(form))
}
</script>
        
<style scoped>
.demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
}

.demo-image .block:last-child {
    border-right: none;
}

.demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>