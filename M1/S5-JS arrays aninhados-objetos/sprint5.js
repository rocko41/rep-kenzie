const barbearia = {
    cortes: [
      { id: 1,
      tipo: "Militar", 
      valor: 20.0 },

      { id: 2,
      tipo: "Samurai", 
      valor: 35.0 },

      { id: 3,
      tipo: "Pompadour", 
      valor: 20 },

      { id: 4,
      tipo: "Moicano", 
      valor: 0 },

      { id: 5,
      tipo: "Razor part", 
      valor: 0 },
    ],
  
    barbas: [
      { id: 1,
      tipo: "Capitão Jack", 
      valor: 20.0 },

      { id: 2,
      tipo: "Van Dyke", 
      valor: 20.0 },

      { id: 3,
      tipo: "Barba Média", 
      valor: 20.0 },

      { id: 4,
      tipo: "Barba Baixa", 
      valor: 20.0 },

      { id: 5,
      tipo: "Barba Zero", 
      valor: 15.0 },
    ],
    estaAberto: true,
  };
  barbearia.estaFechado=false
console.log(barbearia);
  
  
  function buscaCortePorId(id) {
    for(let i=0;i<barbearia.cortes.length;i++){
        if(barbearia.cortes.id==id){
            console.log(barbearia.cortes[i]);

        }        
        else{
            console.log('Corte não encontrado');
        }
    }
  }
  buscaCortePorId()
  function buscaBarbaPorId(id) {
  }
  
  function verificaStatusBarbearia() {
  }
  
  function retornaTodosCortes() {
  }
  
  function retornaTodasBarbas() {
  }
  
  function criaPedido(nomeCliente, corteId, barbaId) {
  }
  
  function atualizaPedido(lista, id, preco, tipo) {
  }
  
  function calculaTotal(pedido) {
  }
  
  