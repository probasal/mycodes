$(function () {
    
    console.log(window.performance.timing.navigationStart);
    
    $('.table-num').keyup(function(event) {	
    		$(this).getTable({
    			tableColor: 'red',
    			tableFontSize: '14px',
    			tableFontWight: 'normal'
    		});
    });
})