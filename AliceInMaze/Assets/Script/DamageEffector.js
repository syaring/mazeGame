#pragma strict
private var effectFlag : boolean;
private var originalColor : Color;

function Start () {
	originalColor = GetComponent.<Renderer>().material.color;
}

function Update () {
	if(effectFlag){
		GetComponent.<Renderer>().material.color = Color.red * Mathf.Abs(Mathf.Sin(40.0 * Time.time));
	}
}

function ApplyDamage(amount : int){
	effectFlag = true;
	yield WaitForSeconds(0.3);
	effectFlag = false;
	GetComponent.<Renderer>().material.color = originalColor;
}