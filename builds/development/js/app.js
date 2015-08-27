angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ButtonsCtrl',ButtonsCtrl);

function ButtonsCtrl($scope) {

  var vm = this;
  vm.singleModel = 1;

  vm.radioModel = 'Middle';

  vm.checkModel = {
    left: false,
    middle: true,
    right: false
  };

  vm.checkResults = [];

  $scope.$watchCollection('checkModel', checkModel);

  function checkModel() {
    vm.checkResults = [];
    angular.forEach(vm.checkModel, function (value, key) {
      if (value) {
        vm.checkResults.push(key);
      }
    });
  }

}
