document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#inventoryTable tbody');
    const addRowBtn = document.getElementById('addRowBtn');
    const saveBtn = document.getElementById('saveBtn');
    const generateBtn = document.getElementById('generateBtn');
    const emailSection = document.getElementById('emailSection');
    const emailInput = document.getElementById('emailInput');
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    const inventoryTitle = document.getElementById('inventoryTitle');

    let generatedJsonData = '';

    // Carga el inventario inicial desde la base de datos
    const loadInventory = () => {
        fetch('get_inventory.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    alert('Error al cargar el inventario: ' + data.error);
                    return;
                }
                renderTable(data);
                const today = new Date();
                const formattedDate = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
                inventoryTitle.textContent = `Inventario Medellín - ${formattedDate}`;
            })
            .catch(error => {
                console.error('Error fetching inventory:', error);
                alert('Hubo un error de red al cargar el inventario. Asegúrate de que los archivos PHP están en el servidor y la configuración de la base de datos es correcta.');
            });
    };

    // Renderiza los datos en la tabla
    const renderTable = (data) => {
        tableBody.innerHTML = '';
        if (data.length === 0) {
            // If no data, add a few empty rows to start
            for (let i = 0; i < 5; i++) {
                tableBody.appendChild(createRow());
            }
        } else {
            data.forEach(item => {
                const row = createRow(item);
                tableBody.appendChild(row);
            });
        }
    };

    // Crea una fila de la tabla (<tr>)
    const createRow = (item = {}) => {
        const row = document.createElement('tr');
        
        const fields = ['descripcion', 'cantidad', 'serial', 'color', 'observacion'];
        fields.forEach(field => {
            const cell = document.createElement('td');
            cell.textContent = item[field] || '';
            cell.setAttribute('contenteditable', 'true');
            row.appendChild(cell);
        });

        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => {
            row.remove();
        };
        actionCell.appendChild(deleteBtn);
        row.appendChild(actionCell);

        return row;
    };

    // Agrega una nueva fila vacía a la tabla
    addRowBtn.addEventListener('click', () => {
        const newRow = createRow();
        tableBody.appendChild(newRow);
    });

    // Guarda los cambios en la base de datos
    saveBtn.addEventListener('click', () => {
        const tableData = [];
        const rows = tableBody.querySelectorAll('tr');
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length > 0 && cells[0].textContent.trim() !== '') { // Only save rows with a description
                const rowData = {
                    "descripcion": cells[0].textContent,
                    "cantidad": cells[1].textContent,
                    "serial": cells[2].textContent,
                    "color": cells[3].textContent,
                    "observacion": cells[4].textContent,
                };
                tableData.push(rowData);
            }
        });

        saveBtn.textContent = 'Guardando...';
        saveBtn.disabled = true;

        fetch('save_inventory.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Inventario guardado exitosamente.');
            } else {
                alert('Error al guardar el inventario: ' + (data.error || 'Error desconocido. Revisa la consola para más detalles.'));
                console.error('Save error:', data);
            }
        })
        .catch(error => {
            console.error('Error saving inventory:', error);
            alert('Hubo un error de red al guardar el inventario.');
        })
        .finally(() => {
            saveBtn.textContent = 'Guardar Cambios';
            saveBtn.disabled = false;
        });
    });

    // Genera el PDF, lo descarga y muestra la sección de correo
    generateBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'letter',
        });

        const table = document.getElementById('inventoryTable');
        const head = [['Descripción', 'Cantidad', 'Serial', 'Color', 'Observación']];
        const body = [];
        const rows = table.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length > 0) {
                const rowData = [
                    cells[0].textContent,
                    cells[1].textContent,
                    cells[2].textContent,
                    cells[3].textContent,
                    cells[4].textContent,
                ];
                body.push(rowData);
            }
        });

        const currentDate = new Date().toLocaleDateString('es-ES');
        const title = `Inventario Medellín - ${currentDate}`;

        doc.text(title, 14, 15);

        doc.autoTable({
            head: head,
            body: body,
            startY: 20,
            theme: 'grid',
            margin: { left: 10, right: 10 },
            styles: { fontSize: 8 },
            headStyles: { fillColor: [22, 160, 133] },
            didDrawPage: function (data) {
                // Header
                doc.setFontSize(12);
                doc.text(title, data.settings.margin.left, 15);
            },
        });

        const pdfFileName = `inventario_actualizado_${currentDate}.pdf`;
        doc.save(pdfFileName);

        // Prepare data for email body
        const tableDataForEmail = body.map(row => ({
            descripcion: row[0],
            cantidad: row[1],
            serial: row[2],
            color: row[3],
            observacion: row[4]
        }));
        generatedJsonData = JSON.stringify({ lastUpdated: currentDate, data: tableDataForEmail }, null, 2);

        emailSection.classList.remove('hidden');
        document.querySelector('#emailSection p').textContent = `El archivo ${pdfFileName} se ha descargado. Ahora, ingresa el correo del destinatario.`;
        alert(`Archivo "${pdfFileName}" generado y descargado.`);
    });

    // Abre el cliente de correo del usuario
    sendEmailBtn.addEventListener('click', () => {
        const email = emailInput.value;
        if (!email) {
            alert('Por favor, ingresa una dirección de correo.');
            return;
        }

        const currentDate = new Date().toLocaleDateString('es-ES');
        const subject = `Reporte de Inventario - Medellín ${currentDate}`;
        const body = `Hola,\n\nAdjunto encontrarás el archivo con el inventario actualizado.\n\n--- INICIO DEL REPORTE ---\n${generatedJsonData}\n--- FIN DEL REPORTE ---\n\nSaludos.`;

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        const pdfFileName = `inventario_actualizado_${currentDate}.pdf`;
        alert(`Se abrirá tu cliente de correo. Por favor, adjunta manualmente el archivo "${pdfFileName}" que acabas de descargar.`);
        window.location.href = mailtoLink;
    });

    // Cargar los datos al iniciar
    loadInventory();
});