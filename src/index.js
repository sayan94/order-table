import React from 'react';
import ReactDOM from 'react-dom';
import OrderTable from './components/OrderTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<OrderTable />, document.getElementById('root'));
registerServiceWorker();
