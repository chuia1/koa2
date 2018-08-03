var db=require('../lib/db.js');

const testservice={
	filterlist(age){
		return db.query('SELECT * FROM `test` WHERE `age`=?',age);
		
	},
	getalllist(){
		
		return db.query('SELECT * FROM `test`');
	},
	delById(id){
		return db.query('DELETE FROM `test` WHERE `Id` = ?',id);
	},
	add(name,age){
		return db.query('INSERT INTO `test`(`name`,`age`) VALUES(?,?)',[name,age]);
	}

}
module.exports=testservice
