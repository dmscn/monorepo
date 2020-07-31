module.exports = {
  extends: "@smartive/semantic-release-lerna/config",
  plugins: [
    'semantic-release-gitmoji',
    '@semantic-release/github',
  ]
}