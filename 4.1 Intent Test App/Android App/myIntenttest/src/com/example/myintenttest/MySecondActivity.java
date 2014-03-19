package com.example.myintenttest;

import android.app.Activity;
import android.net.Uri;
import android.os.Bundle;
import android.widget.TextView;

public class MySecondActivity  extends Activity {

	 @Override
	   public void onCreate(Bundle savedInstanceState) {
	      super.onCreate(savedInstanceState);
	      setContentView(R.layout.intent_view);

	      String output = null;
	      TextView dataIntent = (TextView) findViewById(R.id.output_intent);
	    
	      // take the data and the extras of the intent
	      Bundle extras = getIntent().getExtras();
	      
	      // if there are extras, add them to the output string
	      if(extras != null){
	    	  output = extras.getString("data");
	      }
	      dataIntent.setText(output);
	   }
}
