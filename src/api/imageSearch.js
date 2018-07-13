import {Base64} from 'js-base64'

const CLIENT_ID = 'CLIENT_ID' // paste shutterstock clinet ID
const CLIENT_SECRET = 'CLIENT_SECRET' // paste shutterstock client secret
const authKey = Base64.encode(CLIENT_ID + ':' + CLIENT_SECRET)

const BATCH_SIZE = 10

export const imageSearch = (page, query) => 
    fetch(`https://api.shutterstock.com/v2/images/search?query=${query}&page=${page}&per_page=${BATCH_SIZE}`, {
      method: 'GET',
      headers:{
        Authorization: 'Basic ' + authKey
      }
    })
