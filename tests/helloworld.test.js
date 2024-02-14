import printHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("This should say Hello", () => {

    const helloString = printHello();

    assert.equal(helloString, "Hello");
    // console.log(helloString);


})