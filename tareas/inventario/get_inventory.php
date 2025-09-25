<?php
// get_inventory.php

// --- INICIO: CÓDIGO DE DEPURACIÓN TEMPORAL ---
header('Content-Type: text/plain; charset=utf-8');
echo "--- Información de Depuración de Variables de Entorno ---\n\n";
echo "Este es un mensaje de depuración temporal en get_inventory.php.\n";
echo "Muestra las variables de entorno que PHP puede ver.\n\n";

$vars = ['DB_HOST', 'DB_USER', 'DB_NAME', 'DB_PASSWORD'];
foreach ($vars as $var) {
    $value = getenv($var);
    if ($var === 'DB_PASSWORD' && $value) {
        $value = '******** (oculta por seguridad)';
    }
    echo "$var: " . ($value ? $value : 'No definida') . "\n";
}
echo "\n--- FIN: CÓDIGO DE DEPURACIÓN ---\n\n";
die(); // Detiene la ejecución del script aquí para no intentar conectar a la BD.
// --- FIN: CÓDIGO DE DEPURACIÓN TEMPORAL ---


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

$inventory = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $inventory[] = $row;
    }
}

echo json_encode($inventory);

$conn->close();
?>