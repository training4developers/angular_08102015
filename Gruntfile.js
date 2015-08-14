module.exports = function(grunt) {

	"use strict";

	var
		path = require("path"),
		server = require("./app/server");

	grunt.initConfig({
		webServer: {
			port: 8080,
			defaultFile: path.join(process.cwd(), "app", "www", "index.html")
		},
    mongoServer: {
      host: "localhost",
      port: 27017,
      dbName: "CDC"
    },
    logger: {
      transports: {
        console: {
          level: "debug",
          colorize: true,
          timeStamp: true
        },
        file: {
          level: "debug",
          fileName: path.join(process.cwd(), "logs", "app.log"),
          timeStamp : true
        }
      }
    }
	});

	grunt.registerTask("default", "start web server", function() {

		var
			app = server(grunt.config());

		this.async();

		app.start();

	});

};
