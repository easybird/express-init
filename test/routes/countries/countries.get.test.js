import { assert } from 'chai';

describe('GET brand', () => {
    describe('valid', function () {

        it('should return a html page', function (done) {
            assert.equal(-1, [1,2,3].indexOf(4));
            assert.equal(-1, [1,2,3].indexOf(0));
            done();
        });
    });

    describe(`error`, () => {
        it(`should return an error page`, (done) => {

            done();
        });

    });
});