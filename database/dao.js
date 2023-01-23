const pool = require('./config')

let operations = {
    list: function() {
       return pool.promise().query('select * from alunos');
    },
    findById(id) {
        return pool.promise().query('select * from alunos where id=?', 
        [id]);

    },
    save: function(aluno){
        return pool.promise().execute('INSERT INTO alunos (nome, email, curso, matricula, turno) VALUES (?, ?, ?, ?, ?)', 
        [ aluno.nome, aluno.email, aluno.curso, aluno.matricula, aluno.turno]);
    },
    update: function(aluno){
        return pool.promise().execute('UPDATE alunos set nome=?, email=?, curso=?, matricula=?, turno=? where id=?',
        [aluno.nome, aluno.email, aluno.curso, aluno.matricula, aluno.turno, aluno.id]);
    }, 
    remove: function(id){
        return pool.promise().execute('delete from alunos where id= ?' , 
        [id]);
    },
    search: function(nome) {
        return pool.promise().query('select * from alunos where nome like ?', 
        [ '%'+nome+'%']);
    } 
}

module.exports = operations