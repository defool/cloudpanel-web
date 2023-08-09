<template>
    <div v-if="route.query.serverId === '7'">
        <DockerAdmin />
    </div>
    <el-tabs v-else type="border-card" class="demo-tabs">
        <el-tab-pane label="Spec">
            <template #label>
                <span class="custom-tabs-label">
                    <el-icon>
                        <Tools />
                    </el-icon>
                    <span>Spec</span>
                </span>
            </template>
            <el-form>
                <el-form-item>
                    <el-input v-model="form.spec" :autosize="{ minRows: 4 }" type="textarea" placeholder="Please input" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">Apply All</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Docker Container">
            <ContainerInfo />
        </el-tab-pane>
        <el-tab-pane label="Logging">Logging</el-tab-pane>
        <el-tab-pane label="Dashboard">Dashboard</el-tab-pane>
    </el-tabs>
</template>
  
<script lang="ts" setup>
import { Tools } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import ContainerInfo from "./ContainerInfo.vue"
import DockerAdmin from "./DockerAdmin.vue"
import { useRoute } from 'vue-router'
const route = useRoute()

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
  