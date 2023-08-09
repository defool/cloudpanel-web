<template>
    <div class="nav-box">
        <el-input placeholder="Search ..." v-model="searchText" style="border-radius: 0;" />
        <el-tree :data="dataSource" default-expand-all :expand-on-click-node="false">
            <template #default="{ node, data }">
                <span class='custom-tree-node'>
                    <span style="line-height: 15px;">
                        <el-icon style="padding: 5px;">
                            <icon-menu v-if="data.type === 'app'" />
                        </el-icon>

                        <RouterLink v-if="data.type === 'server'" :to="{name: 'server-info', query: {serverId: data.id}}">{{ node.label }}
                        </RouterLink>
                        <span v-else>{{ node.label }}</span>
                    </span>
                    <el-icon v-if="!node.isLeaf">
                        <Tools style="opacity: 0.5" @click="dialogVisible = true" />
                    </el-icon>
                </span>
            </template>
        </el-tree>

        <el-button text type="primary" style="width: 100%;">
            <el-icon>
                <plus />
            </el-icon>
            <RouterLink class="nav-item" to="/new-server"> New</RouterLink>
        </el-button>

        <div style="position: absolute; bottom: 10px; left: 10px; cursor: pointer;">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span style="margin: 0 5px;">Admin</span>
                    <el-icon>
                        <ArrowRight />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Profile</el-dropdown-item>
                        <el-dropdown-item>Help</el-dropdown-item>
                        <el-dropdown-item>Cloud Service</el-dropdown-item>
                        <el-dropdown-item>Logout</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

        <el-dialog v-model="dialogVisible" title="Application Setting" width="50%">
            <AppSetting />
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppSetting from './AppSetting.vue';

import {
    UserFilled,
    Menu as IconMenu,
    Plus,
    Tools,
    ArrowRight,
} from '@element-plus/icons-vue'

import { ref } from 'vue'

interface Tree {
    id: number
    label: string
    type: string
    children?: Tree[]
}

const searchText = ref('')
const dialogVisible = ref(false)

const dataSource = ref<Tree[]>([
    {
        id: 3,
        label: 'DockerCloud',
        type: 'app',
        children: [
            {
                id: 7,
                label: 'Docker',
                type: 'server',
            },
            {
                id: 8,
                label: 'CoreDNS',
                type: 'server',
            },
        ],
    },
    {
        id: 1,
        label: 'Application 1',
        type: 'app',
        children: [
            {
                id: 1,
                label: 'Server1',
                type: 'server',
            },
            {
                id: 2,
                label: 'Server2',
                type: 'server',
            },
            {
                id: 3,
                label: 'Server3',
                type: 'server',
            },
        ],
    },
    {
        id: 2,
        label: 'Application2',
        type: 'app',
        children: [
            {
                id: 5,
                label: 'Server4',
                type: 'server',
            },
            {
                id: 6,
                label: 'Server5',
                type: 'server',
            },
        ],
    },
])
</script>

<style scoped>
.nav-box {
    height: 100%;
    margin: 5px;
}

.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>