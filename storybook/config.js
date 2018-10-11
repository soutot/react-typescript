import { configure } from '@storybook/react';

// Import all .stories.tsx files from src/components/
const req = require.context('../src/components/', true, /stories\.tsx$/)

function loadStories() {
  require('./stories/index.tsx');
  req.keys().forEach(req)
}

configure(loadStories, module);