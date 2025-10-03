module.exports = {
  apps: [{
    name: 'dh2-client',
    script: 'python3',
    args: '-m http.server 8080',
    cwd: '/home/opc/dh2-client/play.pokemonshowdown.com',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production'
    }
  }]
};

