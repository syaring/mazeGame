#pragma strict

var enemyParticlePrefab : GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision){
	if(collisionInfo.gameObject.tag == "Enemy")
	{
		Instantiate(enemyParticlePrefab, transform.position, transform.rotation);
		Destroy(collisionInfo.gameObject);
	}
	Destroy(gameObject);
}

