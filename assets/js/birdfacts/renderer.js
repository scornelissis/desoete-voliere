function renderBirdFacts(birdfacts){
    console.log(birdfacts);
    const $template = document.querySelector("template").content.firstElementChild.cloneNode(true);
    const $birdFacts = document.querySelector("#birdfacts")
    $birdFacts.innerHTML = "";
}

export {renderBirdFacts}