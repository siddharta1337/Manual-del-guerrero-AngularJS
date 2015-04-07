miRouting.controller('miControlador', function($scope,  $routeParams){
    
    $scope.mensaje = 'Esta es una variable almacenada en el controlador';

    $scope.colorActual =  $routeParams.color;
})