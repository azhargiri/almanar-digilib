
var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	Frame_Supported = false;
	// display MSCOM Banner
	setMSBanner("mslogo6487DC.gif","/isapi/gomscom.asp?target=/","Microsoft.com home") ;

	// Customize default ICP menu color - bgColor, fontColor, mouseoverColor
	setDefaultICPMenuColor("#0066CC", "#FFFFFF", "#000000");

	// Customize toolbar background color
	setToolbarBGColor("#ffffff");
	
	// display ICP Banner
	setICPBanner("/products/shared/images/bnrWindowsFam.gif","/windows/default.asp","Microsoft(R) Windows(R) Family") ;
	setBannerColor("#6487dc", "#0099FF", "White", "#cebef7");

	//Home
	//addICPMenu("HomeMenu", "Microsoft Windows Family Home", "","/windows/default.asp");
}




