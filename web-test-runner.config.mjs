import { vitePlugin,removeViteLogging } from '@remcovaes/web-test-runner-vite-plugin';

export default {
  files: ['src/**/*.test.ts'],
  filterBrowserLogs: removeViteLogging,
  testRunnerHtml: (testFramework) =>
		`<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + Lit + TS</title>
            <script type="module" src="${testFramework}"></script>
            <script type="module">
                /* Hack to disable Lit dev mode warnings */
                const systemWarn = window.console.warn;
                window.console.warn = (...args) => {
                    if (args[0].indexOf('Lit is in dev mode.') === 0) {
                        return;
                    }
                    if (args[0].indexOf('Multiple versions of Lit loaded.') === 0) {
                        return;
                    }
                    systemWarn(...args);
                };
            </script>
          </head>
          <body>
            
          </body>
        </html>
        `,
    plugins: [
        vitePlugin()
    ]
};