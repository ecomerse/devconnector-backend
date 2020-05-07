module.exports = {
  apps: [{
    name: 'devconnector-backend',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: '45.77.41.145',
      key: '~/.ssh/me.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ecomerse/devconnector-backend.git',
      path: '/home/ec2-user/backend',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
