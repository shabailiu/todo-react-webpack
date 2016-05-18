import React from 'react';
import ReactDOM from 'react-dom';
import App from './public/components/App';
import TodoData from './TodoData';
import styles from './public/css/app.less';

// Load dummy data
TodoData.init();

ReactDOM.render(<App />, document.getElementById('root'));
