export const mock = {
    $schema: './node_modules/@angular/cli/lib/config/schema.json',
    version: 1,
    newProjectRoot: 'projects',
    projects: {
      'test-project': {
        root: '',
        sourceRoot: 'src',
        projectType: 'application',
        prefix: 'app',
        schematics: {
          '@schematics/angular:component': {
            style: 'sass'
          }
        },
        architect: {
          build: {
            builder: '@angular-devkit/build-angular:browser',
            options: {
              outputPath: 'dist/test-project',
              index: 'src/index.html',
              main: 'src/main.ts',
              polyfills: 'src/polyfills.ts',
              tsConfig: 'src/tsconfig.app.json',
              assets: [
                'src/favicon.ico',
                'src/assets'
              ],
              styles: [
                'src/styles.scss'
              ],
              scripts: [],
              es5BrowserSupport: true
            },
            configurations: {
              production: {
                fileReplacements: [
                  {
                    replace: 'src/environments/environment.ts',
                    'with': 'src/environments/environment.prod.ts'
                  }
                ],
                optimization: true,
                outputHashing: 'all',
                sourceMap: false,
                extractCss: true,
                namedChunks: false,
                aot: true,
                extractLicenses: true,
                vendorChunk: false,
                buildOptimizer: true,
                budgets: [
                  {
                    type: 'initial',
                    maximumWarning: '2mb',
                    maximumError: '5mb'
                  }
                ]
              }
            }
          },
          serve: {
            builder: '@angular-devkit/build-angular:dev-server',
            options: {
              browserTarget: 'test-project:build'
            },
            configurations: {
              production: {
                browserTarget: 'test-project:build:production'
              }
            }
          },
          'extract-i18n': {
            builder: '@angular-devkit/build-angular:extract-i18n',
            options: {
              browserTarget: 'test-project:build'
            }
          },
          test: {
            builder: '@angular-devkit/build-angular:karma',
            options: {
              main: 'src/test.ts',
              polyfills: 'src/polyfills.ts',
              tsConfig: 'src/tsconfig.spec.json',
              karmaConfig: 'src/karma.conf.js',
              styles: [
                'src/styles.scss'
              ],
              scripts: [],
              assets: [
                'src/favicon.ico',
                'src/assets'
              ]
            }
          },
          lint: {
            builder: '@angular-devkit/build-angular:tslint',
            options: {
              tsConfig: [
                'src/tsconfig.app.json',
                'src/tsconfig.spec.json'
              ],
              exclude: [
                '**/node_modules/**'
              ]
            }
          }
        }
      },
      'test-project-e2e': {
        root: 'e2e/',
        projectType: 'application',
        prefix: '',
        architect: {
          e2e: {
            builder: '@angular-devkit/build-angular:protractor',
            options: {
              protractorConfig: 'e2e/protractor.conf.js',
              devServerTarget: 'test-project:serve'
            },
            configurations: {
              production: {
                devServerTarget: 'test-project:serve:production'
              }
            }
          },
          lint: {
            builder: '@angular-devkit/build-angular:tslint',
            options: {
              tsConfig: 'e2e/tsconfig.e2e.json',
              exclude: [
                '**/node_modules/**'
              ]
            }
          }
        }
      }
    },
    defaultProject: 'test-project'
  };