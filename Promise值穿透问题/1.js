Promise.resolve(1).then((res) => {
        return 999
}).then(res => console.log(res))