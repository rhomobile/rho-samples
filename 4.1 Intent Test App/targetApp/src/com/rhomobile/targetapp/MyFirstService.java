package com.rhomobile.targetapp;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;
import android.widget.Toast;

public class MyFirstService extends Service {

	@Override
	public IBinder onBind(Intent intent) {
		return null;
	}

	@Override
	public void onCreate() {
		Log.d("IntetService"," OnCreate'd");
		Toast toast = Toast.makeText(getBaseContext(), "Service OnCreate triggerred", Toast.LENGTH_SHORT);
		toast.show();
		super.onCreate();
	}
	
	@Override
	public int onStartCommand(Intent intent, int flags, int startId) {
		Log.d("Test","on start");
		Toast.makeText(getBaseContext(),"Service Started !",Toast.LENGTH_SHORT).show();
		return START_STICKY;
	}

	@Override
	public void onDestroy() {
		Log.d("IntetService"," OnDestroy'd");
		Toast toast = Toast.makeText(getBaseContext(), "Service destroyed", Toast.LENGTH_SHORT);
		toast.show();
		super.onDestroy();
	}

}
