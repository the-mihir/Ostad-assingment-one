function checkAge() {
    // Get the user input value
    let userInput = document.getElementById("UserInput").value;
    const modalInstance = new bootstrap.Modal(document.getElementById("myModal"));


    // Check if the input is blank
    if (!userInput.trim()) {
        const modalBody = document.getElementById("modalBody");
        modalBody.innerHTML = `
        <div class="card" style = "width: 100%;" >
        <img src="https://www.shutterstock.com/shutterstock/photos/2232864661/display_1500/stock-vector-oops-speech-bubble-ops-text-hand-drawn-quote-oops-icon-lettering-doodle-phrase-vector-2232864661.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title text-center">opps! Please enter a valid age</h2>
               
        `;
        modalInstance.show();
        return;

    }

    // Convert the input to a floating-point number
    const age = parseFloat(userInput);

    // Check if the age is a valid number
    if (isNaN(age)) {
        const modalBody = document.getElementById("modalBody");
        modalBody.innerHTML = `
        <div class="card" style = "width: 100%;" >
        <img src="https://www.shutterstock.com/shutterstock/photos/2232864661/display_1500/stock-vector-oops-speech-bubble-ops-text-hand-drawn-quote-oops-icon-lettering-doodle-phrase-vector-2232864661.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title text-center">opps! Please enter a valid age</h2>
                
        `;
        modalInstance.show();
        return;
    }

    // Check if the age is 18 or more
    if (age >= 18) {

        const modalBody = document.getElementById("modalBody");
        modalBody.innerHTML = `
        <div class="card" style = "width: 100%;" >
        <img src="./imgs/yaoungman.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">🎉🎉🎉 Yahooo!! you are adult Let's Fun</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the
                    bulk of the card's content.</p>
        `;
        modalInstance.show();


    } else {
        const modalBody = document.getElementById("modalBody");
        modalBody.innerHTML = `
        <div class="card" style = "width: 100%;" >
        <img src="./imgs//child imge.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">👶🏼👶🏼 You are still Kid </h5>
                <p class="card-text">Some quick example text to build on the card title and make up the
                    bulk of the card's content.</p>
        `;
        modalInstance.show();
    }

    // Clear the input field
    document.getElementById("UserInput").value = "";
}