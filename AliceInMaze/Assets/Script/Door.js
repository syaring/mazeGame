#pragma strict

var GetKey : Key;

function Start () {

}

function Update () {
	
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Player"){
	
		if(GetKey.RockKey == true){
			gameObject.transform.position.y += 20;
			yield WaitForSeconds(3.0);
			gameObject.transform.position.y -= 20;
		}
		else if(GetKey.MushKey == true){
			gameObject.transform.position.y += 20;
			yield WaitForSeconds(3.0);
			gameObject.transform.position.y -= 20;
		}
		else if(GetKey.CapKey == true){
			gameObject.transform.position.y += 20;
			yield WaitForSeconds(3.0);
			gameObject.transform.position.y -= 20;
		}
		else if(GetKey.CardKey == true){
			gameObject.transform.position.y += 20;
			yield WaitForSeconds(3.0);
			gameObject.transform.position.y -= 20;
		}
	}
}

function OpenDoor(){
	gameObject.transform.position.y += 20;
	yield WaitForSeconds(3.0);
	gameObject.transform.position.y -= 20;
}