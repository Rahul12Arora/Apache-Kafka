const { kafka } = require('./client');

async function init(){
    const consumer = kafka.consumer({groupId:'userGroup-1'});
    await consumer.connect();

    await consumer.subscribe({topics:['groupChat'], fromBeginning: true})

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`[${topic}]: PART: ${partition}`, message.value.toString())
        },
    })
    // await consumer.run({
    //     eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
    //         console.log({
    //             key: message.key.toString(),
    //             value: message.value.toString(),
    //             headers: message.headers,
    //         })
    //     },
    // })

}

init();