export const mock = {
    $schema: './node_modules/@angular/cli/lib/config/schema.json',
    project: {
      name: 'test-project'
    },
    apps: [
      {
        root: 'src',
        outDir: 'dist',
        assets: [
          'assets',
          'favicon.ico'
        ],
        index: 'index.html',
        main: 'main.ts',
        polyfills: 'polyfills.ts',
        test: 'test.ts',
        tsconfig: 'tsconfig.app.json',
        testTsconfig: 'tsconfig.spec.json',
        prefix: 'app',
        styles: [
          '../node_modules/bootstrap/dist/css/bootstrap.min.css',
          './css/styles.css'
        ],
        scripts: [
          './js/tooltips.js'
        ],
        environmentSource: 'environments/environment.ts',
        environments: {
          dev: 'environments/environment.ts',
          prod: 'environments/environment.prod.ts'
        }
      }
    ],
    e2e: {
      protractor: {
        config: './protractor.conf.js'
      }
    },
    lint: [
      {
        project: 'src/tsconfig.app.json'
      },
      {
        project: 'src/tsconfig.spec.json'
      },
      {
        project: 'e2e/tsconfig.e2e.json'
      }
    ],
    test: {
      karma: {
        config: './karma.conf.js'
      }
    },
    defaults: {
      styleExt: 'css',
      component: {}
    }
  };