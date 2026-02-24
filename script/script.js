let totalJobs = 8;
let interviewCount = 0;
let rejectedCount = 0;
let currentFilter = 'all';

function clickButton(button) {
    const card = button.closest('.job-card');
    const prevStatus = card.getAttribute('data-status');

    if (prevStatus === 'rejected') {
        rejectedCount--;
        document.querySelector('.Rejected-count').innerText = rejectedCount;
    }

    if (prevStatus !== 'interview') {
        interviewCount++;
        document.querySelector('.interview-count').innerText = interviewCount;
    }

    card.setAttribute('data-status', 'interview');

    card.querySelector('.text-chang').innerHTML = `
        <div class="max-w-[200px] w-full text-center bg-green-400 text-black py-1.5 px-5 rounded-md">
            Applied
        </div>
    `;

    if (currentFilter === 'rejected') {
        card.style.display = 'none';
        checkEmpty();
    }
}

function clickRejectButton(button) {
    const card = button.closest('.job-card');
    const prevStatus = card.getAttribute('data-status');

    if (prevStatus === 'interview') {
        interviewCount--;
        document.querySelector('.interview-count').innerText = interviewCount;
    }

    if (prevStatus !== 'rejected') {
        rejectedCount++;
        document.querySelector('.Rejected-count').innerText = rejectedCount;
    }

    card.setAttribute('data-status', 'rejected');

    card.querySelector('.text-chang').innerHTML = `
        <div class="max-w-[200px] w-full text-center bg-red-400 text-white py-1.5 px-5 rounded-md">
            Rejected
        </div>
    `;

    if (currentFilter === 'interview') {
        card.style.display = 'none';
        checkEmpty();
    }
}

function checkEmpty() {
    const defaultDiv = document.getElementById('default-id');
    const allCards = document.querySelectorAll('.job-card');
    let anyVisible = false;

    allCards.forEach(card => {
        if (card.style.display !== 'none') {
            anyVisible = true;
        }
    });

    defaultDiv.style.display = anyVisible ? 'none' : 'block';
}

function showCards() {
    currentFilter = 'all';

    document.querySelectorAll('.job-card').forEach(card => {
        card.style.display = 'block';
    });

    document.getElementById('Interview-Filter-Btn').classList.add('btn-soft');
    document.getElementById('Rejected-Filter-Btn').classList.add('btn-soft');
    document.getElementById('all-button').classList.remove('btn-soft');
    document.getElementById('default-id').style.display = 'none';

    document.querySelector('.job-status').innerText = `${totalJobs}`;
}

document.getElementById('Interview-Filter-Btn').addEventListener('click', function () {
    currentFilter = 'interview';

    const allJob = document.querySelectorAll('.job-card');
    let hasInterviewCard = false;

    document.getElementById('all-button').classList.add('btn-soft');
    document.getElementById('Interview-Filter-Btn').classList.remove('btn-soft');
    document.getElementById('Rejected-Filter-Btn').classList.add('btn-soft');

    document.querySelector('.job-status').innerText = `${interviewCount}/${totalJobs}`;

    allJob.forEach(job => {
        if (job.getAttribute('data-status') === 'interview') {
            job.style.display = 'block';
            hasInterviewCard = true;
        } else {
            job.style.display = 'none';
        }
    });

    document.getElementById('default-id').style.display = hasInterviewCard ? 'none' : 'block';
});

document.getElementById('Rejected-Filter-Btn').addEventListener('click', function () {
    currentFilter = 'rejected';

    const allJob = document.querySelectorAll('.job-card');
    let hasRejectedCard = false;

    document.getElementById('all-button').classList.add('btn-soft');
    document.getElementById('Interview-Filter-Btn').classList.add('btn-soft');
    document.getElementById('Rejected-Filter-Btn').classList.remove('btn-soft');

    document.querySelector('.job-status').innerText = `${rejectedCount}/${totalJobs}`;

    allJob.forEach(job => {
        if (job.getAttribute('data-status') === 'rejected') {
            job.style.display = 'block';
            hasRejectedCard = true;
        } else {
            job.style.display = 'none';
        }
    });

    document.getElementById('default-id').style.display = hasRejectedCard ? 'none' : 'block';
});

function deleteSection(element) {
    const confirmDelete = confirm('Are you sure you want to delete this job?');
    if (!confirmDelete) return;

    const card = element.closest('.job-card');
    const status = card.getAttribute('data-status');

    if (status === 'interview') {
        interviewCount--;
        document.querySelector('.interview-count').innerText = interviewCount;
    } else if (status === 'rejected') {
        rejectedCount--;
        document.querySelector('.Rejected-count').innerText = rejectedCount;
    }

    card.remove();
    totalJobs--;

    document.querySelector('.total-job-count').innerText = totalJobs;

    if (currentFilter === 'all') {
        document.querySelector('.job-status').innerText = `${totalJobs}`;
    } else if (currentFilter === 'interview') {
        document.querySelector('.job-status').innerText = `${interviewCount}/${totalJobs}`;
    } else {
        document.querySelector('.job-status').innerText = `${rejectedCount}/${totalJobs}`;
    }

    checkEmpty();
}































// let totalJobs = 8;
// let interviewCount = 0;
// let rejectedCount = 0;

// function updateCounters() {
//     document.querySelector('.interview-count').innerText = interviewCount;
//     document.querySelector('.Rejected-count').innerText = rejectedCount;
   
// }

// function clickButton(button) {
//     const card = button.closest('.job-card');
//     const currentStatus = card.getAttribute('data-status');

   
//     if (currentStatus === 'Rejected') {
//         rejectedCount--;
//     }

    
//     if (currentStatus !== 'interview') {
//         interviewCount++;
//         card.setAttribute('data-status', 'interview');
        
//         const textChangeDiv = card.querySelector(".text-chang");
//         textChangeDiv.innerHTML = `
//         <div class="max-w-[100px] bg-green-400 text-black py-1.5 px-5 rounded-md">
//         Applied
//         </div>
//         `;
//         textChangeDiv.className = "text-chang"; 
//     }
    
//     updateCounters();
// }

// function clickRejectButton(button) {
//     const card = button.closest('.job-card');
//     const currentStatus = card.getAttribute('data-status');

    
//     if (currentStatus === 'interview') {
//         interviewCount--;
//     }

    
//     if (currentStatus !== 'Rejected') {
//         rejectedCount++;
//         card.setAttribute('data-status', 'Rejected');

//         const textChangeDiv = card.querySelector(".text-chang");
//         textChangeDiv.innerHTML = `
//         <div class="max-w-[100px] bg-red-400 text-white py-1.5 px-5 rounded-md">
//         Rejected
//         </div>
//         `;
//         textChangeDiv.className = "text-chang";
//     }

//     updateCounters();
// }


// function filterJobs(status) {
//     const allJob = document.querySelectorAll('.job-card');
//     const defaultDiv = document.getElementById("default-id");
//     let hasCard = false;

   
//     document.getElementById("all-button").classList.add("btn-soft");
//     document.getElementById("Interview-Filter-Btn").classList.add("btn-soft");
//     document.getElementById("Rejected-Filter-Btn").classList.add("btn-soft");

   
//     if(status === 'interview') document.getElementById("Interview-Filter-Btn").classList.remove("btn-soft");
//     if(status === 'Rejected') document.getElementById("Rejected-Filter-Btn").classList.remove("btn-soft");

//     allJob.forEach(job => {
//         if (job.getAttribute('data-status') === status) {
//             job.style.display = "block";
//             hasCard = true;
//         } else {
//             job.style.display = "none";
//         }
//     });

//     defaultDiv.style.display = hasCard ? "none" : "block";
// }


// document.getElementById("Interview-Filter-Btn").addEventListener("click", () => filterJobs('interview'));
// document.getElementById("Rejected-Filter-Btn").addEventListener("click", () => filterJobs('Rejected'));

// function showCards() {
//     const allJob = document.querySelectorAll('.job-card');
//     allJob.forEach(job => job.style.display = 'block');
    
//     document.getElementById("all-button").classList.remove("btn-soft");
//     document.getElementById("Interview-Filter-Btn").classList.add("btn-soft");
//     document.getElementById("Rejected-Filter-Btn").classList.add("btn-soft");
    
//     document.getElementById('default-id').style.display = "none";
// }