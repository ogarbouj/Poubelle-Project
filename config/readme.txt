in config folder, please add any configuration you need for the app

To call any config please declare on top of page
--> const config = require('config');
and to get the data just write 
--> console.log(`App Name: ${config.get('config_name')}`)