module.exports = [
    {
      context: [ "/weather/api/**" ],
      target: "http://localhost:8080",
      secure: false
    }
  ]