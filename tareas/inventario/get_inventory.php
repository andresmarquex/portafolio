<?php
// get_inventory.php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'db_config.php';

header('Content-Type: text/plain'); // Change to plain text for debugging

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    die('Connection failed: ' . $conn->connect_error);
}

$sql = "SELECT id, descripcion, cantidad, serial, color, observacion FROM inventory ORDER BY id";
$result = $conn->query($sql);

// Add error handling for the query
if ($result === false) {
    http_response_code(500);
    die('Query failed: ' . $conn->error);
}

$inventory = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $inventory[] = $row;
    }
}

// If we get here, the query was successful.
// Let's encode to JSON but check for errors.
header('Content-Type: application/json'); // Set back to json
$json_output = json_encode($inventory);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(500);
    die('JSON encoding error: ' . json_last_error_msg());
}

echo $json_output;

$conn->close();
?>