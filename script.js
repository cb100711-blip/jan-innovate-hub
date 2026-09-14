/* =====================================
   SEARCH PROBLEMS
===================================== */

function searchProblems() {
    const searchInput = document.getElementById("search");

    if (!searchInput) return;

    const search = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".problem-card");

    cards.forEach(function(card) {
        const text = card.innerText.toLowerCase();

        card.style.display =
            text.includes(search) ? "block" : "none";
    });
}


/* =====================================
   FILTER PROBLEMS
===================================== */

function filterProblems() {

    const categoryElement =
        document.getElementById("filterCategory");

    const impactElement =
        document.getElementById("filterImpact");

    if (!categoryElement || !impactElement) return;

    const category = categoryElement.value;
    const impact = impactElement.value;

    const cards =
        document.querySelectorAll(".problem-card");

    cards.forEach(function(card) {

        const cardCategory =
            card.dataset.category;

        const cardImpact =
            card.dataset.impact;

        const categoryMatch =
            category === "" ||
            cardCategory === category;

        const impactMatch =
            impact === "" ||
            cardImpact === impact;

        if (categoryMatch && impactMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


/* =====================================
   ADMIN BUTTONS
===================================== */

const approveButtons =
    document.querySelectorAll(".approve");

approveButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        alert("Problem approved successfully.");
    });

});


const rejectButtons =
    document.querySelectorAll(".reject");

rejectButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        alert("Problem rejected.");
    });

});


/* =====================================
   LOAD PROBLEMS FROM BACKEND
===================================== */

async function loadProblems() {

    try {

        const response =
            await fetch("http://localhost:5000/api/problems");

        const problems =
            await response.json();

        console.log(
            "Problems from backend:",
            problems
        );

    } catch (error) {

        console.error(
            "Backend connection error:",
            error
        );

    }
}

loadProblems();