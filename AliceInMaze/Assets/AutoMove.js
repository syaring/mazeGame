﻿#pragma strict

function Start () {

}

function Update() {
		// Move the object to the right relative to the camera 1 unit/second.
		transform.Translate(Time.deltaTime, 0, 0, Camera.main.transform);
	}