angular.module('App.Main')

// ToDo directive definition

// TODO : find out which angular helper could build an URL for hyperlinks buttons
.directive('todo', function (){
  return {
    scope: true,
    replace: true,
    template: '<div><h4 class="col-sm-4 col-md-4">{{$index}} - {{todo.title}}</h4><p class="col-sm-6 col-md-6">{{todo.note}}</p><div class="col-sm-2 col-md-2"><a class="btn btn-default" href="/#/todo/{{$index}}"><span class="glyphicon glyphicon-zoom-in"></span></a><button class="btn btn-default" ng-click="main.removeToDo($index)"><span class="glyphicon glyphicon-remove"></span></button><a class="btn btn-default" href="/#/todo/{{$index}}/edit"><span class="glyphicon glyphicon-edit"></span></a></div></div>'
  }
});
