
(function($){  
    $.fn.forceToFullWidth = function(options) {  
        var defaults = {  
            container : '.container'
        };
        var options = $.extend(defaults, options);
        // get some useful variables
        var $this           = $(this);
        var calculateMargin = function() {
            var $winWidth = $(window).width();
            var $conWidth = $(options.container).width();
            var $extraWidth = $winWidth - $conWidth;
            var $finalWidth = $extraWidth / 2;
            return $this.css({
                'margin-left': '-'+$finalWidth+'px',
                'margin-right': '-'+$finalWidth+'px',
                'padding-right': $finalWidth,
                'padding-left': $finalWidth,
            }); 
        }
        return this.each(function() {
            calculateMargin();
            $(window).on('resize', calculateMargin);
        }); 
    }; // fn.forceToFullWidth
})(jQuery);

// $('.inner-element').forceToFullWidth();
