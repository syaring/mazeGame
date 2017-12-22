#pragma strict

public var RockKey : boolean = false;
public var MushKey : boolean = false;
public var CapKey : boolean = false;
public var CardKey : boolean = false;

public var GUIKey1 : boolean = false;
public var GUIKey2 : boolean = false;
public var GUIKey3 : boolean = false;
public var GUIKey4 : boolean = false;


var keyParticlePrefab : GameObject;

function Start () {

}

function Update () {

}

function GetRockKey(){
	Instantiate(keyParticlePrefab, transform.position, transform.rotation);
	RockKey = true;	
	Destroy(gameObject);	
	GUIKey1 = true;	
}

function GetMushKey(){
	Instantiate(keyParticlePrefab, transform.position, transform.rotation);
	MushKey = true;
	Destroy(gameObject);
	GUIKey2 = true;
}

function GetCapKey(){
	Instantiate(keyParticlePrefab, transform.position, transform.rotation);
	CapKey = true;
	Destroy(gameObject);
	GUIKey3 = true;
}

function GetCardKey(){
	Instantiate(keyParticlePrefab, transform.position, transform.rotation);
	CardKey = true;
	Destroy(gameObject);
	GUIKey4 = true;
}