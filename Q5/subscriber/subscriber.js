const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://mqtt-broker")


const TOPIC = "test/sensor-data";


client.on("connect",()=>{

        
        client.subscribe(TOPIC,function(error){
            if(!error) {
                console.log(`Subscribed to ${TOPIC}`)
            } else {
                console.log(error)
            }
        })
})



client.on("message",(top,message)=>{
    console.log(`Topic: ${top}, Message: ${message.toString()}`);
})