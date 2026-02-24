
let totalJobs = 8;
let interviewCount = 0;

function handleInterviewClick(button) {
    interviewCount++;

    document.querySelector('.interview-count-box').innerText = interviewCount;
    button.classList.add("pointer-events-none");
    button.closest('.job-card').querySelector(".text-chang").innerHTML = `
    <div class="max-w-[100px] bg-green-400 text-black  py-1.5 px-5 rounded-md">
    Applied
    </div>
    `;
    button.closest('.job-card').querySelector(".text-chang").className = " ";

    const totalCount = document.getElementById("total-count");
    const newTotal = Number(totalCount.innerText) - 1;
    totalCount.innerText = newTotal;

    document.querySelector('.job-status').innerText = `${interviewCount}/${totalJobs} jobs`;

    const card = button.closest('.job-card');
    card.setAttribute('data-status', 'interview');

    console.log("Interview added!");
}

document.getElementById("Interview-Filter-Btn").addEventListener("click", function () {
    const allCards = document.querySelectorAll('.job-card');
    const defaultDiv = document.getElementById("default-id");
    let hasInterviewCard = false;
    const removeButtonColor = document.getElementById("all-button");
    removeButtonColor.classList.add("btn-soft")
    const interviewBtn = document.getElementById("Interview-Filter-Btn")
    interviewBtn.classList.remove("btn-soft")

    allCards.forEach(card => {
        if (card.getAttribute('data-status') === 'interview') {
            card.style.display = "block";
            hasInterviewCard = true;
        } else {
            card.style.display = "none";
        }
    });


    if (!hasInterviewCard) {
        defaultDiv.style.display = "block";
    } else {
        defaultDiv.style.display = "none";
    }
});


function showCards() {

    
    
    const allSection = document.querySelectorAll(".job-card");
    allSection.forEach(section=>{
        section.style.display= 'block';
    })
    document.getElementById("Interview-Filter-Btn").classList.add("btn-soft")

    document.getElementById("all-button").classList.remove("btn-soft")
    document.getElementById('default-id').classList.add('hidden');
}





