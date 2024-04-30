const {kafka} = require('./client.js')

async function init(){
    const producer = kafka.producer();
    console.log('connecting to producer...')
    await producer.connect()
    console.log('Connected to producer Successfully')

    await producer.send({
        topic:'groupChat',
        messages:[
            {
                partition:0,
                key: 'groupchat-update',
                value: JSON.stringify({name: 'Rahul Arora', groupName: 'IT team Group 2'})
            }
        ]
    })

    await producer.disconnect();
    console.log('producer Disconnected')
}

init();