function isPrimitive1a(x){return x===null||x===void(0)||!/object|function/.test(typeof x)};
function isPrimitive1b(x){return x?!/object|function/.test(typeof x):x!==0||x!==false};

function isPrimitive2(x){return !Object.prototype.isPrototypeOf(x)};

//
console.clear();
//
[undefined,null,"","primitive",new String("nope"),3.14,new Number(3.14),
true,new Boolean(9),!9,{},Object,Array,[],new Array(),/^\\d+$/
].forEach(function(x,j){
console.log(isPrimitive1a(x),isPrimitive1b(x),isPrimitive2(x),x);
});
