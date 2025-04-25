// Definindo os estados e suas cidades
const cidadesPorEstado = {
  "AC": ["Rio Branco", "Cruzeiro do Sul", "Tarauacá", "Sena Madureira", "Feijó"],
  "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo", "Penedo"],
  "AM": ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Tabatinga"],
  "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Ilhéus", "Juazeiro"],
  "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Sobral", "Crato"],
  "DF": ["Brasília", "Taguatinga", "Ceilândia", "Samambaia", "Gama"],
  "ES": ["Vitória", "Vila Velha", "Serra", "Cariacica", "Linhares"],
  "GO": ["Goiânia", "Anápolis", "Aparecida de Goiânia", "Rio Verde", "Luziânia"],
  "MA": ["São Luís", "Imperatriz", "Caxias", "Timon", "Açailândia"],
  "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra"],
  "MS": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã"],
  "MG": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros"],
  "PA": ["Belém", "Ananindeua", "Marabá", "Parauapebas", "Castanhal"],
  "PB": ["João Pessoa", "Campina Grande", "Patos", "Santa Rita", "Bayeux"],
  "PR": ["Curitiba", "Londrina", "Maringá", "Cascavel", "Ponta Grossa", "Foz do Iguaçu"],
  "PE": ["Recife", "Olinda", "Jaboatão dos Guararapes", "Petrolina", "Caruaru"],
  "PI": ["Teresina", "Parnaíba", "Picos", "Floriano", "Campo Maior"],
  "RJ": ["Rio de Janeiro", "Niterói", "Petrópolis", "Duque de Caxias", "Campos dos Goytacazes", "Nova Iguaçu"],
  "RN": ["Natal", "Mossoró", "Parnamirim", "Caicó", "Currais Novos"],
  "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria", "Passo Fundo", "Novo Hamburgo"],
  "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"],
  "RR": ["Boa Vista", "Rorainópolis", "Caracaraí", "Mucajaí", "Cantá"],
  "SC": ["Florianópolis", "Joinville", "Blumenau", "Chapecó", "São José", "Lages"],
  "SP": ["São Paulo", "Campinas", "Santos", "Guarulhos", "Osasco", "Barueri", "Sorocaba", "Mauá", "Ribeirão Preto", "São Bernardo do Campo", "Diadema"],
  "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "Estância"],
  "TO": ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins"]
};

// Função para carregar os estados no select
function carregarEstados() {
  const estadoSelect = document.getElementById("estado");
  const estados = Object.keys(cidadesPorEstado);

  estados.forEach(function(estado) {
    const option = document.createElement("option");
    option.value = estado;
    option.textContent = estado;
    estadoSelect.appendChild(option);
  });
}

// Função para atualizar as cidades de acordo com o estado selecionado
function atualizarCidades() {
  const estadoSelecionado = document.getElementById("estado").value;
  const cidadeSelect = document.getElementById("cidade");

  cidadeSelect.innerHTML = '<option value="">Selecione a cidade</option>';

  // Se houver cidades para o estado selecionado, as carrega no select
  if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
    cidadesPorEstado[estadoSelecionado].forEach(function(cidade) {
      const option = document.createElement("option");
      option.value = cidade;
      option.textContent = cidade;
      cidadeSelect.appendChild(option);
    });
  }
}

// Carregar os estados quando a página for carregada
window.onload = function() {
  carregarEstados();
};
