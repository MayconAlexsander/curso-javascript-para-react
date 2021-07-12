import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"
import LabelPlayer from "./src/components/LabelPlayer"
import CardGame from "./src/components/CardGame"

const $root = document.querySelector("#root")
const $htmlLabelPlayer = LabelPlayer()
const $htmlCardGame = CardGame()

// Header game
$root.insertAdjacentHTML("beforebegin", $htmlLabelPlayer)

// Cards
$root.insertAdjacentHTML("afterbegin", $htmlCardGame + $htmlCardGame)
$root.insertAdjacentHTML("afterend", $htmlCardGame + $htmlCardGame)
$root.insertAdjacentHTML("beforebegin", $htmlCardGame + $htmlCardGame)