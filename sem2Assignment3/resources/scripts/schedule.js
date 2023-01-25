function genTable() {
    var winWidth = 950;
    var winHeight = 900;
    var leftPosition = (screen.width - winWidth) / 2;
    var topPosition = (screen.height - winHeight) / 2;
    var optionString = "width=" + winWidth + ",height=" + winHeight + ",left=" + leftPosition + ",top=" + topPosition;
    var openWin = window.open("././Assignment3.html", "CtrlWindow", optionString);
}