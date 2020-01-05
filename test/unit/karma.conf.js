// karmaとは、テストをwebブラウザ上で実行するためのテスト検証結果をレポートする機能を備えたテストランナ
// テストを実行されるwebブラウザの指定や、カバレッジレポート、webpackの設定が可能。
// webpackはbuild/webpack.test.conf.jsの設定を利用し、環境変数はconfig/test/env.jsの設定を利用し、環境変数はconfig/test.env.jsを利用する
// テストランナKarmaの設定ファイル
// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    files: [
      '../../node_modules/es6-promise/dist/es6-promise.auto.js',
      './index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [{
        type: 'lcov',
        subdir: '.'
      },
      {
        type: 'text-summary'
      }
      ]
    }
  })
}
