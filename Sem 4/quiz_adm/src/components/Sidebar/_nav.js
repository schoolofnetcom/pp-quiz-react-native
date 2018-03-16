export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Subject',
      url: '/subject',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'List',
          url: '/subject/list',
          icon: 'icon-speedometer'
        },
        {
          name: 'New',
          url: '/subject/new',
          icon: 'icon-speedometer'
        }        
      ]
    },
    {
      name: 'User',
      url: '/user',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'List',
          url: '/user/list',
          icon: 'icon-speedometer'
        },
        {
          name: 'New',
          url: '/user/new',
          icon: 'icon-speedometer'
        }
      ]
    }    
  ]
};
