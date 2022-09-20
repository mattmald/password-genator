
function passGen() {
    var len = prompt('How long would you like your password to be (8-128)?')
    console.log(typeof len)
  var isNumber = true

    if(len<8 || len>128 || isNumber) {
      alert('length not valid');
      return passGen();
    };

    var lower = confirm("Would like lowercase in your password");
    var upper = confirm("Would like uppercase in your password");
    var number = confirm("Would like number in your password");
    var special = confirm("Would like special charaters in your password");

    var temp = '';

    if(lower) temp += 'abcdefghijklmnopqrstuvwxyz';
    if(upper) temp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(number) temp += '1234567890';
    if(special) temp += '!@#$%^][.><-_?&*';
    
    var password = '';

    for (var i = 0; i < len; i++) {
      password += temp[Math.floor(Math.random()*temp.length)]
    }
   
    document.querySelector('textarea').value = password;
};



document.querySelector('.btn').addEventListener('click',passGen);
