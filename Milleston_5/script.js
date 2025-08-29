//wishlist count 

let count = 0;
const wishlist = document.querySelectorAll(".wishlist");
const wishlisCount = document.querySelector(".wishlistCount");
wishlist.forEach(function (item) {
    item.addEventListener("click", function () {
        // console.log("wishlist was clicked")
        count++;
        wishlisCount.textContent = count;
        // console.log("count", count)
    });
});

//copy count

let value = 0;
let copyButtons = document.querySelectorAll(".copy");
let copyCountEl = document.querySelector(".copyCount");

copyButtons.forEach((copyBtn) => {
    copyBtn.addEventListener("click", () => {
        const card1 = copyBtn.closest(".title");
        const serviceNumber1 = card1.querySelector(".service-number").textContent;

        navigator.clipboard.writeText(serviceNumber1).then(() => {
            alert(`Number Copied: ${serviceNumber1} !`);
            value++;
            copyCountEl.textContent = value;
        }).catch((err) => {
            console.error("Copy failed: ", err);
        });
    });
});


// initial value of coin
let coins = 100;

// DOM elements
const coinCount = document.querySelector(".coinCount");
const callButtons = document.querySelectorAll(".call");
const callHistoryList = document.querySelector(".callHistroy");

// Call Button Event
callButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        const card = btn.closest(".title"); // closest card
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;

        // Coin check
        if (coins < 20) {
            alert("❌ Not enough coins! You need at least 20 coins to make a call.");
            return;
        }

        // Alert call
        alert(`📞 Calling ${serviceName} ${serviceNumber}......`);

        // for subtract coin
        coins -= 20;
        coinCount.textContent = coins;

        //for date
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const min = now.getMinutes().toString().padStart(2, "0");
        const sec = now.getSeconds().toString().padStart(2, "0");
        const AmPm = now.getHours() >= 12 ? "PM" : "AM";
        const timeString = `${hours}:${min}:${sec} ${AmPm}`;

        // for add list to Call History
        const li = document.createElement("li");
        li.className = "bg-gray-100 rounded-md p-2";
        li.innerHTML = `
        <div class="flex justify-between">
        <div>
        <P class="text-sm">${serviceName}</P>
        <p class="text-sm text-gray-500">${serviceNumber}</p>
        </div>
        <div class="flex items-center">
        <span class="text-sm text-gray-500 flex items-center">${timeString}</span>
        </div>

        </div>
        
    `;

        callHistoryList.appendChild(li);
    });
});

// for clear button

const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
    callHistoryList.innerHTML = "";
});