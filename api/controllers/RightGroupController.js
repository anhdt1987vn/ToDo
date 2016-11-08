/**
 * RightGroupController
 *
 * @description :: Server-side logic for managing Rightgroups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	addRightGroup: function(req, res) {

    //console.log(req.body);
    var tenNhom = req.body.TenNhom;
    var moTa = req.body.MoTa;
    var data = req.body.data;

    console.log(tenNhom);
    console.log(moTa);
    console.log(data);

    RightGroup.create(req.body).exec(function(err, rightGroup) {
      	if(err){
      		throw err;
      	}else { 
    		/*datas.forEach(function(data, index){
        		rightGroup.issues.add(issue);
    		})

    		rightGroup.save(function(err) {});*/
    		rightGroup.functions.add(data);

    		rightGroup.save(function(err) {});
  		}

    	return res.ok({
			data: rightGroup
		});
     
    })
  }	
};

