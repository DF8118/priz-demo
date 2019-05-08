<?php

// connect to database
$dbConn = mysqli_connect("localhost","my_user","my_password","my_db");

// get client side input
$firstName = isset($_POST['firstName']) ? mysqli_real_escape_string($dbConn, $_POST['firstName']) : null;

// validation
if (!empty($firstName) && in_array($firstName, $acceptable_firstname_arrays)) {

    // save data into database, assume the primary key column id is autoincrement
    $sql = "INSERT INTO my_table (name) VALUES ('$firstName')";
    $result = mysqli_query($dbConn, $sql);
}
