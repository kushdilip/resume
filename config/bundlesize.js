'use strict';

module.exports = {
  app: {
    javascript: {
      pattern: 'assets/*.js',
      limit: '150KB',
      compression: 'gzip'
    },
    css: {
      pattern: 'assets/*.css',
      limit: '30KB',
      compression: 'gzip'
    },
    fonts: {
      pattern: 'assets/fonts/*',
      limit: '50KB',
      compression: 'gzip'
    }
  }
};
