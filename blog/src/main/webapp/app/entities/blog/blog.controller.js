(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['$scope', '$state', 'Blog', 'BlogSearch'];

    function BlogController ($scope, $state, Blog, BlogSearch) {
        var vm = this;
        vm.blogs = [];
        vm.loadAll = function() {
            Blog.query(function(result) {
                vm.blogs = result;
            });
        };

        vm.search = function () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            BlogSearch.query({query: vm.searchQuery}, function(result) {
                vm.blogs = result;
            });
        };
        vm.loadAll();
        
    }
})();
