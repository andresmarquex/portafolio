document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#inventoryTable tbody');
    const addRowBtn = document.getElementById('addRowBtn');
    const generateBtn = document.getElementById('generateBtn');
    const emailSection = document.getElementById('emailSection');
    const emailInput = document.getElementById('emailInput');
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    const inventoryTitle = document.getElementById('inventoryTitle');

    let generatedJsonData = '';

    const inventoryData = {
  "lastUpdated": "19/9/2025",
  "data": [
    {
      "descripcion": "Bandejas",
      "cantidad": "5",
      "serial": "",
      "color": "Blanco",
      "observacion": ""
    },
    {
      "descripcion": "Cabezote luz halogena",
      "cantidad": "1",
      "serial": "",
      "color": "Blanco",
      "observacion": ""
    },
    {
      "descripcion": "Lampara secon one",
      "cantidad": "2",
      "serial": "SN12105195i - SNL2105198i",
      "color": "Morado",
      "observacion": ""
    },
    {
      "descripcion": "Escupidera",
      "cantidad": "1",
      "serial": "",
      "color": "Blanco opaco",
      "observacion": ""
    },
    {
      "descripcion": "Tapas principal Gad",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Tapa Espaldar Gad",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Tapa Tetera Gad",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Negatoscopios",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Holder con Valvula Gad",
      "cantidad": "5",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Juegos de Tarjetas Gad",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Micromotor",
      "cantidad": "1",
      "serial": "SN24101853",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Contrangulo",
      "cantidad": "1",
      "serial": "SN241018053",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Unidad Gad Dental",
      "cantidad": "1",
      "serial": "SN202409342",
      "color": "Azul",
      "observacion": ""
    },
    {
      "descripcion": "Scanner",
      "cantidad": "0",
      "serial": "SN510703060306",
      "color": "",
      "observacion": "Enviado a Barranquilla"
    },
    {
      "descripcion": "Computador",
      "cantidad": "0",
      "serial": "SBNRCX06986147B",
      "color": "",
      "observacion": "Enviado a Barranquilla"
    },
    {
      "descripcion": "Sticker Modulo",
      "cantidad": "3",
      "serial": "",
      "color": "Blanco",
      "observacion": ""
    },
    {
      "descripcion": "Sticker Modulo",
      "cantidad": "2",
      "serial": "",
      "color": "Gris",
      "observacion": ""
    },
    {
      "descripcion": "Canulas para eyector",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Acope Borden",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Tanque transporte",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Boquilla eyector baja",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Boquilla eyector CX",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Baston llena vaso",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Atrapa Sólido",
      "cantidad": "2",
      "serial": "",
      "color": "Gris",
      "observacion": ""
    },
    {
      "descripcion": "Manija módulo",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Valvula Solenoide",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Automatico Holder",
      "cantidad": "5",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Manguera 1/4",
      "cantidad": "6mts",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Mangera 1/8",
      "cantidad": "6mts",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Manguera de pedal",
      "cantidad": "3mts",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Manguera jeringa triple",
      "cantidad": "3mts",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Rejilla para escupidera",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Eyector de alta metpalico",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Eyector plástico",
      "cantidad": "2",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Compresor de 2 HP",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Cabezote 8 led",
      "cantidad": "0",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Tapa tanque",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Baston llena tasa",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Tapa de eyector con stiflex",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Butacos",
      "cantidad": "3",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Butacos recogido Dra. Ruiz",
      "cantidad": "1",
      "serial": "",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Electrobisturí",
      "cantidad": "0",
      "serial": "",
      "color": "",
      "observacion": "Vendido a Aura Maria Lopez OP 0179 del 5 mayo"
    },
    {
      "descripcion": "Unidad A 6800",
      "cantidad": "1",
      "serial": "SN2502130363",
      "color": "Azul",
      "observacion": ""
    },
    {
      "descripcion": "Sensor",
      "cantidad": "0",
      "serial": "2815500812",
      "color": "",
      "observacion": "Enviados a Bucaramanga"
    },
    {
      "descripcion": "RX",
      "cantidad": "0",
      "serial": "010000167048",
      "color": "",
      "observacion": "Enviados a Bucaramanga"
    },
    {
      "descripcion": "Pieza de mano sin luz",
      "cantidad": "1",
      "serial": "240712097",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Pieza de mano sin luz",
      "cantidad": "1",
      "serial": "240712089",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Pieza de mano sin luz",
      "cantidad": "1",
      "serial": "240712002",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Pieza de mano sin luz",
      "cantidad": "1",
      "serial": "240712011",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Pieza de mano sin luz",
      "cantidad": "1",
      "serial": "240712021",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Cotrangulo",
      "cantidad": "1",
      "serial": "240712042",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Lampara 8 Leds",
      "cantidad": "1",
      "serial": "-",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "FSA",
      "cantidad": "0",
      "serial": "-",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Unidad A600",
      "cantidad": "1",
      "serial": "SN2502130347",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Micromotor",
      "cantidad": "1",
      "serial": "240712058",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Recta",
      "cantidad": "1",
      "serial": "240712053",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Puntas x4",
      "cantidad": "4",
      "serial": "-",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Profijet",
      "cantidad": "1",
      "serial": "231013335N",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Profijet",
      "cantidad": "1",
      "serial": "231010158A",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Profijet",
      "cantidad": "1",
      "serial": "240617050N",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Profijet",
      "cantidad": "1",
      "serial": "240617033N",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Profijet",
      "cantidad": "1",
      "serial": "231010218A",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Profijet",
      "cantidad": "1",
      "serial": "240617052N",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Lampara fotocurado",
      "cantidad": "1",
      "serial": "I24A2123I",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Lampara fotocurado",
      "cantidad": "1",
      "serial": "I24A2200I",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Scaler UDS-J",
      "cantidad": "1",
      "serial": "S2520068J",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Scaler UDS-J",
      "cantidad": "1",
      "serial": "S2521064J",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Cabezote Led A(1)",
      "cantidad": "1",
      "serial": "-",
      "color": "",
      "observacion": ""
    },
    {
      "descripcion": "Scanner",
      "cantidad": "1",
      "serial": "510703251654",
      "color": "",
      "observacion": "Recibidos de Barranquilla"
    },
    {
      "descripcion": "Computador",
      "cantidad": "1",
      "serial": "MP2RGDPD",
      "color": "",
      "observacion": "Recibidos de Barranquilla"
    },
    {
      "descripcion": "Prueba 5",
      "cantidad": "5",
      "serial": "",
      "color": "",
      "observacion": "prueba 5"
    }
  ]
};

    // Carga el inventario inicial desde la variable
    const loadInventory = () => {
        renderTable(inventoryData.data);
        inventoryTitle.textContent = `Inventario Medellín - ${inventoryData.lastUpdated}`;
    };

    // Renderiza los datos en la tabla
    const renderTable = (data) => {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = createRow(item);
            tableBody.appendChild(row);
        });
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

    // Genera el Excel, lo descarga y muestra la sección de correo
    generateBtn.addEventListener('click', () => {
        const tableData = [];
        const rows = tableBody.querySelectorAll('tr');
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const rowData = {
                "Descripción": cells[0].textContent,
                "Cantidad": cells[1].textContent,
                "Serial": cells[2].textContent,
                "Color": cells[3].textContent,
                "Observación": cells[4].textContent,
            };
            tableData.push(rowData);
        });

        const currentDate = new Date().toLocaleDateString('es-ES');
        
        const ws = XLSX.utils.json_to_sheet(tableData);

        const headerStyle = {
            font: { bold: true },
            border: {
                bottom: { style: "thin", color: { rgb: "000000" } }
            }
        };

        const cellStyle = {
            border: {
                top: { style: "thin", color: { rgb: "000000" } },
                bottom: { style: "thin", color: { rgb: "000000" } },
                left: { style: "thin", color: { rgb: "000000" } },
                right: { style: "thin", color: { rgb: "000000" } }
            }
        };

        // Apply styles
        const range = XLSX.utils.decode_range(ws['!ref']);
        for (let R = range.s.r; R <= range.e.r; ++R) {
            for (let C = range.s.c; C <= range.e.c; ++C) {
                const cell_address = {c:C, r:R};
                const cell_ref = XLSX.utils.encode_cell(cell_address);
                if(!ws[cell_ref]) continue;
                if(R === 0){
                    ws[cell_ref].s = headerStyle;
                } else {
                    ws[cell_ref].s = cellStyle;
                }
            }
        }
        
        ws['!cols'] = [
            { wch: 30 },
            { wch: 10 },
            { wch: 25 },
            { wch: 15 },
            { wch: 40 }
        ];

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Inventario');
        XLSX.writeFile(wb, `inventario_actualizado_${currentDate}.xlsx`);

        const newInventoryData = { lastUpdated: currentDate, data: tableData.map(row => ({
            descripcion: row.Descripción,
            cantidad: row.Cantidad,
            serial: row.Serial,
            color: row.Color,
            observacion: row.Observación
        })) };
        generatedJsonData = JSON.stringify(newInventoryData, null, 2);

        emailSection.classList.remove('hidden');
        alert(`Archivo "inventario_actualizado_${currentDate}.xlsx" generado y descargado.`);
        
        console.log("Para guardar los cambios, copia el siguiente texto y pídemelo para actualizar el archivo inventario.js:");
        console.log(`const inventoryData = ${generatedJsonData};`);
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
        
        alert(`Se abrirá tu cliente de correo. Por favor, adjunta manualmente el archivo "inventario_actualizado_${currentDate}.xlsx" que acabas de descargar.`);
        window.location.href = mailtoLink;
    });

    // Cargar los datos al iniciar
    loadInventory();
});
