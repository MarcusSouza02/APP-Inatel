        function saveData() {
            const curso = document.getElementById("curso").value;
            const matricula = document.getElementById("matricula").value;
            const senha = document.getElementById("message").value;
        
            // Armazenar os dados no localStorage
            localStorage.setItem("curso", curso);
            localStorage.setItem("matricula", matricula);
            localStorage.setItem("senha", senha);
        
            // Exibir alerta de confirmação
            alert('Dados salvos com sucesso!');
        
            // Redirecionar para a nova página
            window.location.href = "http://127.0.0.1:5500/Pagina%20inicial/main_inicial.html";
        }
        
        // Função para carregar os dados do armazenamento local
        function loadData() {
            const curso = localStorage.getItem('curso');
            const matricula = localStorage.getItem('matricula');
            const senha = localStorage.getItem('senha');
        
            if (curso) {
                document.getElementById('curso').value = curso;
            }
            if (matricula) {
                document.getElementById('matricula').value = matricula;
            }
            if (senha) {
                document.getElementById('message').value = senha;
            }
        }
        
        // Carregar os dados ao carregar a página
        window.onload = loadData;
        
        const menu = document.getElementById('button');
        menu.addEventListener('click', function() {
        window.location.href = 'http://127.0.0.1:5500/Pagina%20inicial/main_inicial.html'; 
        });

        function goToDocuments() {
        window.location.href = "http://127.0.0.1:5500/Pagina%20de%20documentos/main_docs.html";
        }
