module.exports.tests = {
    environment: "browser",

    rootPath : "./",
    sources: [
        "src/**/*.js"
    ],
    libs: [
        "lib/**/*.js"
    ],
    tests : [
       "test/**/*-test.js"
    ],
    extensions: [
        require('buster-istanbul')
    ]
};
