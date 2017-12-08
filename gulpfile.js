var gulp = require('gulp');
var sonarqubeScanner = require('sonarqube-scanner');
 
gulp.task('default', function(callback) {
  sonarqubeScanner({
    serverUrl : "https://sonarcloud.io",
    token : "0d6446b57419652ac731cb706833f7b0f7a548db",
    options : {
      "sonar.organization": "swathikiranmai-github",
      "sonar.login": "admin",
      "sonar.password": "admin"
    }
  }, callback);
});