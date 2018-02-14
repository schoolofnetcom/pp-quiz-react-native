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
    }
  ]
};
