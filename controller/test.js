var testservice=require('../service/testservice');

module.exports={

	async querylist(ctx){
		
		let body=ctx.request.body;
		
		await testservice.filterlist(body.age).then(res => {
		
	        ctx.body={
			
				list:res
				
			}
	    }).catch(e => {
	       
	    });
		
		
	},
	async getlist(ctx){
		
		await testservice.getalllist().then(res => {
		
	        ctx.body={
			
				list:res
				
			}
	    }).catch(e => {
	       
	    });
	
	},
	async dellist(ctx){
		let body=ctx.request.body;

		await testservice.delById(body.Id).then(res => {
		
	        ctx.body={
			
				msg:"删除成功"
				
			}
	    }).catch(e => {
	        ctx.body={
			
				msg:"删除失败"
				
			}
	    });

	},
	async adduser(ctx){
		let body=ctx.request.body;
		let name=body.name;
		let age=body.age;
		await testservice.add(name,age).then(res => {
		
	        ctx.body={
			
				msg:"添加成功"
				
			}
	    }).catch(e => {
	        ctx.body={
			
				msg:"添加失败"
				
			}
	    });
	  
	}
}