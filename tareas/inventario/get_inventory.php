<?php
// get_inventory.php
require_once 'db_config.php';

header('Content-Type: application/json');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

$sql = "SELECT id, descripcion, cantidad, serial, color, observacion FROM inventory ORDER BY id";
$result = $conn->query($sql);

// Add error handling for the query
if ($result === false) {
    http_response_code(500);
    die(json_encode(['error' => 'Query failed: ' . $conn->error]));
}

$inventory = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $inventory[] = $row;
    }
}

echo json_encode($inventory);

$conn->close();
?>