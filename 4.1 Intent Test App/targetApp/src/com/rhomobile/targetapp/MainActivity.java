package com.rhomobile.targetapp;

import java.util.Timer;
import java.util.TimerTask;

import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        Button btnResult = (Button) findViewById(R.id.btnResult);
        btnResult.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                Log.i("targetApp", "Set result: " + getIntent());
                setResult(RESULT_OK, getIntent());
                finish();
            }
        });
        
        Button btnBroadcast = (Button) findViewById(R.id.btnBroadcast);
        btnBroadcast.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                Log.i("targetApp", "Broadcast: " + getIntent());
                
                Intent intent = new Intent("com.rhomobile.action.BROADCAST");
                intent.addCategory("com.rhomobile.intentexample");
                intent.putExtra("message", "Broadcast message!");
                sendBroadcast(intent);
                
            }
        });

        Button btnStart = (Button) findViewById(R.id.btnStart);
        btnStart.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Intent.ACTION_MAIN);
                intent.setClassName("com.rhomobile.intentexample", "com.rhomobile.rhodes.RhodesActivity");
                intent.putExtra("message", "Message for RhodesActivity!");
                startActivity(intent);
            }
        });
        //        Timer t = new Timer();
//        t.schedule(new TimerTask() {
//        	public void run() {
//        		Log.i("targetApp", "Set result: " + getIntent());
//                setResult(RESULT_OK, getIntent());
//                finish();
//        	}
//        }, 5000);
        
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
