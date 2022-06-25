export const filetoBuffer = function (file) {
    return new Promise(resolve => {
        let fileReader = new FileReader();
        fileReader.onload = function () {
            resolve(this.result)
        }
        fileReader.readAsArrayBuffer(file);
    })
}