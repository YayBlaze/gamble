module.exports = {
  apps: [
    {
      name: "gamble-front",
      script: "./build/index.js",
      env: {
        PORT: "5301",
        ORIGIN: "http://127.0.0.1"
      }
    }
  ]
};

