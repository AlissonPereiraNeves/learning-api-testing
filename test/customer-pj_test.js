var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('https://sandbox.conductor.com.br/pier/v2/api');

describe('Customer', function() {
    it('Should return a 200 response for the register of customer', (done) => {
        api.post('clientes-pessoas-juridicas')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            // .set('access_token', 'XBXuybyo0m3r')
            // .set('client_id', 'DtjZeMyNvtoJ')
            .set({access_token:'XBXuybyo0m3r', client_id:'DtjZeMyNvtoJ'})
            .send({
                    "razaoSocial": "APN QA FULL",
                    "nomeFantasia": "APN QA FULL",
                    "cnpj": "98804721000159",
                    "inscricaoEstadual": "394676549963",
                    "dataAberturaEmpresa": "2001-09-04T12:55:00.000Z",
                    "idOrigemComercial": 1,
                    "idProduto": 1,
                    "numeroBanco": 0,
                    "numeroAgencia": 0,
                    "numeroContaCorrente": "string",
                    "email": "string",
                    "diaVencimento": 10,
                    "nomeImpresso": "string",
                    "valorRenda": 0,
                    "canalEntrada": "string",
                    "valorPontuacao": 0,
                    "telefones": [
                      {
                        "idTipoTelefone": 1,
                        "ddd": "011",
                        "telefone": "23425545",
                        "ramal": "9999"
                      }
                    ],
                    "enderecos": [
                      {
                        "idTipoEndereco": 3,
                        "cep": "08620260",
                        "logradouro": "string",
                        "numero": 0,
                        "complemento": "string",
                        "pontoReferencia": "string",
                        "bairro": "string",
                        "cidade": "string",
                        "uf": "SP",
                        "pais": "string",
                        "enderecoCorrespondencia": true
                      }
                    ],
                    "socios": [],
                    "referenciasComerciais": [
                      {
                        "razaoSocial": "string",
                        "nomeContrato": "string",
                        "ddd": "011",
                        "telefone": "24342456",
                        "email": "apn@tw.com"
                      }
                    ],
                    "limiteGlobal": 0,
                    "limiteMaximo": 0,
                    "limiteParcelas": 0
            })
            // .expect('Content-Type', '/json')
            .expect(200, done);
    });
});