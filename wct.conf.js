module.exports = {
  plugins: {
    istanbul: {
      dir: "./coverage",
      reporters: ["text-summary", "lcov"],
      include: [
        "/t-deals/t-deals.html"
      ],
      exclude: [
        "/polymer/polymer.js",
        "/wecomponentsjs/webcomponents-lite.js"
      ]
    }
  }
}
