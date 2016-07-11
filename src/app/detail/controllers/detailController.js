angular.module('App.Detail').controller(
  'DetailController',
    function ($uibModalInstance, todoItem) {
      var vm = this;
      vm.title = todoItem.title;
      vm.note = todoItem.note;
  
      vm.okAction = function () {
        $uibModalInstance.close();
      };

      vm.cancelAction = function () {
        $uibModalInstance.dismiss('cancel');
      };
      
      vm.saveAction = function () {
        todoItem.title = vm.title;
        todoItem.note = vm.note;
        $uibModalInstance.close();
      };
      
    }
);
