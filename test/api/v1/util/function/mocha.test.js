/* eslint-disable no-undef */
const chai = require('chai');

const { expect } = chai;
chai.use(require('chai-as-promised'));
const mocha = require('../../../../../app/api/v1/util/function/mocha');

describe('sum', function() {
  it('should return addition of two value', () => {
    const result = mocha.sum(1, 2);
    expect(result).to.equal(3);
  });

  it('should throw error if number is NaN', () => {
    expect(() => mocha.sum(1, 'a')).to.throw();
  });

  it('should throw error if number is undefined', () => {
    expect(() => mocha.sum()).to.throw();
  });

  it('should add negative numbers', () => {
    expect(mocha.sum(-1, -5)).to.equal(-6);
  });

  before(() => {});

  beforeEach(() => {});

  after(() => {});

  afterEach(() => {});
});

describe('sumcb', () => {
  it('should return addition of two value', done => {
    mocha.sumcb(1, 2, result => {
      expect(result).to.equal(3);
      done();
    });
  });

  it('should throw error if number is NaN', done => {
    expect(() => mocha.sumcb(1, 'a', () => {})).to.throw();
    done();
  });

  it('should throw error if number is undefined', done => {
    expect(() => mocha.sumcb(null, null, () => {})).to.throw();
    done();
  });

  it('should add negative numbers', done => {
    mocha.sumcb(-1, -5, result => {
      expect(result).to.equal(-6);
      done();
    });
  });

  before(() => {});

  beforeEach(() => {});

  after(() => {});

  afterEach(() => {});
});

describe('sumpromise', () => {
  it('should return addition of two value', done => {
    expect(mocha.sumpromise(1, 2))
      .to.eventually.equal(3)
      .and.notify(done);
  });

  it('should throw error if number is NaN', done => {
    expect(mocha.sumpromise(1, 'a'))
      .to.eventually.rejectedWith('Not an Valid Input')
      .and.notify(done);
  });

  it('should throw error if number is undefined', done => {
    expect(mocha.sumpromise()).to.eventually.rejected.and.notify(done);
  });

  it('should add negative numbers', done => {
    expect(mocha.sumpromise(-1, -5))
      .to.eventually.equal(-6)
      .and.notify(done);
  });

  before(() => {});

  beforeEach(() => {});

  after(() => {});

  afterEach(() => {});
});

describe('absolute', () => {
  it('should throw error if number is NaN', () => {
    expect(() => mocha.absolute('a')).to.throw();
  });

  it('should throw error if number is undefined', () => {
    expect(() => mocha.absolute()).to.throw();
  });

  it('should return positive number for positive', () => {
    expect(mocha.absolute(1)).to.equal(1);
  });

  it('should return positive numbers for negative', () => {
    expect(mocha.absolute(-1)).to.equal(1);
  });
});

describe('greeting', () => {
  it('should throw error if input is undefined', () => {
    expect(() => mocha.greeting()).to.throw();
  });

  it('should return greeting message', () => {
    expect(mocha.greeting('Happy')).to.contains('Happy');
  });
});

describe('general', () => {
  it('validate array numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers)
      .to.be.an('array')
      .that.includes(2);
    expect(numbers).to.have.lengthOf(5);
  });

  it('checks equality', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(true).to.be.true;
  });

  it('promise number equality', done => {
    expect(Promise.resolve(2 + 2))
      .to.eventually.equal(4)
      .and.notify(done);
  });

  it('promise object property validation1', done => {
    expect(Promise.resolve({ foo: 'bar' }))
      .to.eventually.have.property('foo', 'bar')
      .and.notify(done);
  });

  it('promise object property validation2', done => {
    expect(Promise.resolve({ foo: 'bar' }))
      .to.eventually.have.property('foo')
      .and.notify(done);
  });
});
