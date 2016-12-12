<?php
	error_reporting(0);
	//引入数据文件
	require_once('data.php');
	
	//判断用户的提交方式get or post &&  获取用户传入的收藏id
	if($_SERVER['REQUEST_METHOD'] == "POST"){
		$collects = $_POST['collect_id'];
	}else{
		$collects = $_GET['collect_id'];
	}
	
	//用户未传入收藏id，则随机返回数据（首页）
	if(!$collects){
		//定义编号集合
		$no = array(
			'10001','10002','10003','10004',
			'10005','10006','10007','10008',
			'10009','10010','10011','10012'
		);
		shuffle($no);
		$num = array_slice($no,0,4); 
	}else{
		$num = $collects; 
	}
	//定义返回的数组
	$result = array();
	//整合数组
	foreach($num as $k => $v){
		$result[$k] = $shows[$v];
	}
	echo json_encode($result);
?>