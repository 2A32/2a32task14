input.onButtonPressed(Button.A, function () {
	
})
datalogger.deleteLog(datalogger.DeleteType.Full)
basic.forever(function () {
	
})
loops.everyInterval(3000, function () {
    datalogger.log(
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("light", input.lightLevel())
    )
})
