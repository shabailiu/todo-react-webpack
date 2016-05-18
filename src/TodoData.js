module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    if(!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify({
        '1': {
          value: 'Take out the trash'
        },
        '2': {
          value: 'Buy eggs'
        }
      }));
    }
  }

};