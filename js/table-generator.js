 (function($){
     $.fn.getTable = function (options) {
         var settings = $.extend({}, $.fn.getTable.defaults, options);
 
         return this.each(function(){

             var $this = $(this);
            
             var currentValue = $this.val();

             if(currentValue == "" || isNaN(currentValue)){
                
                $('.table-warning').removeClass('hidden');
                $('.table-container').html("");
                $('.panel-info').addClass('hidden');
                return false;

             }else{

                $('.table-warning').addClass('hidden');
                $('.panel-info').removeClass('hidden');
             }

             $('.table-no span').html(currentValue);

             $('.table-container').html("");
                
            var i = 1;
 
             for (i = 1; i <=10; i++) {

                 $('.table-container').append('<p>' + currentValue + ' x ' + i + ' = ' + currentValue*i +'</p>');
             }
             $('.table-container').css({'color': settings.tableColor,
                                        'font-size': settings.tableFontSize,
                                        'font-weight': settings.tableFontWight
                                       });
 
         });
     };
 
     $.fn.getTable.defaults = {
         tableColor: '#337ab7',
         tableFontSize: '15px',
         tableFontWight: 'bold'
     }
     
 })(jQuery);