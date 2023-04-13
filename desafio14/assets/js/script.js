function dropHandler(event) {
    // Impede o comportamento padrão (impedir que o arquivo seja aberto)
    event.preventDefault();

    let items = event.dataTransfer.items;
    let files = event.dataTransfer.files;

    if(items) { // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
        for (let i = 0; i < items.length; i++) { // Se os itens soltos não forem arquivos, rejeite-os
            if(items[i].kind === 'file') {
                let file = items[i].getAsFile();
                displayFileInfo(file);
                // fazer algo com o arquivo, como enviar para o servidor
            }            
        }
    } else { // Use a interface DataTransfer para acessar o (s) arquivo (s)
        for (let i = 0; i < files.length; i++) {
            let file = event.dataTransfer.files[i];
            displayFileInfo(file);
      // fazer algo com o arquivo, como enviar para o servidor
        }
    }
}


function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();
}

function displayFileInfo() {
    // exibe a div com as informações do arquivo
    document.getElementById('file-info').style.display = 'block';

    // exibe o nome do arquivo
    document.getElementById('file-name').innerHTML = file.name;

     // exibe o tamanho do arquivo
    let fileSize = file.size / 1024 / 1024; // em MB
    document.getElementById('file-size').innerHTML =  'Tamanho do arquivo: ' + fileSize.toFixed(2) + ' MB';

    // zera o contador de progresso de upload
    document.getElementById('upload-progress').innerHTML = 'Progresso de upload: 0%';

}


//chamar a função updateUploadProgress no momento em que estiver enviando o arquivo para o servidor.
function updateUploadProgress(progress) {
    document.getElementById('upload-progress').innerHTML = 'Progresso de upload: ' + progress + '%';
}


let dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', (event) => {
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave'), (event) => {
    dropZone.classList.remove('dragover')
}