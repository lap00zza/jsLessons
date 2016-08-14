/**
 * Created by Jewel Mahanta (@lap00zza) on 13-08-2016.
 */

/*
*  Reference:
*  https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md
*
* Four rules apply to find call-site
* ----------------------------------------------------------------------------------
* 1. Default Binding
*  > when no other rules apply then the default binding applies.
*    In default binding, the this object points to the global object,
*    while not in "strict mode";
*    If strict mode is in effect, the global object is not eligible for
*    the default binding, so the this is instead set to undefined.
*
* * */
/*var a = 2;
function foo() {
    console.log(this.a);
}
foo();*/

/*----------------------------------------------------------------------------------
* 2. Implicit Binding
*    Another rule to consider is: does the call-site have a context object, also
*    referred to as an owning or containing object, though these alternate terms
*    could be slightly misleading.
* */
/*function foo() {
    console.log( this.a );
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj = {
    a: 2,
    foo: foo,
    obj2: obj2
};

var love = obj2.foo;
obj.obj2.foo(); // 2
var a = "Ayy Global WTF!!!";
love();*/

// Sometime the call site can be misread

/*----------------------------------------------------------------------------------
* 3. Explicit Bindings
*    Used when we want to specify the this object, without using a property function
*    reference. To use explicit binding, we use
*    >> apply(thisObj, [args1, args2, ...])
*    or,
*    >> call(thisObj, arg1, arg2, ...)
*
* Remember: A for array, C for coma
* ("apply" needs an array for 2nd argument, "call" needs a coma separated list)
* */
/*
function foo() {
    console.log( this );
}

var obj = {
    a: 2
};

foo.call("hello there");

var c = new Function("a", "b", "return a + b");
console.log(c(1, 2));*/

/*
* Hard binding is a variation of explicit binding
* */

/*
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

var bar = function() {
    foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2*/

/*
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};
// simple `bind` helper
function bind(fn, obj) {
    return function() {
        return fn.apply( obj, arguments );
    };
}
*/

/*var bar = function() {
    return foo.apply( obj, arguments );
};*/

/*var bar = bind(foo, obj);
var car = foo.bind(obj);

var b = bar( 3 );
var c = car( 3 );
console.log( bar, car, b, c );*/

/*
* API call context is one more variation of
* explicit binding
* */
/*function doo(el, el1, el2) {
    console.log(el + " : " + this.id, el1, el2 );
}

var obj1 = {
    id: "lol"
};

[1, 2, 3].forEach(doo, obj1);*/

/*----------------------------------------------------------------------------------
* 4. new Binding
* So, pretty much any ol' function, including the built-in object functions like Number(..)
* (see Chapter 3) can be called with new in front of it, and that makes that function call
* a constructor call. This is an important but subtle distinction: there's really no such
* thing as "constructor functions", but rather construction calls of functions.
*
* When a function is invoked with new in front of it, otherwise known as a constructor call,
* the following things are done automatically:
*
* - a brand new object is created (aka, constructed) out of thin air
*
* - the newly constructed object is [[Prototype]]-linked
*
* - the newly constructed object is set as the this binding for that function call
*
* - unless the function returns its own alternate object, the new-invoked function call will
*   automatically return the newly constructed object.
* */
/*
function Foo(a) {
    this.a = a;
}

var bar = new Foo( 2 );
console.log( bar.a ); // 2*/

/*---------------------------------------------------------------------------------------
* Now lets check the precedence
* */
/*function foo() {
    console.log( this.a );
}

var obj1 = {
    a: 2,
    foo: foo
};

var obj2 = {
    a: 3,
    foo: foo
};

obj1.foo(); // implicit binding
obj2.foo(); // implicit binding

obj1.foo.call( obj2 ); // Explicit binding
obj2.foo.call( obj1 ); // Explicit Binding*/

// >>>>>>>>  Explicit bind > Implicit bind

/*function something(s) {
    this.a = s;
}

var obj1 = {
    foo: something
};

var obj2 = {

};
obj1.foo(3);
console.log(obj1.a);

obj1.foo.call(obj2, 3);
console.log(obj2);

var bar = new obj1.foo(4);
console.log(bar.a);*/

// >>>>>>>>  New bind > implicit bind

/*function foo(something) {
    this.a = something;
    console.log(this.b)
}

var obj1 = {
    b: "o bby"
};

// var bar = foo.bind( obj1 );
var bind = function (foo, obj1) {
    "use strict";
    return function () {
        foo.apply(obj1, arguments);
    };
};
var bar = bind(foo, obj1);

bar( 2 );
console.log( obj1.a ); // 2

var baz = new bar( 3 );
console.log( obj1.a ); // 2
console.log( baz.a ); // 3*/

/*------------------------------------------------------
* So, the final order is
* New binding > Hard binding (Explicit) > Implicit binding > Default binding
* */

/*------------------------------------------------------
* Sometime our function may not care about the "this" object at all.
* We can either use "null" or a special DMZ object (;), which is nothing
* but a empty object)
* */
function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
}

// our DMZ empty object
var ø = Object.create( null );

// spreading out array as parameters
foo.apply( ø, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( ø, 2 );
bar( 3 ); // a:2, b:3