
/*
  const doGet = (url) => {
    const promiseCallBack = (resolve, reject) => {
      fetch(url)
        .then ((response) => {
          if (!response.ok) throw new Error('Erro ao executar');
          return response.json();
        })
        .then (resolve)
        .catch (reject);

    }
    return new Promise(promiseCallBack);
  }
  doGet("http://viacep.com.br/ws/01001000/json/").then(console.log).catch(console.error);

*/

    function pegaCEP () {
      var numCEP = document.getElementById("numeroCEP").value;
        var requisicao = fetch(`http://viacep.com.br/ws/${numCEP}/json`)
        .then(response => {
          return response.json();
        })
        .then(jsonBody => {
          document.getElementById("logradouro").innerHTML = jsonBody.logradouro;
          document.getElementById("bairro").innerHTML = jsonBody.bairro;
          document.getElementById("localidade").innerHTML = jsonBody.localidade;
          document.getElementById("uf").innerHTML = jsonBody.uf;
          console.log(jsonBody);
        });

      }
