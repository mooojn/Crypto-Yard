@echo off
cd /d "client"  
npm i

cd ..

cd /d "scrap"
npm i

cd /d "Server"
Install-Package Newtonsoft.Json
Install-Package Microsoft.Data.SqlClient

exit
