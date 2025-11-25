import { setup } from 'web-preview';

setup({
  port: 8080,
  tryPorts: true,
  startWait: 5000,
  startCommand: 'npm start',
});
