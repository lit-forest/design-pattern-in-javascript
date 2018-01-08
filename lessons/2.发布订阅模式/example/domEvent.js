const button = document.querySelector('.btn');

button.addEventListener('click', function (event) {
    console.log('handle click 1')
});

button.addEventListener('click', function (event) {
    console.log('handle click 2')
});

function foo(evt) {
    console.log(evt.msg);
}

ControlCenter.subscribe('test/foo', foo);

ControlCenter.publish('test/foo', { msg: 'hello,this is a msg' });

ControlCenter.unsubscribe('test/foo', foo);

ControlCenter.publish('test/foo', { msg: 'this should not be seen' })