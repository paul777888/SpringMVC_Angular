(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('TagDetailController', TagDetailController);

    TagDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Tag', 'Entry'];

    function TagDetailController($scope, $rootScope, $stateParams, entity, Tag, Entry) {
        var vm = this;
        vm.tag = entity;
        
        var unsubscribe = $rootScope.$on('blogApp:tagUpdate', function(event, result) {
            vm.tag = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
