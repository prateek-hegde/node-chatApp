var expect = require('expect');

var{generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () =>{
      var from = 'Prateek';
      var text = 'test';
      var message = generateMessage(from, text);

      console.log(message);

     //expect(message.createdAt).toBeA('number');
     //expect(message).toInclude({from, text});
  });
});
