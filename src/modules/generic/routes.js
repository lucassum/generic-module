module.exports = [
    {
        method: 'post',
        path: '/',
        action: 'create',
    },
    {
        method: 'get',
        path: '/',
        action: 'find',
    },
    {
        method: 'get',
        path: '/:id',
        action: 'read',
    },
    {
        method: 'put',
        path: '/:id',
        action: 'update',
    },
    {
        method: 'delete',
        path: '/:id',
        action: 'remove',
    },

]
