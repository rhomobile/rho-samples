KitchenSink.Samples.Log = KitchenSink.Samples.Log || (function() {

	  
	  function log_categories() {
	    Rho.Log.info("Consectetuer adipiscing elit", "Lorem Ipsum");
	    Rho.Log.info("Foo acquired value Bar in method Baz", "Miscellaneous");
	  }
	  
	  function start_logging_memory_usage() {
	    // Request that memory usage be logged automatically by the system every second
	    Rho.Log.memoryPeriod = 1000;
	    $(".memory_usage_log_status").text("Enabled");
	  }

	  function stop_logging_memory_usage() {
	    // Stop automatic memory-usage logging
	    Rho.Log.memoryPeriod = 0;
	    $(".memory_usage_log_status").text("Disabled");
	  }
	  
	  function show_log() {
	    Rho.Log.showLog();
	  }

	  function read_log_file() {
	    var log_contents = Rho.Log.readLogFile(400);
	    alert('Log file contents: '+log_contents);
	  }

	  function clean_log_file() {
	    var log_contents_before = Rho.Log.readLogFile(400);
	    alert('Log file contents before cleaning: '+log_contents_before);
	    Rho.Log.cleanLogFile();
	    var log_contents_after = Rho.Log.readLogFile(400);
	    alert('Log file contents after cleaning: '+log_contents_after);
	  }

	  function send_log_file () {
	  	//see server log at http://rhodes-server-log.herokuapp.com/server_logs
		    var log_contents = Rho.Log.readLogFile(400);
		    if (log_contents){
		      Rho.Log.destinationURI = "http://rhodes-server-log.herokuapp.com/rholog?log_name=RMS_CodeSample_App_Log";
		      Rho.Log.sendLogFile(send_log_callback);
		    } else{
		      alert("Log FileContents are empty");
		    }
		  }

	  function send_log_callback(params) {
		  alert("Result of sending the log file: "+params.status);
	  }
		  
	return {
		log_categories : log_categories,
		start_logging_memory_usage : start_logging_memory_usage,
		stop_logging_memory_usage : stop_logging_memory_usage,
		show_log : show_log,
		read_log_file : read_log_file,
		clean_log_file : clean_log_file,
		send_log_file : send_log_file
	};

})()
