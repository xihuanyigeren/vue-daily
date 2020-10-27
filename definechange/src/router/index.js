import RouterDemo from './views/RouterDemo'
import RouterChildrenDemo from '/views/RouterChildrenDemo'

const routes = [
    { path: '/foo', compoment: RouterDemo, name: '1' },
    { path: '/bar', compoment: RouterDemo, name: '2' },
    {
        path: '/user/:id',
        compoment: RouterChildrenDemo,
        name: '3',
        prop: true,
        children: [
            {
                path: 'profile',
                compoment: RouterChildrenDemo,
                name: '3-1'
            },
            {
                path: 'posts',
                compoment: RouterChildrenDemo,
            },
            { path: '/bar', compoment: RouterDemo, name: '2' },


        ]
    },
    { path: '/a', redirect: '/bar' },
    { path: '*', compoment: RouterDemo, name: '404' },

]

export default routes