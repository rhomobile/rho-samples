package com.example.myintenttest;

import java.io.File;
import java.util.Date;
import java.text.SimpleDateFormat;

import android.support.v7.app.ActionBarActivity;
import android.support.v7.app.ActionBar;
import android.support.v4.app.Fragment;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;
import android.os.Build;
import android.provider.MediaStore;
import android.provider.MediaStore.Files.FileColumns;
import android.widget.Toast;
import android.net.Uri;


public class MainActivity extends ActionBarActivity {
	private static final int CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE = 100;
	private static final int CAPTURE_VIDEO_ACTIVITY_REQUEST_CODE = 200;
	private Uri fileUri;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		/*if (savedInstanceState == null) {
			getSupportFragmentManager().beginTransaction()
					.add(R.id.container, new PlaceholderFragment()).commit();
		}*/
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {

		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}

	
	public void testRhoIntent(View view) {
		Log.d("ItentTest", "Launching Rho Intent");
		Intent intentRho = new Intent("android.intent.action.VIEW");
		intentRho.addCategory("android.intent.category.DEFAULT");
		intentRho.addCategory("android.intent.category.BROWSABLE");
		intentRho.setData(Uri.parse("http://motorolasolutions.com/com.rhomobile.intenttest"));
		startActivity(intentRho);
		
		Intent intent = new Intent(Intent.ACTION_SEND);
		intent.addCategory("com.rhomobile.intenttest");
		//String rhoIntentParams = "{\"intentType\":\"broadcast\",\"action\":\"android.intent.action.SEND\",\"categories\":[\"com.example.myintenttest.rho\"],\"data\":{\"prop1\":1,\"prop2\":\"str\"}}";
		String rhoIntentParams = "{\"intentType\":\"startActivity\",\"action\":\"com.example.myintenttest.rho\",\"categories\":[\"android.intent.category.DEFAULT\"]}";
		intent.putExtra("returnIntentParams", rhoIntentParams);
		sendBroadcast(intent);
		/*boolean activityExists = intent.resolveActivity(getPackageManager()) != null;
	    if (activityExists)
    	{
	    	startActivity(intent);
    	}
	    else
	    {
	        Toast.makeText(this, "No Such Activity.", Toast.LENGTH_LONG).show();
	    }*/
	    
	}
	
	public void testInternalIntent(View view) {
		Intent intentRho = new Intent("com.example.myintenttest.rho");
		intentRho.addCategory("android.intent.category.DEFAULT");
		intentRho.putExtra("data", "12345678");
		startActivity(intentRho);
		
		
	    
	}
	
	
	public void testIntent(View view) {
		// Do something in response to button click
		
		Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);

	    File f = new File(Environment.getExternalStorageDirectory(),  "photo.jpg");

		intent.putExtra(MediaStore.EXTRA_OUTPUT, Uri.fromFile(f)); // set the image file name
		Log.d("ItentTest", Uri.fromFile(f).toString());
	    
	    // start the image capture Intent
	    startActivityForResult(intent, CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE);
	}
	

	/*@Override
	public void onResume(){
		super.onResume();
		Toast.makeText(this, "Has Focus", Toast.LENGTH_SHORT).show();
	    
		Intent intent = getIntent();
	    if (intent !=null){
	    	Toast.makeText(this, "Has Intents" , Toast.LENGTH_SHORT).show();
		    
	    	String toastStr = intent.getStringExtra("data");
			if (toastStr != null) {
			    Toast toast = Toast.makeText(this, toastStr + " - Toast from Target Application", Toast.LENGTH_LONG);
			    toast.show();
			}
	    	
	    }
	}
	*/
	
		@Override
	protected void onActivityResult(int requestCode, int resultCode, Intent data) {
			Toast.makeText(this,data.toString(), Toast.LENGTH_LONG).show();
	    if (requestCode == CAPTURE_IMAGE_ACTIVITY_REQUEST_CODE) {
	        if (resultCode == RESULT_OK) {
	            // Image captured and saved to fileUri specified in the Intent
	            Toast.makeText(this, "Image saved ", Toast.LENGTH_LONG).show();
	        } else if (resultCode == RESULT_CANCELED) {
	            // User cancelled the image capture
	        } else {
	            // Image capture failed, advise user
	        }
	    }

	    if (requestCode == CAPTURE_VIDEO_ACTIVITY_REQUEST_CODE) {
	        if (resultCode == RESULT_OK) {
	            // Video captured and saved to fileUri specified in the Intent
	            Toast.makeText(this, "Video saved to:\n" +
	                     data.getData(), Toast.LENGTH_LONG).show();
	        } else if (resultCode == RESULT_CANCELED) {
	            // User cancelled the video capture
	        } else {
	            // Video capture failed, advise user
	        }
	    }
	    
	    
	    
	}
	
	/**
	 * A placeholder fragment containing a simple view.
	 */
	public static class PlaceholderFragment extends Fragment {

		public PlaceholderFragment() {
		}

		@Override
		public View onCreateView(LayoutInflater inflater, ViewGroup container,
				Bundle savedInstanceState) {
			View rootView = inflater.inflate(R.layout.fragment_main, container,
					false);
			return rootView;
		}
	}

}
