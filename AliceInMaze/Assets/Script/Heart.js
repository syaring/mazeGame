#pragma strict

var GetLife : PlayerStatus;
var heartParticlePrefab : GameObject;

function Start () {
}

function Update () {
}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "Player"){	
		Instantiate(heartParticlePrefab, transform.position, transform.rotation);
		Destroy(gameObject);
		if(GetLife.life == 100){
			GetLife.life = 100;
		}
		else
			GetLife.life += 10;
	}	
}