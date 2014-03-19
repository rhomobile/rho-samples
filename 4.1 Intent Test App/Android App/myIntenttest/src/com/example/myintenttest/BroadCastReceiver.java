package com.example.myintenttest;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

public class BroadCastReceiver extends BroadcastReceiver {

	@Override
	public void onReceive(Context context, Intent intent) {
	    
	    Log.i("targetApp", "Broadcast is received: " + intent );
	    
		String toastStr = intent.getStringExtra("data");
		if (toastStr != null) {
		    Toast toast = Toast.makeText(context, toastStr + " - Toast from Target Application", Toast.LENGTH_LONG);
		    toast.show();
		}
		
		
		
	}
}
