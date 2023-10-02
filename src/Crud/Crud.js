import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "ReactNativeSQLite.db"; //Nome do banco de dados
const database_version = "1.0"; //Versão do banco de dados
const database_displayname = "SQLite React Native Offline Database"; //Nome de exibição do banco de dados
const database_size = 200000; //tamanho máximo do banco de dados

/****   ATENÇÃO   *****

comando para instalar o SQLite: npm install --save react-native-sqlite-storage

***********************/

export default class ItemDatabase {

    Conectar() {   //**** CRUD => CREATE - aqui o BD é aberto e a tabela é criada se não existir *****/
        let db;
        return new Promise((resolve) => {
            console.log("Checando a integridade do plugin ...");
            SQLite.echoTest().then(() => {
                console.log("Integridade Ok ...");
                console.log("Abrindo Banco de Dados ...");
                SQLite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => {
                    db = DB;
                    console.log("Banco de dados Aberto");
                    // verifica se existe alguma tabela
                    db.executeSql('SELECT 1 FROM Item LIMIT 1').then(() => {
                        console.log("O banco de dados está pronto ... Executando Consulta SQL ...");
                    }).catch((error) => {
                        console.log("Erro Recebido: ", error);
                        console.log("O Banco de dados não está pronto... Criando tabela");
                        db.transaction((tx) => {
                            // aqui a tabela é criada, se ainda não existir
                            tx.executeSql('CREATE TABLE IF NOT EXISTS Item (id INTEGER PRIMARY KEY AUTOINCREMENT, Destino varchar(30), Ida DOUBLE, Volta DOUBLE, Preco INTEGER, Status varchar(30), Imagem TEXT);');
                        }).then(() => {
                            console.log("Tabela criada com Sucesso");
                        }).catch(error => {
                            console.log(error);
                        });
                    });
                    resolve(db);
                }).catch(error => {
                    console.log(error);
                });
            }).catch(error => {
                console.log("echoTest Falhou - plugin não funcional");
            });
        });
    };

    Desconectar(db) {
        if (db) {
            console.log("Fechando Banco de Dados");
            db.close().then(status => {
                console.log("Banco de dados Desconectado!!");
            }).catch(error => {
                this.errorCB(error);
            });
        } else {
            console.log("A conexão com o banco não está aberta");
        }
    };

    Listar() {   //**** CRUD => READ - aqui a tabela é lida *****/
        return new Promise((resolve) => {
            const lista = [];
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para listar os dados da tabela   
                    tx.executeSql('SELECT * FROM Item', []).then(([tx, results]) => {
                        console.log("Consulta completa");
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            const { id, Destino, Ida, Volta, Preco, Status, Imagem } = row;
                            lista.push({ id, Destino, Ida, Volta, Preco, Status, Imagem });
                        }
                        console.log(lista);
                        resolve(lista);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }


    Inserir(item) {  //**** CRUD => UPDATE - aqui um registro da tabela é inserido *****/
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para inserir um novo registro 
                    tx.executeSql('INSERT INTO Item ( Destino, Ida, Volta, Preco, Status, Imagem) VALUES (?, ?, ?, ?, ?, ?)', [item.Destino, item.Ida, item.Volta, item.Preco, item.Status, item.Imagem]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    Atualizar(id, Status) {   //**** CRUD => UPDATE - aqui a tabela é atualizada *****/
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para atualizar um registro no banco        
                    tx.executeSql('UPDATE Item SET Status = ? WHERE id = ?', [Status , id]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    Remover(id) {   //**** CRUD => DELETE - aqui um registro da tabela é removido *****/
        return new Promise((resolve) => {
            this.Conectar().then((db) => {
                db.transaction((tx) => {
                    //Query SQL para deletar um item da base de dados    
                    tx.executeSql('DELETE FROM Item WHERE Id = ?', [id]).then(([tx, results]) => {
                        console.log(results);
                        resolve(results);
                    });
                }).then((result) => {
                    this.Desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }

}
