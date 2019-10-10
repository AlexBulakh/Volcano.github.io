<?php

$json = file_get_contents('../goods1000.json');
$json = json_decode($json, true);


$message = '';
$message .= '<h1>Заказ в магазине</h1>';
$message .='<p>Клиент: '.$_POST['Name'].'</p>';
$message .='<p>Почта: '.$_POST['email'].'</p>';
$message .='<p>Телефон: '.$_POST['Phone'].'</p>';
$message .='<p>Область: '.$_POST['Delivery1'].'</p>';
$message .='<p>Город: '.$_POST['Delivery2'].'</p>';
$message .='<p>Отделение Новой Почты: '.$_POST['Delivery3'].'</p>';

$cart = $_POST['cart'];
$sum = 0;
foreach ($cart as $id=>$count) {
    $message .=$json[$id]['description'].' --- ';
    $message .=$count.' --- ';
    $message .=$count*$json[$id]['cost'];
    $message .='<br>';
    $sum = $sum +$count*$json[$id]['cost'];
}
$message .='Всего: '.$sum;

  //print_r($message);

    $to = 'volcanohookah@gmail.com'.',';
    $to .=$_POST['email'];
    $spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $m = mail($to, 'Заказ в магазине', $spectext.$message.'</body></html>', $headers);

    if ($m) {echo 1;} else {echo 0;}

