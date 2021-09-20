import React from 'react';
import queryString from 'query-string';

import Home from './containers/Home';

const list = ({ location }) => {
  return <Home queryParams={queryString.parse(location.search)} />;
};

export default () => ({
  routes: [
    {
      path: '/list',
      component: list
    }
  ],
  menu: {
    label: 'Team Activity Feed',
    icon: 'icon-list-2',
    link: '/list',
    permission: 'showExmFeed'
  }
});