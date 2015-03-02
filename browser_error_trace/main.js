$(function(){

	
	//タッチに対応
	$(document).on('click','#push_error',function(){
	  	var err = new Error();
		err.message = "エラーが発生しました。";
	    throw err;
  	});
  	
  	//errorを送信するURL
  	$.fn.BrowserErrorTrace.init(
  		{"url":"http://vps22.cadena.co.jp/system/overseas/export/unit_test_new_tv_export/test_all/"}
  	);
  	
});