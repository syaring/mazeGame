#pragma strict

function OnTriggerEnter(other: Collider) {
    other.gameObject.SendMessage("ApplyDamage", 10);
}

function Start () {

}

function Update () {

}