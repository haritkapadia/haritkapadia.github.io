const fs = require("fs");
const path = require("path");
const ncp = require("ncp");
const handlebars = require("handlebars");
const org = require("org");

const templates = {
    tutorial: fs.readFileSync("./src/templates/tutorial.html", "utf8"),
    index: fs.readFileSync("./src/templates/index.html", "utf8"),
    style: fs.readFileSync("./src/templates/style.css", "utf8"),
    canvas: fs.readFileSync("./src/templates/canvas.js", "utf8"),
    unknownPage: fs.readFileSync("./src/templates/404.html", "utf8"),
};
Object.keys(templates).forEach((o) => {
    templates[o] = handlebars.compile(templates[o]);
});

handlebars.registerHelper('strcat', function(...args) {
   return args.slice(0, args.length - 1).reduce((acc, curr) => acc + curr, "");
});


const parser = new org.Parser();

const BUILD_DIR = process.argv.length > 2 ? process.argv[2] : "build";
if(!fs.existsSync(BUILD_DIR))
    fs.mkdirSync(BUILD_DIR, {recursive: true});

function renderTutorials(tutorialsDir) {
    const renderFile = (file) => fs.readFile(
        file, "utf8", (err, data) => {
            if(err) {console.error(err); return;}
            const docData = parser.parse(data);
            const htmlData = docData.convert(org.ConverterHTML);
            const output = templates.tutorial({
                title: htmlData.titleHTML,
                content: htmlData.contentHTML,
                toc: htmlData.tocHTML
            });
            fs.writeFile(
                path.join(BUILD_DIR, "tutorials", path.basename(file, ".org") + ".html"),
                output,
                (err) => {
                    if(err) {
                        console.error(err);
                        return;
                    }
                }
            );
        }
    );
    fs.readdir(tutorialsDir, (err, files) => {
        if(err) {console.error(err); return;}
        fs.mkdir(path.join(BUILD_DIR, "tutorials"), (err) => {
            if(err && err.code != 'EEXIST') {console.error(err); return;}
            files.map((f) => path.join(tutorialsDir, f)).forEach(renderFile);
        });
    });
}

function renderIndex(indexDir) {
    const buildTopicInfo = (folder) => {
        return new Promise((resolve, reject) => {
            fs.readdir(path.join(indexDir, folder), (err, files) => {
                if(err) {console.error(err); reject(err);}
                fs.readFile(path.join(indexDir, folder, "properties.json"), "utf8", (err, data) => {
                    if(err) {console.error(err); reject(err);}
                    const topicProperties = JSON.parse(data);
                    fs.readFile(
                        path.join(indexDir, folder, topicProperties.content.file),
                        "utf8",
                        (err, data) => {
                            if(err) {console.error(err); reject(err);}
                            const properties = topicProperties;
                            properties.id = folder;
                            properties.contentHTML = handlebars.compile(data)({
                                content: properties.content
                            });
                            resolve(properties);
                        }
                    );
                });
            });
        });
    };
    fs.readdir(indexDir, (err, files) => {
        if(err) {console.error(err); return;}
        Promise.all(files.map(buildTopicInfo)).then((properties) => {
            properties.sort((a, b) => a.priority - b.priority);
            const outputIndex = templates.index({
                topics: properties
            });
            const output404 = templates.unknownPage({
                topics: properties
            });
            fs.writeFile(path.join(BUILD_DIR, "index.html"), outputIndex, (err) => {
                if(err) {
                    console.error(err);
                    return;
                }
            });
            fs.writeFile(path.join(BUILD_DIR, "404.html"), output404, (err) => {
                if(err) {
                    console.error(err);
                    return;
                }
            });
        });
    });
}

function renderStyles() {
    const properties = {
        font: {
            normal: "Arimo",
            heading: "Inconsolata",
            special: "Zilla Slab"
        },
        color: {
            black: "#1B181A",
            white: "#F5E7E9",
            primary: "#C2010D", // red
            secondary: "#1E3D40", // blue
            tertiary: "#7C533D", // brown
        }
    };
    fs.writeFile(
        path.join(BUILD_DIR, "style.css"),
        templates.style(properties),
        (err) => {
            if(err) {
                console.error(err);
                return;
            }
        }
    );
    fs.writeFile(
        path.join(BUILD_DIR, "canvas.js"),
        templates.canvas(properties),
        (err) => {
            if(err) {
                console.error(err);
                return;
            }
        }
    );
}

function copyStatic(staticDir) {
    ncp.ncp(staticDir, path.join(BUILD_DIR, "static"), console.err);
}

function copyFile(f) {
    fs.copyFile(f, path.join(BUILD_DIR, path.basename(f)), (err) => {
        if(err) {
            console.error(err);
            return;
        }
    });
}

renderTutorials(path.join("src", "tutorials"));
renderIndex(path.join("src", "index"));
renderStyles();
copyStatic(path.join("src", "static"));
copyFile(path.join("src", "favicon.ico"));
