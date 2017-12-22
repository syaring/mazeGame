#pragma strict

var GetKey1 : Key;
var GetKey2 : Key;
var GetKey3 : Key;
var GetKey4 : Key;

var labelStyle : GUIStyle;
private var sw : int = Screen.width;
private var sh : int = Screen.height;

function Start () {}

function Update () {}

function OnGUI(){
	if(GetKey1.GUIKey1 == true){		
		GUI.Label(Rect(sw/6, sh/4, sw*2/3, sh/3), "You Got A Rock Key", labelStyle);	
	}	
	else if(GetKey2.GUIKey2 == true){
		GUI.Label(Rect(sw/6, sh/4, sw*2/3, sh/3), "You Got A Mush Key", labelStyle);	
	}
	else if(GetKey3.GUIKey3 == true){
		GUI.Label(Rect(sw/6, sh/4, sw*2/3, sh/3), "You Got A Capital Key", labelStyle);	
	}
	else if(GetKey4.GUIKey4 == true){
		GUI.Label(Rect(sw/6, sh/4, sw*2/3, sh/3), "You Got A Card Key", labelStyle);	
	}
	GUIDelete();
}

function GUIDelete(){	
		if(GetKey1.GUIKey1 == true){
			yield WaitForSeconds(5.0);	
			GetKey1.GUIKey1 = false;		
		}
		else if(GetKey2.GUIKey2 == true){
			yield WaitForSeconds(5.0);	
			GetKey2.GUIKey2 = false;		
		}
		else if(GetKey3.GUIKey3 == true){
			yield WaitForSeconds(5.0);	
			GetKey3.GUIKey3 = false;
		}
		else if(GetKey4.GUIKey4 == true){
			yield WaitForSeconds(5.0);	
			GetKey4.GUIKey4 = false;
		}
}