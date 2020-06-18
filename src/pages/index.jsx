import React, { useState } from 'react';
import './style.less'
import { Table } from 'antd'
import Tab from './tab'  //引用tab组件
import { connect } from 'react-redux'
import { getTbaleDtat, getTagsDtat, } from '@/action/table' //引用action

export default connect((state) => {
    const { table } = state
    return {
        home: table
    }
}, {
    getTbaleDtat,
    getTagsDtat,
})(useIndex)
function useIndex(props) {

    const selectedRowKeys = props.home.tableData
    const onSelectChange = (selectedRowKeys, keyData) => {
        props.getTbaleDtat(selectedRowKeys)
        props.getTagsDtat(keyData)
    }
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    }

    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园2号',
        },
        {
            key: '3',
            name: '林俊杰',
            age: 18,
            address: '西湖区湖底公园3号',
        },
    ]
    const columns = [
        { title: '姓名', dataIndex: 'name' },
        { title: '年龄', dataIndex: 'age' },
        { title: '住址', dataIndex: 'address' }
    ]

    return (
        <div className="pages-useIndex">
            <Table
                dataSource={dataSource}
                columns={columns}
                rowSelection={rowSelection}
            />;
            <Tab />
        </div>
    )
}