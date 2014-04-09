package com.rhomobile.targetapp;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class BroadCastReceiver extends BroadcastReceiver {

	@Override
	public void onReceive(Context context, Intent intent) {
	    
	    Log.i("targetApp", "Broadcast is received: " + intent );
	    
	    Intent reply = new Intent("com.rhomobile.action.BROADCAST");
	    reply.addCategory("com.rhomobile.intentexample");
	    reply.putExtra("message", intent.getStringExtra("message"));
	    
 	    context.sendBroadcast(reply);
	}
}
