import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SiderDemo} from './Dashboard';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <LocaleProvider locale={enUS}>
      <SiderDemo />
    </LocaleProvider>
    , document.getElementById('root'));
registerServiceWorker();
