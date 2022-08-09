# channelsDemo
This repository contains two application configurations for a 'yahoo' and a 'google' example applications, which both utilize the same preload script. 
It also contains a 'test' app, which can be utilized to publish different instruments to a specific channel which allows for the applications to display the instrument pushed to the channel. 
# Installation
- Run 'npm install' from both the main repository and the 'testApp' folder
- Copy the appConfig .json file and place it in %localappdata%\Tick42\GlueDesktop\config\apps
- Run 'npm start' from the repository to start the http-server to host the pre-load script
- If the testApp is to be used, run 'npm start' from the testApp folder and copy and place the testApp config in the apps folder for Glue42
- Start the applications from within 'Glue42'
