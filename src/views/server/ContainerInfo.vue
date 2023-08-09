<template>
    <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="Cluster">
            <el-select v-model="cluster">
                <el-option value="cn.sh.1" label="cn.sh.1"></el-option>
                <el-option value="cn.sz.1" label="cn.sz.1"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="ip" label="IP" width="180" />
        <el-table-column prop="cluster" label="Cluster" width="180" />
        <el-table-column prop="version" label="Version" width="180" />
        <el-table-column prop="runStatus" label="Running Status" />
        <el-table-column prop="dnsStatus" label="DNS Status" />
        <el-table-column label="Action">
            <template #default="scope">
                <el-button v-if="scope.row.dnsStatus === 'Active'" type="primary">Set InActive</el-button>
                <el-button v-if="scope.row.dnsStatus === 'InActive'" type="primary">Set Active</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div style="margin-top: 10px;">
        <el-pagination background :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
    </div>
</template>
  
<script lang="ts" setup>

import { ref } from 'vue'

interface User {
    ip: string
    cluster: string
    version: string
    runStatus: string
    dnsStatus: string
}

const cluster = ref('')

const tableRowClassName = ({
    row,
    rowIndex,
}: {
    row: User
    rowIndex: number
}) => {
    if (rowIndex === 1) {
        return 'warning-row'
    } else if (rowIndex === 3) {
        return 'success-row'
    }
    return ''
}

const tableData: User[] = [
    {
        ip: '10.2.3.1',
        cluster: 'cn.sh.1',
        version: 'v1.0.1',
        runStatus: 'Running',
        dnsStatus: 'Active',
    },
    {
        ip: '10.2.3.2',
        cluster: 'cn.sh.1',
        version: 'v1.0.1',
        runStatus: 'Running',
        dnsStatus: 'InActive',
    },
    {
        ip: '10.2.3.3',
        cluster: 'cn.sh.1',
        version: 'v1.0.1',
        runStatus: 'Running',
        dnsStatus: 'Active',
    },
    {
        ip: '10.2.3.4',
        cluster: 'cn.sh.1',
        version: 'v1.0.1',
        runStatus: 'Running',
        dnsStatus: 'Active',
    },
    {
        ip: '10.2.3.5',
        cluster: 'cn.sz.1',
        version: 'v1.0.1',
        runStatus: 'Pending',
        dnsStatus: 'InActive',
    },
]
</script>
  
<style>
.el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
  