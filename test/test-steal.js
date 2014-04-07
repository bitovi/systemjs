module("steal")


asyncTest('steal basics', function(){
	System['import']('tests/steal/module').then(function(m){
	  equal(m.name,"module.js", "module returned" );
	  equal(m.bar.name, "bar", "module.js was not able to get bar");
      start();
	}, function(){
		ok(false, "steal not loaded");
		start()
	});
});
