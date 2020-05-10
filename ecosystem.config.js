module.exports = {
  apps: [{
    name: 'devconnector',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'me',
      host: 'me@207.246.67.124',
      key: '~/.ssh/tutorial-2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ecomerse/devconnector-backend.git',
      path: '/home/ubuntu/devconnector',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
