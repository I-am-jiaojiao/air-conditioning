window.onload = function () {
	// 开关
	const switchBtn = document.querySelector('.icon-off')
	// 风盒子
	const wind = document.querySelector('.container__div--wind')
	// 每条风
	const winds = document.querySelectorAll('.container__div--wind span')
	// 启动提示音
	const clickSound = document.querySelector('#clickSound')
	// 启动背景音
	const clickSound1 = document.querySelector('#clickSound1')
	// 切换模式音
	const checkMode = document.querySelector('#checkMode')
	// 调节温度音
	const upOrDown = document.querySelector('#upOrDown')
	// 指示灯
	const pilotLamp = document.querySelector('.pilotLamp__div--on')
	// 模式显示
	const mode = document.querySelector('.mode__div')
	// 温度显示
	const num = document.querySelector('.num')
	// 温度值
	let numVal = document.querySelector('.num').innerHTML * 1
	// 显示/暖
	const hot = document.querySelector('.hot')
	// 显示/冷
	const cold = document.querySelector('.cold')
	// 模式/暖
	const handleHot = document.querySelector('.handleHot')
	// 模式/冷
	const handleCold = document.querySelector('.handleCold')
	// 调节按钮/升温
	const handleUp = document.querySelector('.icon-sort-up')
	// 调节按钮/降温
	const handleDown = document.querySelector('.icon-sort-down-copy')

	// 默认为关闭
	let switchBtnFlag = false
	/**
	 * 开关
	 */
	switchBtn.onclick = () => {
		switchBtnFlag = !switchBtnFlag
		if (switchBtnFlag) {
			switchBtn.style.color = '#90ee90'
			pilotLamp.style.background = 'rgb(22, 255, 22)'
			mode.style.opacity = 1
			wind.style.opacity = 1
			clickSound.play()
			setTimeout(() => {
				clickSound1.play()
			}, 500)
		} else {
			switchBtn.style.color = '#f08080'
			pilotLamp.style.background = 'rgb(255, 22, 22)'
			mode.style.opacity = 0
			wind.style.opacity = 0
			clickSound.play()
			setTimeout(() => {
				clickSound1.pause()
			}, 500)
		}
	}

	/**
	 * 暖
	 */
	handleHot.onclick = () => {
		if (switchBtnFlag) {
			hot.style.display = 'block'
			cold.style.display = 'none'
			num.style.color = '#e6adad'
			winds.forEach((item) => (item.style.background = 'lightcoral'))
			checkMode.play()
		}
	}

	/**
	 * 冷
	 */
	handleCold.onclick = () => {
		if (switchBtnFlag) {
			cold.style.display = 'block'
			hot.style.display = 'none'
			num.style.color = '#add8e6'
			winds.forEach((item) => (item.style.background = 'lightblue'))
			checkMode.play()
		}
	}

	/**
	 * 调节按钮/升温
	 */
	handleUp.onclick = () => {
		if (switchBtnFlag) {
			if (num.innerHTML * 1 < 30) {
				num.innerHTML = numVal += 1
				upOrDown.play()
			}
		}
	}

	/**
	 * 调节按钮/降温
	 */
	handleDown.onclick = () => {
		if (switchBtnFlag) {
			if (num.innerHTML * 1 > 16) {
				num.innerHTML = numVal -= 1
				upOrDown.play()
			}
		}
	}
}