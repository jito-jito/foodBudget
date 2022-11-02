import fakeData from './fakeData'

export default async function fakeFetch(options) {
  try {
    let data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        options?.error 
        ? reject('error in get data (this is a fake error)')
        : resolve(fakeData)
      }, options?.time || 3000)
    })
    
    return data

  } catch (error) {
    return error
  }

}