import { uiModules } from 'ui/modules';
const module = uiModules.get('kibana/kibana-html-plugin', ['kibana', 'ui.ace']);

module.controller('KbnHtmlEditController', ['$scope', function($scope) {
  $scope.vis.params.html = "default" 
}]);

module.controller('KbnHtmlVisController', function ($scope, $sce) {
  $scope.$watch('renderComplete', function () {
  
  var html = $scope.vis.params.html;
    if (html!="default" && $scope.updateStatus.params){
    console.log(html);
    var a='<iframe src=';
    var b=' width="100%" height="400px"></iframe>';
    var c="\"" + html + "\"";
    console.log(c);
    $scope.html = $sce.trustAsHtml('<!DOCTYPE html><html><body>'+a+c+b+'</body></html>');
       
     }

    $scope.renderComplete();
  });
});
