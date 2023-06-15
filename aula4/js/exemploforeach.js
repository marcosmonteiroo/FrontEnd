var times=[];
times.push("flamengo");
times.push("vasco");
times.push("fluminense");
times.push("botafogo");

/*add elemento no inicio do vetor*/
times.unshift("bangu");
/*pop remove primeiro e shift o ultimo
times.pop();
times.shift();*/

/*remover selecionados
times.splice(0,2);*/

times.sort();

/*arrow function*/
times.forEach(f=>console.log(f));
    