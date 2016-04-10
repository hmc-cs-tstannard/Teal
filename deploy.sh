npm install
./node_modules/bower/bin/bower update
s3cmd --delete-removed sync bower_components s3://http://hmc-cs-tstannard.github.io/Teal/ayto.html/
s3cmd put *.js s3://http://hmc-cs-tstannard.github.io/Teal/ayto.html/
s3cmd put style.css s3://http://hmc-cs-tstannard.github.io/Teal/ayto.html/
s3cmd put index.html s3://http://hmc-cs-tstannard.github.io/Teal/ayto.html/