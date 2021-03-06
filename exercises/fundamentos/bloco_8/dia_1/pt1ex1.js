// Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const profile = (ent) => ({nomeCompleto: ent,
email: `${ent}@trybe.com`,
})

const newEmployees = (employee, block) => {
  return block(employee);
}


console.log(newEmployees('vinigou', profile));