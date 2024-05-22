document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const emailUsuario = document.getElementById('emailUsuario').value;
    const senhaUsuario = document.getElementById('senhaUsuario').value;
    const categoriaMusical = document.getElementById('categoriaMusical').value;

    const novoUsuario = {
        nomeUsuario,
        emailUsuario,
        senhaUsuario,
        categoriaMusical
    };

    fetch('/usuarios/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    })
    .then(response => response.text())
    .then(message => {
        document.getElementById('cadastroMensagem').innerText = message;
    })
})

//
