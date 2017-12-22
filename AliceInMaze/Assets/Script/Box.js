#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Player"){
		var respawn : GameObject = GameObject.FindWithTag("Respawn");
		other.gameObject.transform.position = respawn.transform.position;
	}
}