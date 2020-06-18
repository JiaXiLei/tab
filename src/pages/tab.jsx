import React, { useState } from 'react';
import { Tag } from 'antd'
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
})(useTab)
function useTab(props) {
    const { tagData, tableData } = props.home

    const log = opt => {
        const newTableData = tableData.filter(sel => sel !== opt.key)
        const newTagData = tagData.filter(sel => sel !== opt)
        console.log(newTableData, 'newTableData')
        props.getTbaleDtat(newTableData)
        props.getTagsDtat(newTagData)
    }

    return (
        <div className="table-tab">
            {
                tagData ?
                    tagData.map(item => {
                        return (
                            <Tag key={item.key} closable onClose={() => { log(item) }}>
                                {item.name}
                            </Tag>
                        )
                    })
                    : ''
            }
        </div>
    )
}