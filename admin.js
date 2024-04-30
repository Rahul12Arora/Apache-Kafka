const {kafka} = require('./client.js')

async function init(){
  const admin = kafka.admin();
  console.log('admin connecting...');
  await admin.connect();
  console.log('admin Connected');

  await admin.createTopics({
    topics: [{
      topic: 'groupChat',
      numPartitions: 2,     // default: -1 (uses broker `num.partitions` configuration)
  }]
})
  console.log('Topic created succesfully')

  console.log('admin disconnected')
}

init();