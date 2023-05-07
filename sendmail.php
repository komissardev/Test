<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('johnsmith19955591@gmail.com','Сервис');
    $mail->addAddress('viktorkomissarov911@gmail.com');
    $mail->Subject = 'Запись на массаж';

    $body = '<h1>Информация о пользователе</h1>';

    if(trim(!empty($_POST["userName"]))){
        $body.='<p>Имя: '.$_POST['userName'].'</p>';
    }
    if(trim(!empty($_POST["userSurname"]))){
        $body.='<p>Фамилия: '.$_POST['userSurname'].'</p>';
    }
    if(trim(!empty($_POST["userSurname"]))){
        $body.='<p>Телефон: '.$_POST['userPhone'].'</p>';
    }
    if(trim(!empty($_POST["userText"]))){
        $body.='<p>Коментарий: '.$_POST['userText'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = ['message' => $message];
    }

    header('Content-type: application/json');
    echo json_encode($response);
>