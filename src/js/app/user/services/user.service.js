angular.module('app.user')

  // Conditional DI, technique taken from:
  // http://phonegap-tips.com/articles/conditional-dependency-injection-with-angularjs.html

  .factory('UserService', function ($injector, APP) {
    if (  APP.testMode) {
      return $injector.get('UserServiceMockImpl');
    } else {
      return $injector.get('UserServiceParseImpl');
    }
  });