let tarefas = []

function adicionarTarefa(){
    const inputTarefa = document.querySelector("#inputTarefa")
    let valorTarefa = inputTarefa.value.trim()

    const mensagem = document.querySelector("#mensagem")

    if (valorTarefa == ""){
        let mensagemErro = "Você não adicionou uma tarefa corretamente!"
        mensagem.textContent = mensagemErro
        document.querySelector("#mensagem").style.color = "#DC2626"
    } else {
        let mensagemSucesso = "Você adicionou uma tarefa!"
        mensagem.textContent = mensagemSucesso

        document.querySelector("#mensagem").style.color = "#16A34A"

        tarefas.push(valorTarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas(){
    const listaTarefas = document.querySelector("#listaTarefas")
    listaTarefas.innerHTML = ""

    for(let i = 0; i < tarefas.length; i++){
        let li = document.createElement("li")
        li.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        li.appendChild(botaoRemover)
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        li.appendChild(botaoEditar)
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefas(i)

        listaTarefas.appendChild(li)
    }
}

function removerTarefa(i){
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefas(i){
    let tarefaEditada = prompt("Escreva uma nova tarefa!")
    if( tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}


function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.querySelector("#mensagem")
    mensagem.textContent = "Voce limpou a lista!"
}