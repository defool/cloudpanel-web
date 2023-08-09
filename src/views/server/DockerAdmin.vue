<template>
    <el-tabs type="border-card" class="demo-tabs">
        <el-tab-pane label="Cert">
            Cert Admin
        </el-tab-pane>
        <el-tab-pane label="Node">
            Node Admin
        </el-tab-pane>
        <el-tab-pane label="DNS">
            DNS Admin
        </el-tab-pane>
    </el-tabs>
</template>
  
<script lang="ts" setup>
import { Tools } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import ContainerInfo from "./ContainerInfo.vue"

// do not use same name with ref
const form = reactive({
    spec: 'docker:\n\tcontainer:\n\t\timage: xxx',
})

</script>
<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>
  