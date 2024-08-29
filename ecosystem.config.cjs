module.exports = {
  apps: [
    {
      name: 'reporters-app',
      script: 'node_modules/.bin/serve',
      args: '-s dist -l 9010', // Serve the dist directory on port 5173
      cwd: '/root/etvb_wrap_app',
      env: {
        PORT: 9010,
      },
      instances: 1,
      exec_mode: 'fork', // Use 'cluster' if you want to use multiple CPU cores
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};

