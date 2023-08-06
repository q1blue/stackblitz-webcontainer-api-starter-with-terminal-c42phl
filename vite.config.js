import { const esbuild = require('esbuild');
const manifestPlugin = require('esbuild-plugin-manifest')

esbuild.build({
    entryPoints: ['src/index.js'],
        bundle: true,
            outdir: 'output/',
                plugins: [manifestPlugin()],
                }).catch((e) => console.error(e.message))import { WebContainer } from "@webcontainer/api";
                
                const files: FileSystemTree = {
                  "index.js": {
                      file: {
                            contents: "",
                                },
                                  },
                                  };
                                  
                                  let webcontainer: WebContainer;
                                  
                                  // add a textarea (the editor) and an iframe (a preview window) to the document
                                  document.querySelector("#app").innerHTML = `
                                    <div class="container">
                                        <div class="editor">
                                              <textarea>I am a textarea</textarea>
                                                  </div>
                                                      <div class="preview">
                                                            <iframe></iframe>
                                                                </div>
                                                                  </div>
                                                                  `;
                                                                  
                                                                  // the editor
                                                                  const textarea = document.querySelector("textarea");
                                                                  
                                                                  // the preview window
                                                                  const iframe = document.querySelector("iframe");
                                                                  
                                                                  window.addEventListener("load", async () => {
                                                                    textarea.value = files["index.js"].file.contents;
                                                                    
                                                                      textarea.addEventListener("input", (event) => {
                                                                          const content = event.currentTarget.value;
                                                                              webcontainer.fs.writeFile("/index.js", content);
                                                                                });
                                                                                
                                                                                  // call only once
                                                                                    webcontainer = await WebContainer.boot();
                                                                                    
                                                                                      await webcontainer.mount(files);
                                                                                      
                                                                                        const exitCode = await installDependencies();
                                                                                        
                                                                                          if (exitCode !== 0) {
                                                                                              throw new Error("Installation failed");
                                                                                                }
                                                                                                
                                                                                                  startDevServer();
                                                                                                  });
                                                                                                  
                                                                                                  async function installDependencies() {
                                                                                                    // install dependencies
                                                                                                      const installProcess = await webcontainer.spawn("npm", ["install"]);
                                                                                                      
                                                                                                        installProcess.output.pipeTo(
                                                                                                            new WritableStream({
                                                                                                                  write(data) {
                                                                                                                          console.log(data);
                                                                                                                                },
                                                                                                                                    })
                                                                                                                                      );
                                                                                                                                      
                                                                                                                                        // wait for install command to exit
                                                                                                                                          return installProcess.exit;
                                                                                                                                          }
                                                                                                                                          
                                                                                                                                          async function startDevServer() {
                                                                                                                                            // run `npm run start` to start the express app
                                                                                                                                              await webcontainer.spawn("npm", ["run", "start"]);
                                                                                                                                              
                                                                                                                                                // wait for `server-ready` event
                                                                                                                                                  webcontainer.on("server-ready", (port, url) => {
                                                                                                                                                      iframe.src = url;
                                                                                                                                                        });
                                                                                                                                      https://gitlab.com/crystal.alchemist/sdk-create-project-tq8qfv.git$ scripts/increment-cargo-version.sh minor
                                                                                                                                      $ ./scripts/cargo-for-all-lock-files.sh updategit fetch --all
                                                                                                                                      git checkout upstream/master_$ pip list --user | grep jupyter
                                                                                                                                      jupyter              1.0.0
                                                                                                                                      jupyter-client       7.1.1
                                                                                                                                      jupyter-console      6.4.0
                                                                                                                                      jupyter-core         4.9.1
                                                                                                                                      jupyterlab-pygments  0.1.2
                                                                                                                                      jupyterlab-widgets   1.0.2
                                                                                                                                      _$ pip list --user | grep ipy
                                                                                                                                      ipykernel            6.7.0
                                                                                                                                      ipython              8.0.0
                                                                                                                                      ipython-genutils     0.2.0
                                                                                                                                      ipywidgets           7.6.5
                                                                                                                                      _$ pip list --user | grep zmq
                                                                                                                                      pyzmq                22.3.0
                                                                                                                                      _$ python --version
                                                                                                                                      Python 3.9.9
                                                                                                                                      _$ cat ~/.jupyter/jupyter_qtconsole_config.py
                                                                                                                                      c = get_config()
                                                                                                                                      
                                                                                                                                      c.ConsoleWidget.scrollbar_visibility = False
                                                                                                                                      
                                                                                                                                      c.ConsoleWidget.font_family = "Inconsolata"
                                                                                                                                      c.ConsoleWidget.font_size = 14
                                                                                                                                      
                                                                                                                                      c.JupyterQtConsoleApp.hide_menubar = True
                                                                                                                                      
                                                                                                                                      c.JupyterWidget.include_other_output = TruedefineConfig } from 'vite';

export default defineConfig({
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
});