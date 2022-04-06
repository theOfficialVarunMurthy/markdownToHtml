# Project Worklog

Total time spent on the project: `3hrs`
* bootstrapping and project setup: `15m`
  * Used NestJS as its a quick setup nodeJS framework and supports TypeScript 
* figuring out the business logic based on requirements: `45m`
  * figuring out the header conversions was quick
  * converting paragraph while handling links and other edge cases took a while
* implementing business logic in code and building out APIs: `1hr`
  * used a module based approch and dependecy injection to make the markdown parser easily portable
  * built a couple of REST APIs that can be used by external applications
* testing edge cases and writing some unit tests, e2e test: `40m`
  * used jest to write some quick unit tests that tested the APIs
  * added some e2e tests that actually mock the requests and compares the response with what is expected
  * able to get 100% code coverage of business logic including error handling
* Adding documentation, notes, code comments: 20m
  * updated Readme to include information to run the application, npm targets for running tests and API docs with examples
  * added worklog