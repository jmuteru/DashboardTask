import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Get Started',
    url: '/dashboard',
    icon: 'icon-speedometer',

   
  },
  {
    title: true,
    name: 'My Business',
  
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-home'
  },
  {
    name: 'Transactions',
    // url: '/dashboard',
    icon: 'cil-arrow-thick-right',
    children: [
      {
        name: 'Charge',
        // url: '/base/cards',
        icon: 'cil-chevron-right',
        children:[
          {
            name: 'Dashboard',
            url: '/dashboard',
            // icon: 'icon-puzzle'
          },
          {
            name: 'Payment Request',
            // url: '/base/carousels',
            // icon: 'icon-puzzle'
          }, {
            name: 'Charge Request',
            // url: '/base/carousels',
            // icon: 'icon-puzzle'
          }, {
            name: 'Manage Paybills & Accounts',
            // url: '/base/carousels',
            // icon: 'icon-puzzle'
          }, {
            name: 'Manage Payment Methods',
            // icon: 'icon-puzzle'
          },
         
        ]
        
      },
      {
        name: 'Refund',
        // url: '/base/carousels',
        icon: 'cil-swap-horizontal'
      },
      {
        name: 'Reconcile',
        // url: '/base/carousels',
        icon: 'cil-wrap-text'
      },
      {
        name: 'Balance',
        // url: '/base/carousels',
        icon: 'cil-money'
      },
      {
        name: 'Forex',
        // url: '/base/carousels',
        icon: 'cil-functions'
      },
    ]
      
  },
  {
    name: 'Payout',
    // url: '/dashboard',
    icon: 'cil-hand-point-left',
  },
  
  {
    name: 'Messaging',
    // url: '/dashboard',
    icon: 'cil-comment-square',
  },
  
  {
    name: 'Customers',
    // url: '/dashboard',
    icon: 'cil-contact',
  },
  {
    name: 'OnBoarding',
    // url: '/dashboard',
    icon: 'cil-group',
  },
  
  
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Navbars',
  //       url: '/base/navbars',
  //       icon: 'icon-puzzle'

  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //       {
  //         name: 'Alerts',
  //         url: '/notifications/alerts',
  //         icon: 'icon-bell'
  //       },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
 
 
  
  
];
