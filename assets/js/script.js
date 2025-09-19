import { betterFetch} from "./api/fetch.js"
import {renderBirdFacts} from "./birdfacts/renderer.js"

function init(){
    betterFetch().then( r => renderBirdFacts(r));

}

init()