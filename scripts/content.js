console.log("Hello Friend!")
const header_ul = document.querySelector("ul.global-nav__primary-items");
const demo_ext = document.createElement("li");
const a_demo_ext = document.createElement("a");

demo_ext.classList.add('global-nav__primary-items');

a_demo_ext.classList.add('global-nav__primary-link--active', 'global-nav__primary-link')
a_demo_ext.setAttribute('href', 'https://github.com/karan51ngh')
a_demo_ext.innerHTML = "test"

demo_ext.appendChild(a_demo_ext);
header_ul.appendChild(demo_ext);

const feed = document.querySelector('[aria-label="Main Feed"]');
console.log("feed")
console.log(feed)
// eed-shared-update-v2__control-menu-container -> every post has this class.

console.log("MESSAGE_LOG::: FROM: 'content' TO: 'service-worker' MSG: 'hello-friend'")
chrome.runtime.sendMessage('hello-friend', (response) => {
    console.log(`MESSAGE_LOG::: FROM: 'service-worker' TO: 'content' MSG: ${response}`)
});

// detect scroll
// document.addEventListener("scroll", () => {
//     console.log("Browser Scroll!.")
// });


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("special case")
    console.log(request)
    if (request.message === "get_api_call_detected") {
        console.log("API Call Detected in Content Script:", request.url);

        // Display a notification on the webpage
        let alertBox = document.createElement("div");
        alertBox.innerText = "GET API Call Detected: " + request.url;
        alertBox.style.cssText =
            "position:fixed; top:10px; left:10px; background:red; color:white; padding:5px; z-index:1000;";
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 3000); // Remove notification after 3 sec
    }
});