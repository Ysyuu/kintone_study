<?php
	// 自分のkintoneの設定
	define("API_TOKEN", ""); 
	define("SUB_DOMAIN", ""); 
	define("APP_NO", ""); 
	//サーバ送信するHTTPヘッダを設定
	$options = array(
	    'http'=>array(
	        'method'=>'GET',
	        'header'=> "X-Cybozu-API-Token:". API_TOKEN ."\r\n"
	    )
	);
	//コンテキストを生成
    $context = stream_context_create( $options );
    
	// サーバに接続してデータを取得
	$contents = file_get_contents( 'https://'. SUB_DOMAIN .'.cybozu.com/k/v1/records.json?app='. APP_NO , FALSE, $context );
	//var_dump($http_response_header); //ヘッダ表示
	
	//JSON形式からArrayに変換
    $data = json_decode($contents, true);
    
    //取得データを表示
    var_dump($data);

    exit;
?>
