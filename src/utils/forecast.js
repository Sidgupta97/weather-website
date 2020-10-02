const request = require('request')

const forecast = (lat, long, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=40bd3d7c08ac22fe81cebe591aa73b01&query='+ lat +','+ long +''
    
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather app', undefined)
        }
        else if(body.error){
            callback('Unable to find the location', undefined)
        }
        else{
            callback(undefined, 'It is currently ' +body.current.temperature +' degrees out.')
        }
    })
}

module.exports= forecast