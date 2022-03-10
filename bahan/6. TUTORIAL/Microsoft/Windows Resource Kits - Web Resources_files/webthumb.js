//function NoError(message) { if(-1 != message.indexOf("denied") || -1 != message.indexOf("topGloss") || -1 != message.indexOf("Object required")) return true; }
//window.onerror = NoError;

var popupOpen = false;
var posX, posY;
var activeSpan, activeWindow, activeImg = null;
var htmlObjs = new Array();
var objCount = 0;
var closer = null;

var framesTop = true;

var path, lang, productPath, framesPath = "";

window.onbeforeprint = expand_img;
window.onafterprint = reduce_img;

function expand_img(){
	if(bc.ie3 || bc.nav3 || bc.nav4 || bc.nav6) return;
	var docAll = document.all.length
	for(var i = 0; i < docAll; i++){
		if (document.all[i].className == "thumbnail"){
			document.all[i].style.height = "auto";
			}
		}
	}
	
function reduce_img(){
	if(bc.ie3 || bc.nav3 || bc.nav4 || bc.nav6) return;
	var docAll = document.all.length
	for(var i = 0; i < docAll; i++){
		if (document.all[i].className == "thumbnail"){
			document.all[i].style.height = 70;
			}
		}
	}
	


function getBrowserInfo(){
	var UA = window.navigator.userAgent;
	if(UA.indexOf("MSIE") != -1){
		this.ie = true;
		var v = UA.charAt(UA.indexOf("MSIE") + 5);
		if(v == 2 ) this.ie2 = true;
		else if(v == 3 ) this.ie3 = true;
		else if(v == 4 ) this.ie4 = true;
		else if(v == 5 ) this.ie5 = true;
		else if(v == 6 ) this.ie6 = true;
		else if(v > 6 ) this.ie6 = true;
		if(this.ie4 || this.ie5 || this.ie6) this.UL = true;
	}else if(UA.indexOf("Mozilla") != -1 && UA.indexOf("compatible") == -1){
		this.nav = true;
		var v = UA.charAt(UA.indexOf("Mozilla") + 8);
		if(v == 2 ) this.nav2 = true;
		else if(v == 3 ) this.nav3 = true;
		else if(v == 4 ) this.nav4 = true;
		else if(v > 4 ) this.nav6 = true;
		if (this.nav6) this.UL = true;
		}
	if(UA.indexOf("Windows 95") > 0 || UA.indexOf("Win95") != -1 || UA.indexOf("Win98") != -1 || UA.indexOf("Windows 98") != -1 || UA.indexOf("Windows NT") != -1) this.win32 = true;
	else if(UA.indexOf("Windows 3.1") != -1 || UA.indexOf("Win16") != -1) this.win16 = true;
	else if(UA.indexOf("Mac") != -1) this.anymac = true;
	else if(UA.indexOf("SunOS") != -1 || UA.indexOf("HP-UX") != -1 || UA.indexOf("X11") != -1) this.unix = true;
	else if(UA.indexOf("Windows CE") != -1) this.wince = true;
}

var bc = new getBrowserInfo();

function closePopup(){
	if(bc.ie3 || bc.nav3 || bc.nav4 || bc.nav6 ||topGloss) return;
	if(typeof(wPopup) == "object" && wPopup.style.display == ""){
		wPopup.style.display = "none";
		document.selection.empty();
		wPopup.innerText = "";
	}
}

function shrinkImg(){
	if (bc.nav6) {
		nav6_workaround();
		}
	if(bc.ie3 || bc.nav3 || bc.nav4 || bc.nav6) return;
	var docAll = document.all
	var img = docAll[docAll.length - 2];
	htmlObjs[objCount] = img;
	objCount++;
}

var L_ClickToEnlargeFigure_Text = "Enlarge Image"
var L_EnlargeFigure_Text = "Enlarge Image"
var L_HideEnlargedFigure_Text = "Close Image"

function adjHTML(){
	var docAll = document.all.length
	for(var i = 0; i < docAll; i++){
		if (document.all[i].className == "thumbnail"){
			document.all[i].style.borderWidth = 1;
			}
		}
	for(var i = 0; i < htmlObjs.length; i++){
		var origNum = htmlObjs[i].sourceIndex;
		var obj = htmlObjs[i];
		if(obj.tagName == "SPAN"){
			var pattern = new RegExp("\'","g");
			obj.title = obj.title.replace(pattern,"&#39;");
			obj.outerHTML = "<A HREF=javascript:void(0);if(window.showPopup){showPopup(" + i + ",true)}else{document.write('" + escape("Please return to your original browser window and click the link to display its contents.") + "')}; onMouseOver='window.status=\"\";return true;' puText='" + obj.title + "' CLASS='wPopupWeb'><NOBR>" + obj.innerHTML + "</NOBR></A>";
			htmlObjs[i] = document.all[origNum];
		}else if(obj.tagName == "IMG"){
			var title = obj.title;
			obj.title += " (" + L_ClickToEnlargeFigure_Text + ")";
			obj.outerHTML = "<A HREF=javascript:void(0);if(window.expand){expand(" + i + ")}else{document.write('" + escape("Please return to your original browser window and click the link to display its contents.") + "')}; onMouseOver='window.status=\"\";return true;'>" + obj.outerHTML + "<P STYLE=color:blue;cursor:hand;width:190;text-decoration:underline >" + L_EnlargeFigure_Text + "</P></A>";
			htmlObjs[i] = document.all[origNum];
			htmlObjs[i].origTitle = title;
			htmlObjs[i].title = title + " (" + L_ClickToEnlargeFigure_Text + ")";
		}else if(obj.tagName == "P") fixWhere(obj);
	}
}

function expand(arrayNum){
	if(bc.ie3 || bc.nav3 || bc.nav4 || bc.nav6) return;

	if("object" == typeof(activeWindow)){
		 if(activeWindow != null) {
			closer = window.setTimeout("closeWindow()", 15);
			return;
		}
	}
	
	var img = htmlObjs[arrayNum].children[0];

	activeImg = img;

	img.className = "thumbnailoff";
	var width = img.width + 17;
	var height = img.height + 35;
	img.className = "thumbnail";

	var dLeft = window.screen.width - width - 20;
	var dTop = window.screenTop;
	var p = document.all[img.sourceIndex + 1];
	var a = htmlObjs[arrayNum];

	p.innerText = L_HideEnlargedFigure_Text;

	if(bc.ie5 || bc.ie6){
		var title = a.origTitle;
		a.title = title + " (" + L_HideEnlargedFigure_Text + ")";
		a.children[0].title = title + " (" + L_HideEnlargedFigure_Text + ")";
		var args = new Array();
		args[0] = closeWindow;
		args[1] = activeImg.parentElement.origTitle;
		args[2] = img.src;
		var props = "dialogWidth:" + width + "px" + ";dialogHeight:" + height +  "px;status:no;help:no;" + "dialogLeft:" + dLeft +";dialogTop:" + dTop + ";title:" + title;
		var oDialog = "/windows2000/techinfo/reskit/inc/imageIE5.htm";
		activeWindow = showModelessDialog(oDialog, args, props);
	}else{
		dLeft = (window.screen.width - .65*window.screen.width);
		var imgWidth = img.width + 330;
		var imgHeight = img.height + 230;
		activeWindow = window.open("/windows2000/techinfo/reskit/inc/imageIE4.asp?img=" + img.src, "webOnlyWindow", "toolbar=no, menubar=no, location=no, directories=no, resizable=yes, left="+dLeft+","+ "top="+dTop+"," + "Height="+imgHeight+"," +"Width="+imgWidth + '"' );
		a.arrayNum = arrayNum;
		a.href = "javascript:closeWindow(this);"
	}
}

function closeWindow()
{
	if("object" == typeof(window)) window.clearTimeout(closer);
	if("object" == typeof(activeWindow)) {
		if(activeWindow != null){
			 activeWindow.close();
			 //activeWindow.close();
			 // alert("read this");
			 }
		}
	activeWindow = null;
	var title = activeImg.parentElement.origTitle + L_ClickToEnlargeFigure_Text;
	activeImg.title = title;
	activeImg.parentElement.title = title;
	if(bc.ie4) activeImg.parentElement.href = "javascript:expand(" + activeImg.parentElement.arrayNum + ")";
	document.all[activeImg.sourceIndex + 1].innerText = L_EnlargeFigure_Text;
}



// CONTROL SYNC ICON VISIBILITY

function window_load(){
	if(bc.ie4 || bc.ie5 || bc.ie6){
		adjHTML();
	}
}

function window_unload(){
	if(bc.nav3 || bc.ie3) return;
	else if(bc.ie4 || bc.ie5 || bc.ie6){
		if(bc.ie5 && activeWindow) closeWindow();
	}
}



if(!bc.anymac){
	if(bc.ie4 || bc.ie5 || bc.ie6){
		window.onload = window_load;
		window.onunload = window_unload;
	}else{
	}
}

function nav6_workaround(){
	var docAll = document.getElementsByTagName('img');
	for (i=0;i<docAll.length;i++){
	if (docAll[i].className == "thumbnail"){
			docAll[i].className = 'thumbnail4nav6';
		}
	}
}
