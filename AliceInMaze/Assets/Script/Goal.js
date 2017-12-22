#pragma strict

private var ballCount : int;
private var counter : int;
private var cleared : boolean;
var labelStyle : GUIStyle;

function Start () {
	cleared = false;
	Debug.Log("Strat!");

}

function Update () {

}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "Player")
	{
		cleared = true;
		Debug.Log("Escape");
		yield WaitForSeconds(2.0);
		Application.LoadLevel("Title");
	}
}


function OnGUI()
{
	if(cleared == true)
	{
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		GUI.Label(Rect(sw/6, sh/3, sw*2/3, sh/3),"ESCAPED!");
	}
}