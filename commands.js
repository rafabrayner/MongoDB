use scie

db.nota.insertMany(
  [
    {nota: 10.0, status: 'APROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b1d"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 9.5, status: 'APROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b1e"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 9.0, status: 'APROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b1f"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 8.5, status: 'APROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b20"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 8.0, status: 'APROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b21"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 7.0, status: 'APROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b22"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 6.0, status: 'RECUPERAÇÃO', aluno: ObjectId("5f5d160c8bfe1eb200550b23"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 5.0, status: 'RECUPERAÇÃO', aluno: ObjectId("5f5d160c8bfe1eb200550b24"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 4.0, status: 'REPROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b25"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 3.0, status: 'REPROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b26"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 2.0, status: 'REPROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b27"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 1.0, status: 'REPROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b28"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")},
    {nota: 0.0, status: 'REPROVADO', aluno: ObjectId("5f5d160c8bfe1eb200550b29"), disciplina: ObjectId("5f5d160c8bfe1eb200550b46")}
  ]
)



db.curso.updateOne({nome:"Administracao"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Automacao Industrial"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Biomedicina"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Cincias Biologicas"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Comercio Exterior"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Cosmetica e Imagem Pessoal"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Design de Produto"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Eletronica Industrial"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Engenharia Ambiental"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Engenharia de Producao"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Engenharia Eletrica"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Eventos"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Farmacia"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Fisioterapia"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Medicina Veterinaria"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Pedagogia"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Turismo"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})
db.curso.updateOne({nome:"Secretariado Executivo"},{$set:{instituicao: ObjectId("5f5d160c8bfe1eb200550b45")}})



db.disciplina.updateOne({ nome: 'Sociologia' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b33") } })
db.disciplina.updateOne({ nome: 'Ciência Política' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b34") } })
db.disciplina.updateOne({ nome: 'Introducao ao Direito' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b35") } })
db.disciplina.updateOne({ nome: 'Português Jurídico' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b36") } })
db.disciplina.updateOne({ nome: 'Direito Romano' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b37") } })
db.disciplina.updateOne({ nome: 'Psicologia Jurídica' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b38") } })
db.disciplina.updateOne({ nome: 'Direito Civil' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b39") } })
db.disciplina.updateOne({ nome: 'Direito Penal' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b3a") } })
db.disciplina.updateOne({ nome: 'Direito Constitucional' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b3b") } })
db.disciplina.updateOne({ nome: 'Direito Econômico' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b3c") } })
db.disciplina.updateOne({ nome: 'Direito do Trabalho' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b3d") } })
db.disciplina.updateOne({ nome: 'Direito Administrativo' }, { $set: { curso: ObjectId("5f5d160c8bfe1eb200550b3e") } })



db.professor.updateOne({ nome: 'Helena Miguel' }, { $set: { disciplina: ObjectId("5f5d160c8bfe1eb200550b46") } })
db.professor.updateOne({ nome: 'Alice Laura' }, { $set: { disciplina: ObjectId("5f5d160c8bfe1eb200550b47") } })
db.professor.updateOne({ nome: 'Arthur Heitor' }, { $set: { disciplina: ObjectId("5f5d160c8bfe1eb200550b48") } })
db.professor.updateOne({ nome: 'Manuela Valentina' }, { $set: { disciplina: ObjectId("5f5d160c8bfe1eb200550b49") } })
db.professor.updateOne({ nome: 'Bernardo Davi' }, { $set: { disciplina: ObjectId("5f5d160c8bfe1eb200550b4a") } })
db.professor.updateOne({ nome: 'Theo Lorenzo' }, { $set: { disciplina: ObjectId("5f5d160c8bfe1eb200550b4b") } })
db.professor.updateOne({ nome: 'Gabriel Pedro' }, { $set: { disciplina: ObjectId("5f5d160c8bfe1eb200550b4c") } })
db.professor.updateOne({ nome: 'Lorena Lívia' }, { $set: { disciplina: ObjectId("5f5d160c8bfe1eb200550b4d") } })




db.aluno.find()
db.disciplina.find()
db.curso.find()
db.professor.find()



db.disciplina.find({ nome: "Sociologia" })
db.disciplina.find({ nome: /^D/ })



db.disciplina.deleteOne({ _id: ObjectId("5f5d160c8bfe1eb200550b51") })
db.disciplina.deleteOne({ _id: ObjectId("5f5d160c8bfe1eb200550b50") })



db.nota.updateOne({ nota: {$lt: 6.0} },
  { $set: { status: "REPROVADO" } }
)
db.nota.updateOne({ nota: {$gte: 6.0} },
  { $set: { status: "APROVADO" } }
)
