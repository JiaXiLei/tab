
function getTbaleDtat(option) {

    return {
        type: 'GET_TABLE_DATA',
        payload: option,
    }
}

function getTagsDtat(option) {

    return {
        type: 'GET_TAGS_DATA',
        payload: option,
    }
}

export {
    getTbaleDtat,
    getTagsDtat,
}