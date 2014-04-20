function isPrimitive(x){
	return x==null || !/(object|function)/.test(typeof(x))
};

function test(s) {console.log(s,typeof(s),"isPrimitive?"+isPrimitive(s))};
 
test(undefined); 
test(null); 
test("text"); 
test(new String("nope")); 
test(3.14); 
test(new Number(3.14)); 
test(true); 
test(new Boolean(9)); 
test(!9);
test({});
test(/^\\d+$/);
