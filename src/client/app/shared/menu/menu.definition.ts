import { NavBarItem } from '../components/navbar/navbar.model';



export var MENU: Array<NavBarItem> = [
            {
                name: 'Home',
                path: '/home',
                icon: 'icon-home',
                children: null

            },

            {
                name: 'Companies',
                path: '/companies',
                icon: 'icon-companies',
                children: [
                     {
                        name: 'Activities',
                        path: '/activities',
                        icon: 'icon-activities',
                        children: null
                    },
                     {
                        name: 'List',
                        path: '/list',
                        icon: 'icon-home',
                        children: null
                    },
                     {
                        name: 'Engineers',
                        path: '/engineers',
                        icon: 'icon-home',
                        children: null
                    }
                ]
            },


             {
                name: 'Universities',
                path: '/universities',
                icon: 'icon-universities',
                children: [
                     {
                        name: 'Reasearch PHD',
                        path: '/phd',
                        icon: 'icon-home',
                        children: null
                    },
                     {
                        name: 'Clubs',
                        path: '/clubs',
                        icon: 'icon-clubs',
                        children: null
                    },
                    {
                        name: 'Projects',
                        path: '/projects',
                        icon: 'icon-projects',
                        children: null
                    },
                    {
                        name: 'Partners',
                        path: '/partners',
                        icon: 'icon-partners',
                        children: null
                    }

                ]
            },
            {
                name: 'Governments',
                path: '/governments',
                icon: 'icon-governments',
                children: [
                     {
                        name: 'Projects',
                        path: '/projects',
                        icon: 'icon-home',
                        children: null
                    },
                     {
                        name: 'Plans',
                        path: '/clubs',
                        icon: 'icon-clubs',
                        children: null
                    }
                ]
            },
            {
                name: 'Contact',
                path: '/contact',
                icon: 'icon-contact',
                children: null
            }
        ] ;
