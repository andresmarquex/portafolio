<?php
// test_env.php
// Archivo de prueba para verificar las variables de entorno.

header('Content-Type: text/plain');

echo "Probando variables de entorno...\n\n";

$db_host = getenv('DB_HOST');
$db_user = getenv('DB_USER');
$db_pass = getenv('DB_PASSWORD');
$db_name = getenv('DB_NAME');

echo "DB_HOST: " . ($db_host ? $db_host : "No definida") . "\n";
echo "DB_USER: " . ($db_user ? $db_user : "No definida") . "\n";
echo "DB_PASSWORD: " . ($db_pass ? "Definida (oculta por seguridad)" : "No definida") . "\n";
echo "DB_NAME: " . ($db_name ? $db_name : "No definida") . "\n";

echo "\n\n--- Contenido de $_SERVER ---\n";
print_r($_SERVER);

echo "\n\n--- Contenido de $_ENV ---\n";
print_r($_ENV);

?>