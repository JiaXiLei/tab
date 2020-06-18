const initState = {
    tableData: [],
    tagData: []
}

export default function table(state = initState, action) {
    console.log(action)
    switch (action.type) {
        //自定义
        case 'GET_TAGS_DATA':
            return {
                ...state,
                tagData: action.payload  //action.payload是传递回来的值
            }
        case 'GET_TABLE_DATA':
            return {
                ...state,
                tableData: action.payload  //action.payload是传递回来的值
            }
        default:
            return state
    }
}