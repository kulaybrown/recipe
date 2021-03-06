/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Detail from 'containers/Detail/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavigationTop from 'components/NavigationTop';

import GlobalStyle from '../../global-styles';
import 'antd/dist/antd.css';
import { basename } from 'path';

const AppWrapper = styled.div`
  // max-width: calc(1200px + 16px * 2);
  // margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  // console.log(publicPath);
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <NavigationTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={Detail} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
