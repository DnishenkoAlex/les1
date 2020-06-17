// //Event Loop асинхронность

// //setTimeout() возвращяет обьект
// //setTimeout() пауза перед началом выполнения
// const timeout = setTimeout(() => {
//     console.log('After timeOut')
// }, 2500)// 2,5 сек

// clearTimeout(timeout) // отменяет действие  setTimeout()

// // setinterval() функция указывает через какой интервал выполнять условия
// const interval = setInterval(() => {
//     console.log('After timeOut')
// }, 1000)// 1 сек

// clearInterval(interval)


    // const delay = (callback, wait = 1000) => {
    //     setTimeout(callback, wait);
    // }
    // delay(() => {
    //     console.log('after 2 sec')
    // }, 2000)


    ////////  promise

    const delay = (wait = 1) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
            reject('Что-то пошло не так, почторите попытку')
            // resolve()
            }, wait);
        })
        return promise
    }


    // delay(2500)
    //     .then(() => {
    //         console.log('After 2.5 seconds')
    //     })
    //     .catch(err => console.error('Error', err))
    //     .finally(() => console.log('Finelly'))

    const getData = () => new Promise(resolve => resolve([
            1, 1, 2, 3, 5, 8, 13
        ]))
    getData().then(data => console.log(data))

    async function asyncExample() {
        try {
            await delay(3000)
        const data = await getData()
        console.log('Data', data)
        } catch (e) {
            console.log(e)
        } finally {
            console.log('Finally')
        }
    }
asyncExample()