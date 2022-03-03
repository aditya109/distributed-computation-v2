const fileUploadButtonClickHandler = (id) => {
    let fileUploadInput = document.getElementById(id)
    let fileForMatrixA = fileUploadInput.files[0]
    let fileForMatrixB = fileUploadInput.files[1]
    let payload = {
        "fileA": fileForMatrixA,
        "fileB": fileForMatrixB
    }

    fetch("/upload", {
        method: 'POST',
        body: payload
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            // alert the user
        }
    }).catch((error) => {
        console.log(error)
    }) 
}


