import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    require('offline-plugin/runtime').install();
}

ReactDOM.render(<App />, document.getElementById('root'));
