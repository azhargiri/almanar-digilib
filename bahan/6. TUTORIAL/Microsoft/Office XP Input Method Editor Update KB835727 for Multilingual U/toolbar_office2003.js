var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Frame support, set Frame_Supported = true/false.
	Frame_Supported = false;

	// display MSCOM Banner
	setMSBanner("mslogo.gif","/isapi/gomscom.asp?target=/","Microsoft.com home") ;
	
	// Customize default ICP menu color - bgColor, fontColor, mouseoverColor
	setDefaultICPMenuColor("#FFB427", "#000000", "red");
	
	// Customize toolbar background color
	setToolbarBGColor("#FFFFFF");

	// display ICP Banner
	setICPBanner("/products/shared/images/office/bnr_office2003_F.gif","/office/","Microsoft(R) Office") ;

	
	//***** Add ICP menus *****
	//Home
	addICPMenu("HomeMenu", "Office Home", "","http://office.microsoft.com/home/default.aspx");
	
	//FAQ
	addICPMenu("FAQMenu", "FAQ", "","/office/faq.mspx");

	//Site Map
	addICPMenu("SiteMapMenu", "Site Map", "","/office/sitemap.mspx");

	
	//Site Index
	//addICPMenu("SiteIndexMenu", "Site Index", "","");

	//Office Worldwide
	addICPMenu("WorldWideMenu", "Office Worldwide", "","/office/worldwide.mspx");

	//Footer Items
	//addICPFooterMenu("Contact Us", "http://register.microsoft.com/contactus30/contactus.asp?domain=office");	
	//addICPFooterMenu("E-Mail This Page", "javascript:New_Window();");
	//addICPFooterMenu("Free NewsLetter", "/office/using/newsletter.asp");
}
