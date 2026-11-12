// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

//Make variables for each element using their ID that will be changed when interacting with forge functions
//Make function getForgeStatus that will update the status message of the forge depending on the heat value
//Make function updateForge that will update the elements class, image, its alt text and the status content depending on forge heat
//Make resetForge funtion that will reset the forge to its original state, resetting any changes made to elements src, alt, class list etc,.
//Make heatForge function that will add the amount to the forge that is inputted.
//Make makeSword function that will deduct 30 heat from the forge to create a sword and add to the sword count.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
const $forge = document.getElementById("forge")
const $message = document.getElementById("action-message")
const $image = document.getElementById("forge-image")
const $status = document.getElementById("forge-status")
// 2. Create the two state variables: heat and swords made.
const $heat = document.getElementById("heat-value")
const $swordCount = document.getElementById("sword-count")

// 3. Write getForgeStatus(heatValue). Return the correct status string.
let heatValue = 20
let swordCount = 0
$heat.textContent = heatValue

function getForgeStatus(heatValue){
    if (heatValue < 30){
        return "Too cold to craft."
    }else if(heatValue < 70){
        return "Ready to forge."
    }else{
        return "Roaring fire. Keep crafting!"
    }
}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge(){
    getForgeStatus()
    $forge.classList.remove("is-cold", "is-ready", "is-roaring")
    $heat.textContent = heatValue

    if (heatValue < 30){
        $forge.classList.add("forge", "is-cold")
        $image.setAttribute("src", "assets/forge-cold.svg")
        $image.setAttribute("alt", "A stone forge with dark coals and no flames.")
        $status.textContent = "Too cold"
    }else if(heatValue < 70){
        $forge.classList.add("is-ready")
        $forge.classList.remove("is-cold")
        $image.setAttribute("src", "assets/forge-ready.svg")
        $image.setAttribute("alt", " A stone forge with a small orange fire.")
        $status.textContent = "Ready to forge."
    }else{
        $forge.classList.add("is-roaring")
        $forge.classList.remove("is-ready")
        $image.setAttribute("src", "assets/forge-roaring.svg")
        $image.setAttribute("alt", "A stone forge with tall bright flames and sparks")
        $status.textContent = "Roaring fire. Keep crafting!"
    }
}
// 5. Write resetForge(). Restore the state, message, and display.
function resetForge(){
    heatValue = 20
    $status.textContent = "Too cold"
    $message.textContent = "Welcome to the forge, Add heat to begin."
    $swordCount.textContent = "0"
    updateForge()
}
// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount){
    heatValue = heatValue + amount
    $message.textContent = "The forge has been heated, its heat level is:"+ heatValue
    if(heatValue > 100){
        heatValue = 100
        $message.textContent = "The forge is already at its maximum heat!"
    }else if(heatValue < 0){
        heatValue = 0
        $message.textContent = "The forge is lacking fuel, please add some heat!"
    }
    updateForge()
}

// 7. Write makeSword(). Handle both success and insufficient heat.

function makeSword(){
// I recognize the sword count does not display correctly, I am really confused on how to change this value, it's an increasing integer that needs to be added to a string 0 :(
    $message.textContent = "A sword has been made!"
    if (heatValue >= 30){
        heatValue = heatValue - 30
        swordCount++
        $swordCount.textContent = swordCount
        
    }else if(heatValue < 30){
        $message.textContent = "The forge needs more fuel to make a sword, please add some heat!"
    }
    updateForge()
}
// 8. Call resetForge() once to start the game.
resetForge()
// Use the tests in ASSIGNMENT.md to check your work.
