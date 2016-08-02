// (function() {
    'use strict';

    /**
     * 代码高亮(指令)
     */
    angular
        .module('standard')
        .directive('uiSyntaxHighlighter', function($timeout) {
            function link(scope, element) {
            console.log("hdwhe");
                $timeout(function(){
                   SyntaxHighlighter.highlight(); 
                }, 100);
            }

            return {
                link: link
            };
        });
// })();