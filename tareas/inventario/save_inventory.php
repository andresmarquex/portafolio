<?php
// save_inventory.php
require_once 'db_config.php';

header('Content-Type: application/json');

// Get the posted data from the request body
$data = json_decode(file_get_contents('php://input'), true);

if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
    http_response_code(400);
    die(json_encode(['error' => 'Invalid JSON data received. Error: ' . json_last_error_msg()]));
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Start transaction for atomic operations
$conn->begin_transaction();

try {
    // It's safer to truncate the table to prevent duplicate entries or old data
    if (!$conn->query("TRUNCATE TABLE inventory")) {
        throw new Exception("Failed to truncate inventory table.");
    }

    // Prepare statement for insertion to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO inventory (descripcion, cantidad, serial, color, observacion) VALUES (?, ?, ?, ?, ?)");
    if(!$stmt){
        throw new Exception("Statement preparation failed: " . $conn->error);
    }

    foreach ($data as $item) {
        // Set default values for missing keys to avoid errors
        $descripcion = $item['descripcion'] ?? '';
        $cantidad = $item['cantidad'] ?? '';
        $serial = $item['serial'] ?? '';
        $color = $item['color'] ?? '';
        $observacion = $item['observacion'] ?? '';

        $stmt->bind_param("sssss", $descripcion, $cantidad, $serial, $color, $observacion);
        
        if (!$stmt->execute()) {
            throw new Exception("Statement execution failed: " . $stmt->error);
        }
    }

    // Commit the transaction
    $conn->commit();
    echo json_encode(['success' => true, 'message' => 'Inventory updated successfully.']);

} catch (Exception $e) {
    // Rollback the transaction in case of an error
    $conn->rollback();
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

$stmt->close();
$conn->close();
?>
