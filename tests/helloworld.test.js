import printHello from '../utils/helloworld.mjs';
import assert from 'assert';
import myName from '../utils/myname.mjs';

it("This should say Hello Alberto", () => {

    const helloString = printHello() + " " + myName();

    assert.equal(helloString, "Hello Alberto");
    // console.log(helloString);


})