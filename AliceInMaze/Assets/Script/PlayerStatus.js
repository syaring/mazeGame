#pragma strict

public var life: int = 100;
//private var currentHealth : int;
var mySkin0: GUISkin;
var mySkin1: GUISkin;
var mySkin2: GUISkin;


function ApplyDamage(amount: int) {
    life -= amount;


    if (life <= 0) {
        Destroy(transform.parent.gameObject);
        Application.LoadLevel("Ending");
    }
}

function OnGUI() {

    GUI.skin = mySkin2;
    GUI.Box(Rect(10, 10, 100, 20), " ");

    GUI.skin = mySkin1;
    GUI.Box(Rect(10, 10, life, 20), " ");

    GUI.skin = mySkin0;
    GUI.Box(Rect(10, 10, 100, 20), life + "/ 100");

}

function Start() {

}

function Update() {

}
