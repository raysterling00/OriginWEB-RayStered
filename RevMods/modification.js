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

document.querySelector(".clearToDefaultSettingsButton").addEventListener("click", () => {
	showPopupInput({
		message: 'Type "YES" to confirm',
		placeholder: "",
		defaultText: "",
		maxLength: 3,
		buttonText: "Proceed",
		onSubmit: (resultText) => {
			if (resultText.toUpperCase() === "YES") {
				localStorage.clear()
				location.reload()
			}
		}
	})
})

function applyMonetTheme(baseColor) {
	// Generamos variantes basadas en el color extraído
	// Puedes ajustar los porcentajes según qué tan oscuro o claro quieras el diseño
	const primaryColor = baseColor
	const appBgColor = darkerOrBrighterColor(baseColor, 0.7) // Un tono muy oscuro para el fondo de las apps
	const surfaceColor = darkerOrBrighterColor(baseColor, 0.5) // Un tono intermedio para tarjetas o menús

	// Cambiar las variables CSS globales en el documento
	document.documentElement.style.setProperty("--theme-primary", primaryColor)
	document.documentElement.style.setProperty("--theme-app-bg", appBgColor)
	document.documentElement.style.setProperty("--theme-surface", surfaceColor)

	// Opcional: Calcular si el texto debe ser blanco o negro (Contraste)
	// Por ahora podemos usar colores fijos o variaciones muy claras
	const onSurface = darkerOrBrighterColor(baseColor, 0.1) // Texto claro
	document.documentElement.style.setProperty("--theme-on-surface", onSurface)

	// Guardar la paleta en localStorage para que persista al recargar
	localStorage.setItem("monet-base-color", baseColor)
}
/* 
if (!localStorage.getItem("scaleLockContent-phone")) {
	localStorage.setItem(`scaleLockContent-phone`, "1")
}
if (!localStorage.getItem("scaleLockContent-tablet")) {
	localStorage.setItem(`scaleLockContent-tablet`, "1")
}
if (!localStorage.getItem("scaleLockContent-computer")) {
	localStorage.setItem(`scaleLockContent-computer`, "1")
}
if (!localStorage.getItem("scaleLockContent-fold")) {
	localStorage.setItem(`scaleLockContent-fold`, "1")
}

if (!localStorage.getItem("fontWeightLockClock-phone")) {
	localStorage.setItem(`fontWeightLockClock-phone`, "400")
}
if (!localStorage.getItem("fontWeightLockClock-tablet")) {
	localStorage.setItem(`fontWeightLockClock-tablet`, "400")
}
if (!localStorage.getItem("fontWeightLockClock-computer")) {
	localStorage.setItem(`fontWeightLockClock-computer`, "400")
}
if (!localStorage.getItem("fontWeightLockClock-fold")) {
	localStorage.setItem(`fontWeightLockClock-fold`, "400")
}

if (!localStorage.getItem("opacityLockClock-phone")) {
	localStorage.setItem(`opacityLockClock-phone`, "0")
}
if (!localStorage.getItem("opacityLockClock-tablet")) {
	localStorage.setItem(`opacityLockClock-tablet`, "0")
}
if (!localStorage.getItem("opacityLockClock-computer")) {
	localStorage.setItem(`opacityLockClock-computer`, "0")
}
if (!localStorage.getItem("opacityLockClock-fold")) {
	localStorage.setItem(`opacityLockClock-fold`, "0")
}*/

deviceType = window.location.hash.substring(1) || buildProp["device.type"]
const allColorCircles = document.querySelectorAll("#app_SettingsAppLockEditor .colorCircle")
allColorCircles.forEach((colorCircle) => {
	colorCircle._colorHandler = (e) => {
		const color = e.currentTarget.style.backgroundColor
		document.documentElement.style.setProperty("--bg-colorLockClock", color)
		localStorage.setItem(`colorLockClock-${deviceType}`, color)
		document.querySelectorAll("#app_SettingsAppLockEditor .colorCircle.active").forEach((activeCircle) => {
			activeCircle.classList.remove("active")
		})
		e.currentTarget.classList.add("active")
	}
	colorCircle.addEventListener("click", colorCircle._colorHandler)
})
