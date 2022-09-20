//Reducer for connections sub-app

export default (connections = [],action) => {
    switch (action.type) {

        case 'UPDATE_CONN':
        case 'DELETE_CONN':
            return connections.filter((c)=> (c._id !== action.payload));
        case 'FETCH_CONNS':
            return action.payload;
        case 'CREATE_CONN':
            return [...connections, action.payload];
        default:
            return connections;
    }
}