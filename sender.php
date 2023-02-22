<?php
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$message = $_POST['message'];

$to = "mif-vk@yandex.ru";
$date = date ("d.m.Y");
$time = date ("h:i");
$from = $email;
$subject = "Заявка c сайта";

$msg="
    Имя: $name /n
    Почта: $email /n
    Текст: $message";
mail($to, $subject, $msg, "From: $from ");
