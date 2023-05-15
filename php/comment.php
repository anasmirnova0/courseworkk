<?php
$hostname="localhost";
$username="root";
$dbname="comment";
$password="";

$name=$_POST['name'];
$company=$_POST['company'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$com=$_POST['com'];

if ($name==null || $company==null || $phone==null || $email==null || $com==null) {
    echo("<script type = 'text/javascript'>alert('Заполните все поля');</script>");
    echo("<script>history.back(1);</script>");
}
else {
    $link = mysqli_connect($hostname, $username, $password, $dbname) or die("Подключение не создано!".mysqli_error($link));
    mysqli_set_charset( $link, "UTF8");
    $query="INSERT INTO comment(name, company, phone, email, com) Values ('$name', '$company', '$phone', '$email', '$com')";
    $result=mysqli_query($link, $query);
    if ($result == true){
        echo ("<script>alert(\"Комментарий успешно добавлен.\"); </script>");
        echo("<script>history.back(1);</script>");
    }
    else{
        echo ("<script>alert(\"Ошибка добавления записи.\"); </script>");
        echo("<script>history.back(1);</script>");
    }
    mysqli_close($link);
}
?>

