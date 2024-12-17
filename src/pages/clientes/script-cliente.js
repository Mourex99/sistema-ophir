const clientes = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao.silva@email.com",
      celular: "(11) 91234-5678",
      cpf: "123.456.789-00",
      dataNascimento: "1990-05-10",
    },
    {
      id: 2,
      nome: "Maria Souza",
      email: "maria.souza@email.com",
      celular: "(11) 98765-4321",
      cpf: "987.654.321-00",
      dataNascimento: "1985-08-15",
    },
  ];
  
  const listaClientes = document.getElementById("listaClientes");
  const searchInput = document.getElementById("search");
  
  // Renderizar a lista de clientes
  function renderClientes(clientesFiltrados) {
    listaClientes.innerHTML = ""; // Limpa a lista
  
    clientesFiltrados.forEach((cliente) => {
      const li = document.createElement("li");
      li.classList.add("cliente");
  
      li.innerHTML = `
        <strong>${cliente.nome}</strong>
        <div class="detalhes">
          <p><strong>Email:</strong> ${cliente.email} <button class="copiar" onclick="copiarTexto('${cliente.email}')">Copiar</button></p>
          <p><strong>Celular:</strong> ${cliente.celular} <button class="copiar" onclick="copiarTexto('${cliente.celular}')">Copiar</button></p>
          <p><strong>CPF:</strong> ${cliente.cpf} <button class="copiar" onclick="copiarTexto('${cliente.cpf}')">Copiar</button></p>
          <p><strong>Data de Nascimento:</strong> ${cliente.dataNascimento}</p>
          <button onclick="editarCliente(${cliente.id})">Editar</button>
          <button onclick="excluirCliente(${cliente.id})">Excluir</button>
        </div>
      `;
  
      li.addEventListener("click", () => {
        const detalhes = li.querySelector(".detalhes");
        detalhes.style.display = detalhes.style.display === "block" ? "none" : "block";
      });
  
      listaClientes.appendChild(li);
    });
  }
  
  // Função para copiar texto
  function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
      alert("Texto copiado: " + texto);
    });
  }
  
  // Função de edição de cliente
  function editarCliente(id) {
    const cliente = clientes.find((c) => c.id === id);
    const novoNome = prompt("Editar Nome", cliente.nome);
    const novoEmail = prompt("Editar Email", cliente.email);
    const novoCelular = prompt("Editar Celular", cliente.celular);
    const novoCpf = prompt("Editar CPF", cliente.cpf);
    const novaDataNascimento = prompt(
      "Editar Data de Nascimento",
      cliente.dataNascimento
    );
  
    if (novoNome && novoEmail && novoCelular && novoCpf && novaDataNascimento) {
      cliente.nome = novoNome;
      cliente.email = novoEmail;
      cliente.celular = novoCelular;
      cliente.cpf = novoCpf;
      cliente.dataNascimento = novaDataNascimento;
      renderClientes(clientes);
      alert("Cliente atualizado com sucesso!");
    }
  }
  
  // Função de exclusão de cliente
  function excluirCliente(id) {
    const index = clientes.findIndex((c) => c.id === id);
    if (index !== -1 && confirm("Deseja excluir este cliente?")) {
      clientes.splice(index, 1);
      renderClientes(clientes);
      alert("Cliente excluído com sucesso!");
    }
  }
  
  // Filtrar clientes pelo CPF
  searchInput.addEventListener("input", (e) => {
    const valorBusca = e.target.value;
    const filtrados = clientes.filter((cliente) =>
      cliente.cpf.includes(valorBusca)
    );
    renderClientes(filtrados);
  });
  
  // Renderiza a lista inicial
  renderClientes(clientes);
  