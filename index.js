function submit() {

    const submitArray = []

    const name = document.getElementById("name").value
    const surname = document.getElementById("surname").value
    const address = document.getElementById("address").value
    const postnummer = document.getElementById("postnummer").value
    const poststed = document.getElementById("poststed").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value

    // ERROR SJEKKING START

    if(name == "" || surname == "" || address == "" || postnummer == "" || poststed == "" || email == "" || phone == "" || password == "") {
        // SKRIV ERROR
        return console.log("empty")
    }

    if(password.length < 10) {
        // SKRIV ERROR
        return alert("Passord er for kort")
      }
    
      var hasUpperCase = /[A-Z]/.test(password)
      var hasLowerCase = /[a-z]/.test(password)
      
      if (!hasUpperCase && hasLowerCase) {
        // ERROR: PASSORDET HAR IKKE BÅDE STOR OG LITEN BOKSTAV
        return alert("Passord mangler liten eller stor bokstav")
      }
    
      var hasNumber = /\d/.test(password)
    
      if (!hasNumber) {
        // ERROR PASSORDET HAR IKKE TALL
        return alert("Passordet har ingen tall")
      }
    
      var hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)
    
      if (!hasSpecialCharacter) {
        // ERROR: PASSORDET HAR IKKE SPESIALTEGN
        return alert("Passord mangler spesialtegn")
      }

      // ERROR SJEKKING END

    submitArray.push(name, surname, address, postnummer, poststed, email, phone, password)

    // SUBMIT ARRAY TO LOCALSTORAGE NAMED "formData" AS JSONIFY

    localStorage.setItem("formData", JSON.stringify(submitArray))
    
    // RUN THROUGH EVERY INPUT TAG AND MAKE IT READ ONLY
    const inputElements = document.querySelectorAll("input")
    inputElements.forEach((input) => {
        input.readOnly = true
    })
    const submitButton = document.getElementById("submitBtn")
    submitButton.style.display = "none"
    const editButton = document.getElementById("editBtn")
    editButton.style.display = "block"

}

function edit() {
    const finishButton = document.getElementById("finishBtn")
    finishButton.style.display = "block"
    const editButton = document.getElementById("editBtn")
    const inputElements = document.querySelectorAll("input")
    editButton.style.display = "none"
    inputElements.forEach((input) => {
        input.readOnly = false
    })

    
    if(password.length < 10) {
        // SKRIV ERROR
        return console.log("for kort")
      }
    
      var hasUpperCase = /[A-Z]/.test(password)
      var hasLowerCase = /[a-z]/.test(password)
      
      if (!hasUpperCase && hasLowerCase) {
        // ERROR: PASSORDET HAR IKKE BÅDE STOR OG LITEN BOKSTAV
        return console.log("mangler liten eller stor bokstav")
      }
    
      var hasNumber = /\d/.test(password)
    
      if (!hasNumber) {
        // ERROR PASSORDET HAR IKKE TALL
        return console.log("ingen tall")
      }
    
      var hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)
    
      if (!hasSpecialCharacter) {
        // ERROR: PASSORDET HAR IKKE SPESIALTEGN
        return console.log("mangel spesialtegn")
      } 


}

function finish() {

    const editArray = []

    const name = document.getElementById("name").value
    const surname = document.getElementById("surname").value
    const address = document.getElementById("address").value
    const postnummer = document.getElementById("postnummer").value
    const poststed = document.getElementById("poststed").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value
    
    editArray.push(name, surname, address, postnummer, poststed, email, phone, password)

    // GET LOCALSTORAGE WITH NAME "formData" AND REPLACE THE CURRENT VALUES WITH "editArray"
    
    localStorage.setItem("formData", JSON.stringify(editArray))
    const inputElements = document.querySelectorAll("input")
    inputElements.forEach((input) => {
        input.readOnly = true
    })
    const finishButton = document.getElementById("finishBtn")
    finishButton.style.display = "none"
    const editButton = document.getElementById("editBtn")
    editButton.style.display = "block"

}


  const formDataString = localStorage.getItem("formData")
  if (formDataString) {
      const formData = JSON.parse(formDataString)
      const inputElements = document.querySelectorAll("input")
      for (let i = 0; i < formData.length; i++) {
          inputElements[i].value = formData[i]
      }
  }
