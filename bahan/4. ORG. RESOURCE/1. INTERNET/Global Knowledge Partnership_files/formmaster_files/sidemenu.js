var remote = null;

function popup_win( loc, wd, hg ) {

	remote = window.open('','TheRemote','width=' + wd + ',height=' + hg + ',resizable=1,scrollbars=1,top=0,left=0');
    if (remote != null) {
            if (remote.opener == null) {
            remote.opener = self;
        }
            remote.location.href = loc;
			remote.focus();
    } else { self.close(); }
}

function mOvr(src)
	{ 
		if (!src.contains(event.fromElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#FFFFFF';
		
			src.style.cursor = 'hand'; src.bgColor = '#005080'; 
		}
	}
function mOut(src) 
	{ 
		if (!src.contains(event.toElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#FFFFFF'; 
			src.style.cursor = 'default'; src.bgColor = '#3C78BE'; 			
		}			
	} 
function mClk(src) 
	{ 
		if(event.srcElement.tagName=='TD')
		{
			src.children.tags('A')[0].click();
		} 
	}


function mOvrSub(src)
	{ 	if (!src.contains(event.fromElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#000000';
			src.style.cursor = 'hand'; src.bgColor = '#FFFAE1'; 
		}
	}
	
	function mOutSub(src) 
	{ 	if (!src.contains(event.toElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#000000';
			src.style.cursor = 'default'; src.bgColor = '#FFFAE1';		   
		}			
	} 
	
	
	
	
function mOvrSub79(src)
	{ if (!src.contains(event.fromElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#000000';
			src.style.cursor = 'hand'; src.bgColor = '#BFCFCF'; 
		}
	}
	
function mOutSub79(src) 
	{  if (!src.contains(event.toElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#000000';
			src.style.cursor = 'default'; src.bgColor = '#BFCFCF';		   
		}			
	}
		
function mOvrSub78(src)
	{ if (!src.contains(event.fromElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#000000';
			src.style.cursor = 'hand'; src.bgColor = '#EFD7D0'; 
		}
	}
	
function mOutSub78(src) 
	{ if (!src.contains(event.toElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#000000';
			src.style.cursor = 'default'; src.bgColor = '#EFD7D0';		   
		}			
	}
	
function mOvrSub80(src)
	{ if (!src.contains(event.fromElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#000000';
			src.style.cursor = 'hand'; src.bgColor = '#E0E0FF'; 
		}
	}
	
function mOutSub80(src) 
	{ if (!src.contains(event.toElement)) 
		{ 
			src.children.tags('A')[0].style.color = '#000000';
			src.style.cursor = 'default'; src.bgColor = '#E0E0FF';		   
		}			
	}
	
	
	
	
	
	
	
	
	

function askquesint (x) {
	var agree=confirm(x);
	if (agree) {
		return true;
	}
	return false;
}


	
	
	
	
	
	
	
	
	
	
	
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_jumpMenuGo(selName,targ,restore){ //v3.0
  var selObj = MM_findObj(selName); if (selObj) MM_jumpMenu(targ,selObj,restore);
}	
