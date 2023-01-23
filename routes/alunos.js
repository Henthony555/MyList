var express = require('express');
const app = require('../app');
const { render } = require('../app');
var router = express.Router();
var dao = require('../database/dao')

router.get('/', function (req, res){

    dao.list().then( ([rows]) => {
        res.render('alunos/list', { 
            title: 'MyList',
            alunos: rows});
    }).catch( err => {
        console.log(err)
        res.render('alunos/list', { alunos: [] });
    })
});

router.post('/delete', function (req, res) {

    dao.remove(req.body.id)
    .then( ( [result] ) => {
        console.log(result);
        if (result.affectedRows > 0 )
            req.flash('success', 'Aluno excluido com sucesso.');
        else
            req.flash('success', `Não foi encontrado no banco aluno com id = ${req.body.id}`);
        
        res.redirect('/alunos');
    }).catch( err => {
        console.log(err)
        req.flash('error', 'Ocorreu um erro na exclusão do aluno.');
        res.redirect('/alunos');
    })
})

router.get('/form', async function (req, res){

    let row = {
        id: '',
        nome: '',
        email: '',
        curso: '',
        matricula: '',
        turno: ''
    };
    if( req.query.id){
        [result] = await dao.findById(req.query.id);
        console.log(result);
        row = result[0];
        console.log(row);
    };
    res.render('alunos/form', { 
        title: 'MyList',
        aluno: row});
});

router.post('/save', function (req, res) {

    if (req.body.id){
        operacao = dao.update;
        success = `Dados do aluno atualizados com sucesso.`;
    }else{
        operacao = dao.save;
        success = `Aluno cadastrado com sucesso.`;
    };

    operacao(req.body)
    .then( ([result]) => {
        req.flash('success', success);
        res.redirect('/alunos');
    }).catch( err => {
        console.log(err);
        req.flash('error', `Não foi possível cadastrar o aluno.`);
        res.redirect('/alunos');
    })

})

router.get('/search', function(req, res) {
    
    if (req.query.nome){
        dao.search(req.query.nome)
        .then( ([rows]) => {
            res.render('alunos/list', { 
                title: 'MyList',
                alunos: rows });
        }).catch( err => {
            console.log(err)
            req.flash('error', 'Não foi possível efetuar a busca por nome');
            res.redirect('/alunos')
        });
    }else{
        res.redirect('/alunos');
    };
});

module.exports = router;