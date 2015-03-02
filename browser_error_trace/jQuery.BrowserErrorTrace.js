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
	//初期設定
	var defaults = { 
						"url"  : 'http://'
				   };
	//設定、初期設定＋追加、上書きされる。
	var setting = {};			   
	var ErrorTrace = {
		"error_fuc":function(message,file,line){
    		var error_obj = {};
    		for(var i=0; i < arguments.length; i++){
    			console.log(arguments["0"]);
    			//message, file, line, col, errorが入る可能性がある。
    			if(i===0){ error_obj.message = arguments["0"]; }
    			if(i===1){ error_obj.file    = arguments["1"]; }
    			if(i===2){ error_obj.line    = arguments["2"]; }
    			if(i===3){ error_obj.col     = arguments["3"]; }
    			if(i===4){ error_obj.error   = arguments["4"]; }
    		}
    		
    		var getParamStr = $.param(error_obj);
    		new Image().src = setting+"?"+getParamStr;
    		
    	}   
	};
	$.fn.BrowserErrorTrace = {
		"init":function(options){
			
	        //引数を設定する
	        setting = $.extend(defaults, options);
	        window.onerror = ErrorTrace.error_fuc;
	        return(this);
    	}
	};
	
	
				
			
	
})(jQuery);