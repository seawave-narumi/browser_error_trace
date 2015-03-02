/*!
 * BrowserErrorTrace
 *
 * @version   : 0.1
 * @author    : ikki narumi (seawave.works@gmail.com)
 * @copyright : ikki narumi 
 * @license   : The MIT License
 * @link      : 
 * @modified  : 2015-02-26 16:38:00
 */
;(function($) {
	
	$.fn.BrowserErrorTrace = {
		//初期設定
		"defaults":{
	            text   : 'This is basic plugin!!!'
	    },
	    //setting
	    "setting":{},
		"init":function(options){
			
	        //引数を設定する
	        this.setting = $.extend(this.defaults, options);
	        window.onerror = this.error_fuc;
	        return(this);
    	},
    	"error_fuc":function(){
    		console.log(arguments);
    	}
	};
	
	
	
})(jQuery);