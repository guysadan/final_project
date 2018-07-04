# WebDev Course - Guy Sadan - 303012561
# General Instructions
*You should run npm install for node_modules(I ignored this folder in .gitignore) and run the following commands as root.
1.Calculator Function.
src/calculator.js
2.Unit Tests.
mocha unit/calculator.test.js
3.Git 
https://github.com/final_project/webdev.git
4.Web Server.
src/index.js
First,run the web server : node src/index.js .
Examples(port 3000):
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState": null,"input":"1"}'
Output:{"display":"1"}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState": {"display":"1"},"input":"2"}'
Output:{"display":"12"}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState": {"display":"12"},"input":"+"}'
Output:{"display":"12","action":"+"}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState": {"display":"12","action":"+"},"input":"4"}'
Output:{"display":"4","action":"+","firstNumber":12}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState":{"display":"4","action":"+","firstNumber":12},"input":"3"}'
Output:{"display":"43","action":"+","firstNumber":12}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState":{"display":"43","action":"+","firstNumber":12},"input":"="}'
Output:{"display":"55"}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState":{"display":"55"},"input":"+"}'
Output:{"display":"55","action":"+"}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState":{"display":"55","action":"+"},"input":"1"}'
Output:{"display":"1","action":"+","firstNumber":55}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState":{"display":"1","action":"+","firstNumber":55},"input":"="}'
Output:{"display":"56"}
Input:curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' --data '{"calculatorState":{"display":"56"},"input":"5"}'
Output:{"display":"565"} 
5. Integration Tests
integration/integration.test.js
run the web server : node src/index.js .
mocha integration/integration.test.js - 8/8 unit,2/2 integration.
6. Docker
run: docker build -t pitaron .
docker run -p 3000:3000 pitaron
7. Docker-compose
run: docker-compose up
http://localhost
8. E2E tests (optional)
Please clean browser cache of new Chrome version: Version 67.0.3396.62 (Official Build) (64-bit) .
Restart docker compose(I also attached /usr/bin/chromedriver).You should be non root user and run: 
python e2e/e2e.py


