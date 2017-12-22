#pragma strict

var walkSpeed : float = 3.0;
var gravity : float = 20.0;
private var velocity : Vector3;

function Start () {
	GetComponent.<Animation>()["Take 001"].speed = 2.0;

}

function Update () {
GetComponent.<Animation>().CrossFade("Take 001", 0.1);

}

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "RockKey"){
		other.gameObject.SendMessage("GetRockKey");
	}
	else if(other.gameObject.tag == "MushKey"){
		other.gameObject.SendMessage("GetMushKey");
	}
	else if(other.gameObject.tag == "CapKey"){
		other.gameObject.SendMessage("GetCapKey");
	}
	else if(other.gameObject.tag == "CardKey"){
		other.gameObject.SendMessage("GetCapKey");
	}
	
	
	if(other.gameObject.tag == "Door"){
		other.gameObject.SendMessage("OpenDoor");
	}
}