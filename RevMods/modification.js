//createCustomUnlockAnim(0.45, "custom", "custom", 55, 450)
/*
let revMods = {
	rndm: function (multiplier) {
		return Math.random() * multiplier
	}
}
*/

/*document.getElementById("nav").style.opacity = "0"*/

const batteryLevel = document.querySelector(".batteryNum")
const batteryNum = document.querySelector(".batteryNum")
if ("getBattery" in navigator) {
	navigator.getBattery().then((battery) => {
		updateBatteryStatus = () => {
			const level = Math.floor(battery.level * 100)
			//batteryLevel.style.width = `${level}%`
			batteryNum.textContent = `${level}`
		}
		updateBatteryStatus()

		battery.addEventListener("levelchange", updateBatteryStatus)
		battery.addEventListener("chargingchange", updateBatteryStatus)
	})
} else {
	/*alert(
		"Battery API is not supported in this browser, this may be because you're on Firefox or using an iOS device. Sorry for the inconvinience."
	)
	$("b_sect").style.display = "none"*/
}