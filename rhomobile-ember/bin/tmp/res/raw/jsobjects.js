var generic=
{
	Log: function(comment, severity) {return jsobjects.doLog (comment, severity);},
	InvokeMETAFunction: function(equiv, content) {jsobjects.doEMML (equiv, content);}
}

Object.defineProperty
(
  generic, 'OEMInfo',
  { 
    get: function()
    {
    	    return jsobjects.getOEMInfo();
    }
  }
);

Object.defineProperty
(
  generic, 'UUID',
  { 
    get: function()
    {
    	    return jsobjects.getUUID();
    }
  }
);




function callGeneric (name, value)
{
  generic.InvokeMETAFunction (name, value); 
}

  var addressBar=
  {
    
  }

  var alarm=
  {
    clear: function(){callGeneric('alarm','clear');},
    set: function(){callGeneric('alarm','set');}
  }

  var application=
  {
    quit: function(){callGeneric('application','quit');},
    minimize: function(){callGeneric('application','minimize');},
    restore: function(){callGeneric('application','restore');},
    getVersion: function(){callGeneric('application','getVersion');}
  }

  var appSwitcher=
  {
    
  }

  var backButton=
  {
    
  }

  var backlight=
  {
    on: function(){callGeneric('backlight','on');},
    off: function(){callGeneric('backlight','off');},
    getBacklightSettings: function(){callGeneric('backlight','getBacklightSettings');}
  }

  var battery=
  {
    getSmartBatteryStatus: function(){callGeneric('battery','getSmartBatteryStatus');}
  }

  var bottomCommandArea=
  {
    
  }

  var cardReader=
  {
    open: function(){callGeneric('cardReader','open');},
    close: function(){callGeneric('cardReader','close');}
  }

  var comm=
  {
    open: function(){callGeneric('comm','open');},
    close: function(){callGeneric('comm','close');}
  }

  var device=
  {
    suspend: function(){callGeneric('device','suspend');},
    calibrate: function(){callGeneric('device','calibrate');}
  }

  var emmlProfile=
  {
    
  }

  var fileTransfer=
  {
    transfer: function(){callGeneric('fileTransfer','transfer');}
  }

  var forwardButton=
  {
    
  }

  var gesture=
  {
    create: function(){callGeneric('gesture','create');}
  }

  var goButton=
  {
    
  }

  var homeButton=
  {
    
  }

  var hourglass=
  {
    
  }

  var imager=
  {
    enable: function(){callGeneric('imager','enable');},
    disable: function(){callGeneric('imager','disable');},
    capture: function(){callGeneric('imager','capture');},
    enumerate: function(){callGeneric('imager','enumerate');}
  }

  var ioAnalog=
  {
    invokeGeneralVoltage1: function(){callGeneric('ioAnalog','invokeGeneralVoltage1');},
    invokeGeneralVoltage2: function(){callGeneric('ioAnalog','invokeGeneralVoltage2');},
    invokeBatteryVoltage: function(){callGeneric('ioAnalog','invokeBatteryVoltage');},
    invokeBatteryCurrent: function(){callGeneric('ioAnalog','invokeBatteryCurrent');},
    invokeAmbientTemperature: function(){callGeneric('ioAnalog','invokeAmbientTemperature');},
    invokeHeaterTemperature: function(){callGeneric('ioAnalog','invokeHeaterTemperature');}
  }

  var ioDigital=
  {
    InvokeDigital1: function(){callGeneric('ioDigital','InvokeDigital1');},
    InvokeDigital2: function(){callGeneric('ioDigital','InvokeDigital2');},
    InvokeDigital3: function(){callGeneric('ioDigital','InvokeDigital3');},
    InvokeDigital4: function(){callGeneric('ioDigital','InvokeDigital4');},
    InvokeDigital5: function(){callGeneric('ioDigital','InvokeDigital5');},
    InvokeDigital6: function(){callGeneric('ioDigital','InvokeDigital6');},
    InvokeDigital7: function(){callGeneric('ioDigital','InvokeDigital7');},
    InvokeDigital8: function(){callGeneric('ioDigital','InvokeDigital8');}
  }

  var ioSystem=
  {
    invokeIgnition: function(){callGeneric('ioSystem','invokeIgnition');},
    invokePowerSource: function(){callGeneric('ioSystem','invokePowerSource');}
  }

  var keyCapture=
  {
    
  }

  var keylight=
  {
    on: function(){callGeneric('keylight','on');},
    off: function(){callGeneric('keylight','off');}
  }

  var keyState=
  {
    
  }

  var minimizeButton=
  {
    
  }

  var network=
  {
    start: function(){callGeneric('network','start');},
    stop: function(){callGeneric('network','stop');}
  }

  var notification=
  {
    enumerate: function(){callGeneric('notification','enumerate');}
  }

  var zoomInPageButton=
  {
    
  }

  var zoomOutPageButton=
  {
    
  }

  var powerOn=
  {
    
  }

  var push=
  {
    start: function(){callGeneric('push','start');},
    stop: function(){callGeneric('push','stop');}
  }

  var quitButton=
  {
    
  }

  var reboot=
  {
    
  }

  var registry=
  {
    
  }

  var reloadButton=
  {
    
  }

  var rsm=
  {
    markForRetrievalModelNumber: function(){callGeneric('rsm','markForRetrievalModelNumber');},
    markForRetrievalSerialNumber: function(){callGeneric('rsm','markForRetrievalSerialNumber');},
    markForRetrievalDateOfManufacture: function(){callGeneric('rsm','markForRetrievalDateOfManufacture');},
    markForRetrievalDateOfService: function(){callGeneric('rsm','markForRetrievalDateOfService');},
    markForRetrievalBluetoothAddress: function(){callGeneric('rsm','markForRetrievalBluetoothAddress');},
    markForRetrievalFirmwareVersion: function(){callGeneric('rsm','markForRetrievalFirmwareVersion');},
    markForRetrievalDeviceClass: function(){callGeneric('rsm','markForRetrievalDeviceClass');},
    markForRetrievalBatteryStatus: function(){callGeneric('rsm','markForRetrievalBatteryStatus');},
    markForRetrievalBatteryCapacity: function(){callGeneric('rsm','markForRetrievalBatteryCapacity');},
    markForRetrievalBatteryId: function(){callGeneric('rsm','markForRetrievalBatteryId');},
    markForRetrievalBluetoothAuthentication: function(){callGeneric('rsm','markForRetrievalBluetoothAuthentication');},
    markForRetrievalBluetoothEncryption: function(){callGeneric('rsm','markForRetrievalBluetoothEncryption');},
    markForRetrievalBluetoothPinCode: function(){callGeneric('rsm','markForRetrievalBluetoothPinCode');},
    markForRetrievalBluetoothPinCodeType: function(){callGeneric('rsm','markForRetrievalBluetoothPinCodeType');},
    markForRetrievalBluetoothReconnectAttempts: function(){callGeneric('rsm','markForRetrievalBluetoothReconnectAttempts');},
    markForRetrievalBluetoothBeepOnReconnectAttempt: function(){callGeneric('rsm','markForRetrievalBluetoothBeepOnReconnectAttempt');},
    markForRetrievalBluetoothHidAutoReconnect: function(){callGeneric('rsm','markForRetrievalBluetoothHidAutoReconnect');},
    markForRetrievalBluetoothFriendlyName: function(){callGeneric('rsm','markForRetrievalBluetoothFriendlyName');},
    markForRetrievalBluetoothInquiryMode: function(){callGeneric('rsm','markForRetrievalBluetoothInquiryMode');},
    markForRetrievalBluetoothAutoReconnect: function(){callGeneric('rsm','markForRetrievalBluetoothAutoReconnect');},
    markForRetrievalForceSavePairingBarcode: function(){callGeneric('rsm','markForRetrievalForceSavePairingBarcode');},
    markForRetrievalLowBatteryIndication: function(){callGeneric('rsm','markForRetrievalLowBatteryIndication');},
    markForRetrievalLowBatteryIndicationCycle: function(){callGeneric('rsm','markForRetrievalLowBatteryIndicationCycle');},
    markForRetrievalScanLineWidth: function(){callGeneric('rsm','markForRetrievalScanLineWidth');},
    markForRetrievalGoodScansDelay: function(){callGeneric('rsm','markForRetrievalGoodScansDelay');},
    markForRetrievalDecodeFeedback: function(){callGeneric('rsm','markForRetrievalDecodeFeedback');},
    markForRetrievalIgnoreCode128Usps: function(){callGeneric('rsm','markForRetrievalIgnoreCode128Usps');},
    markForRetrievalScanTriggerWakeup: function(){callGeneric('rsm','markForRetrievalScanTriggerWakeup');},
    markForRetrievalMems: function(){callGeneric('rsm','markForRetrievalMems');},
    markForRetrievalProximityEnable: function(){callGeneric('rsm','markForRetrievalProximityEnable');},
    markForRetrievalProximityContinuous: function(){callGeneric('rsm','markForRetrievalProximityContinuous');},
    markForRetrievalProximityDistance: function(){callGeneric('rsm','markForRetrievalProximityDistance');},
    markForRetrievalPagingEnable: function(){callGeneric('rsm','markForRetrievalPagingEnable');},
    markForRetrievalPagingBeepSequence: function(){callGeneric('rsm','markForRetrievalPagingBeepSequence');},
    bluetoothDisconnect: function(){callGeneric('rsm','bluetoothDisconnect');},
    bluetoothUnpair: function(){callGeneric('rsm','bluetoothUnpair');}
  }

  var scanner=
  {
    enumerate: function(){callGeneric('scanner','enumerate');},
    enable: function(){callGeneric('scanner','enable');},
    disable: function(){callGeneric('scanner','disable');},
    start: function(){callGeneric('scanner','start');},
    stop: function(){callGeneric('scanner','stop');}
  }

  var screenOrientation=
  {
    normal: function(){callGeneric('screenOrientation','normal');},
    rightHanded: function(){callGeneric('screenOrientation','rightHanded');},
    leftHanded: function(){callGeneric('screenOrientation','leftHanded');},
    upsideDown: function(){callGeneric('screenOrientation','upsideDown');}
  }

  var signal=
  {
    
  }

  var signatureCapture=
  {
    clear: function(){callGeneric('signatureCapture','clear');},
    capture: function(){callGeneric('signatureCapture','capture');}
  }

  var sip=
  {
    manual: function(){callGeneric('sip','manual');},
    automatic: function(){callGeneric('sip','automatic');}
  }

  var sipButton=
  {
    
  }

  var sntp=
  {
    
  }

  var stopButton=
  {
    
  }

  var stylus=
  {
    enable: function(){callGeneric('stylus','enable');},
    disable: function(){callGeneric('stylus','disable');}
  }

  var telemetry=
  {
    invoke: function(){callGeneric('telemetry','invoke');}
  }

  var timer=
  {
    start: function(){callGeneric('timer','start');},
    stop: function(){callGeneric('timer','stop');}
  }

  var topCommandArea=
  {
    
  }

  var volume=
  {
    
  }

  var zoom=
  {
    
  }

  var zoomTextButton=
  {
    
  }

Object.defineProperty
(
  addressBar,'left',
  { 
    set: function(value)
    {
      callGeneric('addressBar', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  addressBar,'top',
  { 
    set: function(value)
    {
      callGeneric('addressBar', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  addressBar,'width',
  { 
    set: function(value)
    {
      callGeneric('addressBar', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  addressBar,'visibility',
  { 
    set: function(value)
    {
      callGeneric('addressBar', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  alarm,'interval',
  { 
    set: function(value)
    {
      callGeneric('alarm', 'interval:' + value);
    }
  }
);

Object.defineProperty
(
  alarm,'repeat',
  { 
    set: function(value)
    {
      callGeneric('alarm', 'repeat:' + value);
    }
  }
);

Object.defineProperty
(
  alarm,'time',
  { 
    set: function(value)
    {
      callGeneric('alarm', 'time:' + value);
    }
  }
);

Object.defineProperty
(
  appSwitcher,'visibility',
  { 
    set: function(value)
    {
      callGeneric('appSwitcher', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  backButton,'left',
  { 
    set: function(value)
    {
      callGeneric('backButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  backButton,'top',
  { 
    set: function(value)
    {
      callGeneric('backButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  backButton,'height',
  { 
    set: function(value)
    {
      callGeneric('backButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  backButton,'width',
  { 
    set: function(value)
    {
      callGeneric('backButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  backButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('backButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  backButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('backButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  backButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('backButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  backlight,'intensity',
  { 
    set: function(value)
    {
      callGeneric('backlight', 'intensity:' + value);
    }
  }
);

Object.defineProperty
(
  battery,'visibility',
  { 
    set: function(value)
    {
      callGeneric('battery', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  battery,'left',
  { 
    set: function(value)
    {
      callGeneric('battery', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  battery,'top',
  { 
    set: function(value)
    {
      callGeneric('battery', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  battery,'layout',
  { 
    set: function(value)
    {
      callGeneric('battery', 'layout:' + value);
    }
  }
);

Object.defineProperty
(
  battery,'color',
  { 
    set: function(value)
    {
      callGeneric('battery', 'color:' + value);
    }
  }
);

Object.defineProperty
(
  bottomCommandArea,'visibility',
  { 
    set: function(value)
    {
      callGeneric('bottomCommandArea', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  bottomCommandArea,'height',
  { 
    set: function(value)
    {
      callGeneric('bottomCommandArea', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  bottomCommandArea,'color',
  { 
    set: function(value)
    {
      callGeneric('bottomCommandArea', 'color:' + value);
    }
  }
);

Object.defineProperty
(
  bottomCommandArea,'image',
  { 
    set: function(value)
    {
      callGeneric('bottomCommandArea', 'image:' + value);
    }
  }
);

Object.defineProperty
(
  cardReader,'pinTimeout',
  { 
    set: function(value)
    {
      callGeneric('cardReader', 'pinTimeout:' + value);
    }
  }
);

Object.defineProperty
(
  cardReader,'pinEntry',
  { 
    set: function(value)
    {
      callGeneric('cardReader', 'pinEntry:' + value);
    }
  }
);

Object.defineProperty
(
  cardReader,'panData',
  { 
    set: function(value)
    {
      callGeneric('cardReader', 'panData:' + value);
    }
  }
);

Object.defineProperty
(
  cardReader,'autoTab',
  { 
    set: function(value)
    {
      callGeneric('cardReader', 'autoTab:' + value);
    }
  }
);

Object.defineProperty
(
  cardReader,'autoEnter',
  { 
    set: function(value)
    {
      callGeneric('cardReader', 'autoEnter:' + value);
    }
  }
);

Object.defineProperty
(
  cardReader,'moduleName',
  { 
    set: function(value)
    {
      callGeneric('cardReader', 'moduleName:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'baudRate',
  { 
    set: function(value)
    {
      callGeneric('comm', 'baudRate:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'dataBits',
  { 
    set: function(value)
    {
      callGeneric('comm', 'dataBits:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'stopBits',
  { 
    set: function(value)
    {
      callGeneric('comm', 'stopBits:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'parity',
  { 
    set: function(value)
    {
      callGeneric('comm', 'parity:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'handshake',
  { 
    set: function(value)
    {
      callGeneric('comm', 'handshake:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'port',
  { 
    set: function(value)
    {
      callGeneric('comm', 'port:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'chars',
  { 
    set: function(value)
    {
      callGeneric('comm', 'chars:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'endChar',
  { 
    set: function(value)
    {
      callGeneric('comm', 'endChar:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'time',
  { 
    set: function(value)
    {
      callGeneric('comm', 'time:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'writeBytes',
  { 
    set: function(value)
    {
      callGeneric('comm', 'writeBytes:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'writeString',
  { 
    set: function(value)
    {
      callGeneric('comm', 'writeString:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'writeFile',
  { 
    set: function(value)
    {
      callGeneric('comm', 'writeFile:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'autoEnter',
  { 
    set: function(value)
    {
      callGeneric('comm', 'autoEnter:' + value);
    }
  }
);

Object.defineProperty
(
  comm,'autoTab',
  { 
    set: function(value)
    {
      callGeneric('comm', 'autoTab:' + value);
    }
  }
);

Object.defineProperty
(
  emmlProfile,'name',
  { 
    set: function(value)
    {
      callGeneric('emmlProfile', 'name:' + value);
    }
  }
);

Object.defineProperty
(
  emmlProfile,'importProfile',
  { 
    set: function(value)
    {
      callGeneric('emmlProfile', 'importProfile:' + value);
    }
  }
);

Object.defineProperty
(
  emmlProfile,'clear',
  { 
    set: function(value)
    {
      callGeneric('emmlProfile', 'clear:' + value);
    }
  }
);

Object.defineProperty
(
  emmlProfile,'apply',
  { 
    set: function(value)
    {
      callGeneric('emmlProfile', 'apply:' + value);
    }
  }
);

Object.defineProperty
(
  fileTransfer,'destination',
  { 
    set: function(value)
    {
      callGeneric('fileTransfer', 'destination:' + value);
    }
  }
);

Object.defineProperty
(
  fileTransfer,'source',
  { 
    set: function(value)
    {
      callGeneric('fileTransfer', 'source:' + value);
    }
  }
);

Object.defineProperty
(
  fileTransfer,'username',
  { 
    set: function(value)
    {
      callGeneric('fileTransfer', 'username:' + value);
    }
  }
);

Object.defineProperty
(
  fileTransfer,'password',
  { 
    set: function(value)
    {
      callGeneric('fileTransfer', 'password:' + value);
    }
  }
);

Object.defineProperty
(
  fileTransfer,'createFolders',
  { 
    set: function(value)
    {
      callGeneric('fileTransfer', 'createFolders:' + value);
    }
  }
);

Object.defineProperty
(
  fileTransfer,'overWrite',
  { 
    set: function(value)
    {
      callGeneric('fileTransfer', 'overWrite:' + value);
    }
  }
);

Object.defineProperty
(
  forwardButton,'left',
  { 
    set: function(value)
    {
      callGeneric('forwardButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  forwardButton,'top',
  { 
    set: function(value)
    {
      callGeneric('forwardButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  forwardButton,'height',
  { 
    set: function(value)
    {
      callGeneric('forwardButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  forwardButton,'width',
  { 
    set: function(value)
    {
      callGeneric('forwardButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  forwardButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('forwardButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  forwardButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('forwardButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  forwardButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('forwardButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'type',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'type:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'id',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'id:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'preset',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'preset:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'diagnostics',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'diagnostics:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'startX',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'startX:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'startY',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'startY:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'endX',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'endX:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'endY',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'endY:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'skew',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'skew:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'deviation',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'deviation:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'regionWidth',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'regionWidth:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'centerX',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'centerX:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'centerY',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'centerY:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'radius',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'radius:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'start',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'start:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'end',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'end:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'tolerance',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'tolerance:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'sensitivity',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'sensitivity:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'delay',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'delay:' + value);
    }
  }
);

Object.defineProperty
(
  gesture,'interval',
  { 
    set: function(value)
    {
      callGeneric('gesture', 'interval:' + value);
    }
  }
);

Object.defineProperty
(
  goButton,'left',
  { 
    set: function(value)
    {
      callGeneric('goButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  goButton,'top',
  { 
    set: function(value)
    {
      callGeneric('goButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  goButton,'height',
  { 
    set: function(value)
    {
      callGeneric('goButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  goButton,'width',
  { 
    set: function(value)
    {
      callGeneric('goButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  goButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('goButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  goButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('goButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  goButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('goButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  homeButton,'left',
  { 
    set: function(value)
    {
      callGeneric('homeButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  homeButton,'top',
  { 
    set: function(value)
    {
      callGeneric('homeButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  homeButton,'height',
  { 
    set: function(value)
    {
      callGeneric('homeButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  homeButton,'width',
  { 
    set: function(value)
    {
      callGeneric('homeButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  homeButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('homeButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  homeButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('homeButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  homeButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('homeButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  hourglass,'visibility',
  { 
    set: function(value)
    {
      callGeneric('hourglass', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  hourglass,'left',
  { 
    set: function(value)
    {
      callGeneric('hourglass', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  hourglass,'top',
  { 
    set: function(value)
    {
      callGeneric('hourglass', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'enabled',
  { 
    set: function(value)
    {
      callGeneric('imager', 'enabled:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'left',
  { 
    set: function(value)
    {
      callGeneric('imager', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'top',
  { 
    set: function(value)
    {
      callGeneric('imager', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'width',
  { 
    set: function(value)
    {
      callGeneric('imager', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'height',
  { 
    set: function(value)
    {
      callGeneric('imager', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'lamp',
  { 
    set: function(value)
    {
      callGeneric('imager', 'lamp:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'aim',
  { 
    set: function(value)
    {
      callGeneric('imager', 'aim:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'username',
  { 
    set: function(value)
    {
      callGeneric('imager', 'username:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'password',
  { 
    set: function(value)
    {
      callGeneric('imager', 'password:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'sound',
  { 
    set: function(value)
    {
      callGeneric('imager', 'sound:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'destination',
  { 
    set: function(value)
    {
      callGeneric('imager', 'destination:' + value);
    }
  }
);

Object.defineProperty
(
  imager,'deviceId',
  { 
    set: function(value)
    {
      callGeneric('imager', 'deviceId:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'generalVoltage1',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'generalVoltage1:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'generalVoltage1MaximumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'generalVoltage1MaximumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'generalVoltage1MinimumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'generalVoltage1MinimumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'generalVoltage1Debounce',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'generalVoltage1Debounce:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'generalVoltage2',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'generalVoltage2:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'generalVoltage2MaximumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'generalVoltage2MaximumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'generalVoltage2MinimumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'generalVoltage2MinimumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'generalVoltage2Debounce',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'generalVoltage2Debounce:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'BatteryVoltage',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'BatteryVoltage:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'BatteryVoltageMaximumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'BatteryVoltageMaximumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'BatteryVoltageMinimumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'BatteryVoltageMinimumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'BatteryVoltageDebounce',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'BatteryVoltageDebounce:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'BatteryCurrent',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'BatteryCurrent:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'BatteryCurrentMaximumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'BatteryCurrentMaximumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'BatteryCurrentMinimumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'BatteryCurrentMinimumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'BatteryCurrentDebounce',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'BatteryCurrentDebounce:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'AmbientTemperature',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'AmbientTemperature:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'AmbientTemperatureMaximumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'AmbientTemperatureMaximumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'AmbientTemperatureMinimumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'AmbientTemperatureMinimumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'AmbientTemperatureDebounce',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'AmbientTemperatureDebounce:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'HeaterTemperature',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'HeaterTemperature:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'HeaterTemperatureMaximumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'HeaterTemperatureMaximumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'HeaterTemperatureMinimumThreshold',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'HeaterTemperatureMinimumThreshold:' + value);
    }
  }
);

Object.defineProperty
(
  ioAnalog,'HeaterTemperatureDebounce',
  { 
    set: function(value)
    {
      callGeneric('ioAnalog', 'HeaterTemperatureDebounce:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'input1',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'input1:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputState1',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputState1:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputWarmBootState1',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputWarmBootState1:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputColdBootState1',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputColdBootState1:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'input2',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'input2:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputState2',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputState2:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputWarmBootState2',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputWarmBootState2:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputColdBootState2',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputColdBootState2:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'input3',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'input3:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputState3',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputState3:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputWarmBootState3',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputWarmBootState3:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputColdBootState3',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputColdBootState3:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'input4',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'input4:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputState4',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputState4:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputWarmBootState4',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputWarmBootState4:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputColdBootState4',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputColdBootState4:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'input5',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'input5:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputState5',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputState5:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputWarmBootState5',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputWarmBootState5:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputColdBootState5',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputColdBootState5:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'input6',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'input6:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputState6',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputState6:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputWarmBootState6',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputWarmBootState6:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputColdBootState6',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputColdBootState6:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'input7',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'input7:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputState7',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputState7:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputWarmBootState7',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputWarmBootState7:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputColdBootState7',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputColdBootState7:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'input8',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'input8:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputState8',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputState8:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputWarmBootState8',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputWarmBootState8:' + value);
    }
  }
);

Object.defineProperty
(
  ioDigital,'outputColdBootState8',
  { 
    set: function(value)
    {
      callGeneric('ioDigital', 'outputColdBootState8:' + value);
    }
  }
);

Object.defineProperty
(
  ioSystem,'ignition',
  { 
    set: function(value)
    {
      callGeneric('ioSystem', 'ignition:' + value);
    }
  }
);

Object.defineProperty
(
  ioSystem,'powerSource',
  { 
    set: function(value)
    {
      callGeneric('ioSystem', 'powerSource:' + value);
    }
  }
);

Object.defineProperty
(
  keyCapture,'dispatch',
  { 
    set: function(value)
    {
      callGeneric('keyCapture', 'dispatch:' + value);
    }
  }
);

Object.defineProperty
(
  keyCapture,'keyValue',
  { 
    set: function(value)
    {
      callGeneric('keyCapture', 'keyValue:' + value);
    }
  }
);

Object.defineProperty
(
  keyCapture,'remap',
  { 
    set: function(value)
    {
      callGeneric('keyCapture', 'remap:' + value);
    }
  }
);

Object.defineProperty
(
  keyCapture,'accelerateKey',
  { 
    set: function(value)
    {
      callGeneric('keyCapture', 'accelerateKey:' + value);
    }
  }
);

Object.defineProperty
(
  keyCapture,'homeKeyValue',
  { 
    set: function(value)
    {
      callGeneric('keyCapture', 'homeKeyValue:' + value);
    }
  }
);

Object.defineProperty
(
  keylight,'intensity',
  { 
    set: function(value)
    {
      callGeneric('keylight', 'intensity:' + value);
    }
  }
);

Object.defineProperty
(
  keyState,'right',
  { 
    set: function(value)
    {
      callGeneric('keyState', 'right:' + value);
    }
  }
);

Object.defineProperty
(
  keyState,'left',
  { 
    set: function(value)
    {
      callGeneric('keyState', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  keyState,'top',
  { 
    set: function(value)
    {
      callGeneric('keyState', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  keyState,'height',
  { 
    set: function(value)
    {
      callGeneric('keyState', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  keyState,'width',
  { 
    set: function(value)
    {
      callGeneric('keyState', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  keyState,'visibility',
  { 
    set: function(value)
    {
      callGeneric('keyState', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  minimizeButton,'left',
  { 
    set: function(value)
    {
      callGeneric('minimizeButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  minimizeButton,'top',
  { 
    set: function(value)
    {
      callGeneric('minimizeButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  minimizeButton,'height',
  { 
    set: function(value)
    {
      callGeneric('minimizeButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  minimizeButton,'width',
  { 
    set: function(value)
    {
      callGeneric('minimizeButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  minimizeButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('minimizeButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  minimizeButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('minimizeButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  minimizeButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('minimizeButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  network,'host',
  { 
    set: function(value)
    {
      callGeneric('network', 'host:' + value);
    }
  }
);

Object.defineProperty
(
  network,'port',
  { 
    set: function(value)
    {
      callGeneric('network', 'port:' + value);
    }
  }
);

Object.defineProperty
(
  network,'networkPollInterval',
  { 
    set: function(value)
    {
      callGeneric('network', 'networkPollInterval:' + value);
    }
  }
);

Object.defineProperty
(
  network,'connectionTimeout',
  { 
    set: function(value)
    {
      callGeneric('network', 'connectionTimeout:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'setLEDOnDuration',
  { 
    set: function(value)
    {
      callGeneric('notification', 'setLEDOnDuration:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'setLEDOffDuration',
  { 
    set: function(value)
    {
      callGeneric('notification', 'setLEDOffDuration:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'setLEDNumberOfCycles',
  { 
    set: function(value)
    {
      callGeneric('notification', 'setLEDNumberOfCycles:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'setBeeperFrequency',
  { 
    set: function(value)
    {
      callGeneric('notification', 'setBeeperFrequency:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'setBeeperVolume',
  { 
    set: function(value)
    {
      callGeneric('notification', 'setBeeperVolume:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'setBeeperDuration',
  { 
    set: function(value)
    {
      callGeneric('notification', 'setBeeperDuration:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'setVibrateDuration',
  { 
    set: function(value)
    {
      callGeneric('notification', 'setVibrateDuration:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'stateOn',
  { 
    set: function(value)
    {
      callGeneric('notification', 'stateOn:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'stateOff',
  { 
    set: function(value)
    {
      callGeneric('notification', 'stateOff:' + value);
    }
  }
);

Object.defineProperty
(
  notification,'stateCycle',
  { 
    set: function(value)
    {
      callGeneric('notification', 'stateCycle:' + value);
    }
  }
);

Object.defineProperty
(
  zoomInPageButton,'left',
  { 
    set: function(value)
    {
      callGeneric('zoomInPageButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  zoomInPageButton,'top',
  { 
    set: function(value)
    {
      callGeneric('zoomInPageButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  zoomInPageButton,'height',
  { 
    set: function(value)
    {
      callGeneric('zoomInPageButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  zoomInPageButton,'width',
  { 
    set: function(value)
    {
      callGeneric('zoomInPageButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  zoomInPageButton,'imageup',
  { 
    set: function(value)
    {
      callGeneric('zoomInPageButton', 'imageup:' + value);
    }
  }
);

Object.defineProperty
(
  zoomInPageButton,'imagedown',
  { 
    set: function(value)
    {
      callGeneric('zoomInPageButton', 'imagedown:' + value);
    }
  }
);

Object.defineProperty
(
  zoomInPageButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('zoomInPageButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  zoomOutPageButton,'left',
  { 
    set: function(value)
    {
      callGeneric('zoomOutPageButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  zoomOutPageButton,'top',
  { 
    set: function(value)
    {
      callGeneric('zoomOutPageButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  zoomOutPageButton,'height',
  { 
    set: function(value)
    {
      callGeneric('zoomOutPageButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  zoomOutPageButton,'width',
  { 
    set: function(value)
    {
      callGeneric('zoomOutPageButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  zoomOutPageButton,'imageup',
  { 
    set: function(value)
    {
      callGeneric('zoomOutPageButton', 'imageup:' + value);
    }
  }
);

Object.defineProperty
(
  zoomOutPageButton,'imagedown',
  { 
    set: function(value)
    {
      callGeneric('zoomOutPageButton', 'imagedown:' + value);
    }
  }
);

Object.defineProperty
(
  zoomOutPageButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('zoomOutPageButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  push,'port',
  { 
    set: function(value)
    {
      callGeneric('push', 'port:' + value);
    }
  }
);

Object.defineProperty
(
  push,'passKey',
  { 
    set: function(value)
    {
      callGeneric('push', 'passKey:' + value);
    }
  }
);

Object.defineProperty
(
  push,'response',
  { 
    set: function(value)
    {
      callGeneric('push', 'response:' + value);
    }
  }
);

Object.defineProperty
(
  push,'path',
  { 
    set: function(value)
    {
      callGeneric('push', 'path:' + value);
    }
  }
);

Object.defineProperty
(
  push,'unattended',
  { 
    set: function(value)
    {
      callGeneric('push', 'unattended:' + value);
    }
  }
);

Object.defineProperty
(
  quitButton,'left',
  { 
    set: function(value)
    {
      callGeneric('quitButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  quitButton,'top',
  { 
    set: function(value)
    {
      callGeneric('quitButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  quitButton,'height',
  { 
    set: function(value)
    {
      callGeneric('quitButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  quitButton,'width',
  { 
    set: function(value)
    {
      callGeneric('quitButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  quitButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('quitButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  quitButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('quitButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  quitButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('quitButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  reboot,'bootType',
  { 
    set: function(value)
    {
      callGeneric('reboot', 'bootType:' + value);
    }
  }
);

Object.defineProperty
(
  registry,'hive',
  { 
    set: function(value)
    {
      callGeneric('registry', 'hive:' + value);
    }
  }
);

Object.defineProperty
(
  registry,'key',
  { 
    set: function(value)
    {
      callGeneric('registry', 'key:' + value);
    }
  }
);

Object.defineProperty
(
  registry,'setting',
  { 
    set: function(value)
    {
      callGeneric('registry', 'setting:' + value);
    }
  }
);

Object.defineProperty
(
  registry,'type',
  { 
    set: function(value)
    {
      callGeneric('registry', 'type:' + value);
    }
  }
);

Object.defineProperty
(
  registry,'persistent',
  { 
    set: function(value)
    {
      callGeneric('registry', 'persistent:' + value);
    }
  }
);

Object.defineProperty
(
  registry,'value',
  { 
    set: function(value)
    {
      callGeneric('registry', 'value:' + value);
    }
  }
);

Object.defineProperty
(
  reloadButton,'left',
  { 
    set: function(value)
    {
      callGeneric('reloadButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  reloadButton,'top',
  { 
    set: function(value)
    {
      callGeneric('reloadButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  reloadButton,'height',
  { 
    set: function(value)
    {
      callGeneric('reloadButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  reloadButton,'width',
  { 
    set: function(value)
    {
      callGeneric('reloadButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  reloadButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('reloadButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  reloadButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('reloadButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  reloadButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('reloadButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothAuthentication',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothAuthentication:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothEncryption',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothEncryption:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothPinCode',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothPinCode:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothPinCodeType',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothPinCodeType:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothReconnectAttempts',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothReconnectAttempts:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothBeepOnReconnectAttempt',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothBeepOnReconnectAttempt:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothHidAutoReconnect',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothHidAutoReconnect:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothFriendlyName',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothFriendlyName:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothInquiryMode',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothInquiryMode:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'bluetoothAutoReconnect',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'bluetoothAutoReconnect:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'forceSavePairingBarcode',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'forceSavePairingBarcode:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'lowBatteryIndication',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'lowBatteryIndication:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'lowBatteryIndicationCycle',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'lowBatteryIndicationCycle:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'scanLineWidth',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'scanLineWidth:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'goodScansDelay',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'goodScansDelay:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'decodeFeedback',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'decodeFeedback:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'ignoreCode128Usps',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'ignoreCode128Usps:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'scanTriggerWakeup',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'scanTriggerWakeup:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'mems',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'mems:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'proximityEnable',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'proximityEnable:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'proximityContinuous',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'proximityContinuous:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'proximityDistance',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'proximityDistance:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'pagingEnable',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'pagingEnable:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'pagingBeepSequence',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'pagingBeepSequence:' + value);
    }
  }
);

Object.defineProperty
(
  rsm,'pagingActivate',
  { 
    set: function(value)
    {
      callGeneric('rsm', 'pagingActivate:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'enabled',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'enabled:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'autoEnter',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'autoEnter:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'autoTab',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'autoTab:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'linearSecurityLevel',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'linearSecurityLevel:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'scanTimeout',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'scanTimeout:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'rasterMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'rasterMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'rasterHeight',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'rasterHeight:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'aimType',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'aimType:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'timedAimDuration',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'timedAimDuration:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'sameSymbolTimeout',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'sameSymbolTimeout:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'differentSymbolTimeout',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'differentSymbolTimeout:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'aimMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'aimMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'picklistMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'picklistMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'viewfinderMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'viewfinderMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'viewfinderX',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'viewfinderX:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'viewfinderY',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'viewfinderY:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'viewfinderWidth',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'viewfinderWidth:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'viewfinderHeight',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'viewfinderHeight:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'viewfinderFeedback',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'viewfinderFeedback:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'viewfinderFeedbackTime',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'viewfinderFeedbackTime:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'focusMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'focusMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'illuminationMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'illuminationMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'dpmMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'dpmMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'inverse1dMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'inverse1dMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'poorQuality1dMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'poorQuality1dMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'narrowBeam',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'narrowBeam:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'dbpMode',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'dbpMode:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'klasseEins',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'klasseEins:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'adaptiveScanning',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'adaptiveScanning:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'bidirectionalRedundancy',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'bidirectionalRedundancy:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'connectionIdleTimeout',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'connectionIdleTimeout:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'disconnectBtOnDisable',
  { 
    set: function(value)
    {
      callGeneric('scanner', 'disconnectBtOnDisable:' + value);
    }
  }
);

Object.defineProperty
(
  screenOrientation,'autoRotate',
  { 
    set: function(value)
    {
      callGeneric('screenOrientation', 'autoRotate:' + value);
    }
  }
);

Object.defineProperty
(
  signal,'visibility',
  { 
    set: function(value)
    {
      callGeneric('signal', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  signal,'left',
  { 
    set: function(value)
    {
      callGeneric('signal', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  signal,'top',
  { 
    set: function(value)
    {
      callGeneric('signal', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  signal,'layout',
  { 
    set: function(value)
    {
      callGeneric('signal', 'layout:' + value);
    }
  }
);

Object.defineProperty
(
  signal,'color',
  { 
    set: function(value)
    {
      callGeneric('signal', 'color:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'visibility',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'border',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'border:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'width',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'height',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'left',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'top',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'penWidth',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'penWidth:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'penColor',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'penColor:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'bgColor',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'bgColor:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'destination',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'destination:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'username',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'username:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'password',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'password:' + value);
    }
  }
);

Object.defineProperty
(
  signatureCapture,'name',
  { 
    set: function(value)
    {
      callGeneric('signatureCapture', 'name:' + value);
    }
  }
);

Object.defineProperty
(
  sip,'left',
  { 
    set: function(value)
    {
      callGeneric('sip', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  sip,'top',
  { 
    set: function(value)
    {
      callGeneric('sip', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  sipButton,'left',
  { 
    set: function(value)
    {
      callGeneric('sipButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  sipButton,'top',
  { 
    set: function(value)
    {
      callGeneric('sipButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  sipButton,'height',
  { 
    set: function(value)
    {
      callGeneric('sipButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  sipButton,'width',
  { 
    set: function(value)
    {
      callGeneric('sipButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  sipButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('sipButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  sipButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('sipButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  sipButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('sipButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  sntp,'serverIp',
  { 
    set: function(value)
    {
      callGeneric('sntp', 'serverIp:' + value);
    }
  }
);

Object.defineProperty
(
  stopButton,'left',
  { 
    set: function(value)
    {
      callGeneric('stopButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  stopButton,'top',
  { 
    set: function(value)
    {
      callGeneric('stopButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  stopButton,'height',
  { 
    set: function(value)
    {
      callGeneric('stopButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  stopButton,'width',
  { 
    set: function(value)
    {
      callGeneric('stopButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  stopButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('stopButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  stopButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('stopButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  stopButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('stopButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  telemetry,'queryFrequency',
  { 
    set: function(value)
    {
      callGeneric('telemetry', 'queryFrequency:' + value);
    }
  }
);

Object.defineProperty
(
  telemetry,'enabled',
  { 
    set: function(value)
    {
      callGeneric('telemetry', 'enabled:' + value);
    }
  }
);

Object.defineProperty
(
  telemetry,'disabled',
  { 
    set: function(value)
    {
      callGeneric('telemetry', 'disabled:' + value);
    }
  }
);

Object.defineProperty
(
  timer,'interval',
  { 
    set: function(value)
    {
      callGeneric('timer', 'interval:' + value);
    }
  }
);

Object.defineProperty
(
  topCommandArea,'visibility',
  { 
    set: function(value)
    {
      callGeneric('topCommandArea', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  topCommandArea,'height',
  { 
    set: function(value)
    {
      callGeneric('topCommandArea', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  topCommandArea,'color',
  { 
    set: function(value)
    {
      callGeneric('topCommandArea', 'color:' + value);
    }
  }
);

Object.defineProperty
(
  topCommandArea,'image',
  { 
    set: function(value)
    {
      callGeneric('topCommandArea', 'image:' + value);
    }
  }
);

Object.defineProperty
(
  volume,'setVolume',
  { 
    set: function(value)
    {
      callGeneric('volume', 'setVolume:' + value);
    }
  }
);

Object.defineProperty
(
  zoom,'text',
  { 
    set: function(value)
    {
      callGeneric('zoom', 'text:' + value);
    }
  }
);

Object.defineProperty
(
  zoom,'page',
  { 
    set: function(value)
    {
      callGeneric('zoom', 'page:' + value);
    }
  }
);

Object.defineProperty
(
  zoomTextButton,'left',
  { 
    set: function(value)
    {
      callGeneric('zoomTextButton', 'left:' + value);
    }
  }
);

Object.defineProperty
(
  zoomTextButton,'top',
  { 
    set: function(value)
    {
      callGeneric('zoomTextButton', 'top:' + value);
    }
  }
);

Object.defineProperty
(
  zoomTextButton,'height',
  { 
    set: function(value)
    {
      callGeneric('zoomTextButton', 'height:' + value);
    }
  }
);

Object.defineProperty
(
  zoomTextButton,'width',
  { 
    set: function(value)
    {
      callGeneric('zoomTextButton', 'width:' + value);
    }
  }
);

Object.defineProperty
(
  zoomTextButton,'imageUp',
  { 
    set: function(value)
    {
      callGeneric('zoomTextButton', 'imageUp:' + value);
    }
  }
);

Object.defineProperty
(
  zoomTextButton,'imageDown',
  { 
    set: function(value)
    {
      callGeneric('zoomTextButton', 'imageDown:' + value);
    }
  }
);

Object.defineProperty
(
  zoomTextButton,'visibility',
  { 
    set: function(value)
    {
      callGeneric('zoomTextButton', 'visibility:' + value);
    }
  }
);

Object.defineProperty
(
  scanner,'allDecoders',
  {
    set: function(value)
    {
      callGeneric('scanner', 'allDecoders:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'ausPostal',
  {
    set: function(value)
    {
      callGeneric('scanner', 'ausPostal:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'aztec',
  {
    set: function(value)
    {
      callGeneric('scanner', 'aztec:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'canPostal',
  {
    set: function(value)
    {
      callGeneric('scanner', 'canPostal:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'chinese2of5',
  {
    set: function(value)
    {
      callGeneric('scanner', 'chinese2of5:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'codabar',
  {
    set: function(value)
    {
      callGeneric('scanner', 'codabar:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'codabarClsiEditing',
  {
    set: function(value)
    {
      callGeneric('scanner', 'codabarClsiEditing:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'codabarMaxLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'codabarMaxLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'codabarMinLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'codabarMinLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'codabarNotisEditing',
  {
    set: function(value)
    {
      callGeneric('scanner', 'codabarNotisEditing:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'codabarRedundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'codabarRedundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code11',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code11:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code11checkDigitCount',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code11checkDigitCount:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code11redundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code11redundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code11reportCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code11reportCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128checkIsBtTable',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128checkIsBtTable:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128Ean128',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128Ean128:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128isBt128',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128isBt128:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128isBt128ConcatMode',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128isBt128ConcatMode:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128maxLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128maxLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128minLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128minLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128other128',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128other128:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code128redundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code128redundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39code32prefix',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39code32prefix:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39concatenation',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39concatenation:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39convertToCode32',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39convertToCode32:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39FullAscii',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39FullAscii:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39maxLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39maxLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39minLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39minLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39redundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39redundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39reportCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39reportCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code39verifyCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code39verifyCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code93',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code93:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code93maxLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code93maxLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code93minLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code93minLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'code93redundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'code93redundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'compositeAbUccLinkMode',
  {
    set: function(value)
    {
      callGeneric('scanner', 'compositeAbUccLinkMode:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'compositeAbUseUpcPreambleCheckDigitRules',
  {
    set: function(value)
    {
      callGeneric('scanner', 'compositeAbUseUpcPreambleCheckDigitRules:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'compositAb',
  {
    set: function(value)
    {
      callGeneric('scanner', 'compositAb:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'compositeC',
  {
    set: function(value)
    {
      callGeneric('scanner', 'compositeC:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'d2of5',
  {
    set: function(value)
    {
      callGeneric('scanner', 'd2of5:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'d2of5maxLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'd2of5maxLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'d2of5minLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'd2of5minLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'d2of5redundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'd2of5redundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'dataMatrix',
  {
    set: function(value)
    {
      callGeneric('scanner', 'dataMatrix:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'dutchPostal',
  {
    set: function(value)
    {
      callGeneric('scanner', 'dutchPostal:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'ean13',
  {
    set: function(value)
    {
      callGeneric('scanner', 'ean13:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'ean8',
  {
    set: function(value)
    {
      callGeneric('scanner', 'ean8:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'ean8convertToEan13',
  {
    set: function(value)
    {
      callGeneric('scanner', 'ean8convertToEan13:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'i2of5',
  {
    set: function(value)
    {
      callGeneric('scanner', 'i2of5:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'i2of5convertToEan13',
  {
    set: function(value)
    {
      callGeneric('scanner', 'i2of5convertToEan13:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'i2of5maxLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'i2of5maxLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'i2of5minLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'i2of5minLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'i2of5redundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'i2of5redundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'i2of5reportCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'i2of5reportCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'i2Of5verifyCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'i2Of5verifyCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'japPostal',
  {
    set: function(value)
    {
      callGeneric('scanner', 'japPostal:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'korean3of5maxLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'korean3of5maxLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'korean3of5minLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'korean3of5minLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'korean3of5redundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'korean3of5redundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'korean3of5',
  {
    set: function(value)
    {
      callGeneric('scanner', 'korean3of5:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroMicroPdf',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroMicroPdf:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroMicroPdfBufferLabels',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroMicroPdfBufferLabels:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroMicroPdfConvertToMicroPdf',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroMicroPdfConvertToMicroPdf:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroMicroPdfExclusive',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroMicroPdfExclusive:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroMicroPdfReportAppendInfo',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroMicroPdfReportAppendInfo:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroPdf',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroPdf:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroPdfBufferLabels',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroPdfBufferLabels:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroPdfConvertToPdf417',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroPdfConvertToPdf417:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'macroPdfExclusive',
  {
    set: function(value)
    {
      callGeneric('scanner', 'macroPdfExclusive:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'matrix2of5',
  {
    set: function(value)
    {
      callGeneric('scanner', 'matrix2of5:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'matrix2of5maxLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'matrix2of5maxLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'matrix2of5minLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'matrix2of5minLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'matrix2of5reportCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'matrix2of5reportCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'matrix2of5verifyCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'matrix2of5verifyCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'maxiCode',
  {
    set: function(value)
    {
      callGeneric('scanner', 'maxiCode:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'microPdf',
  {
    set: function(value)
    {
      callGeneric('scanner', 'microPdf:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'microQr',
  {
    set: function(value)
    {
      callGeneric('scanner', 'microQr:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'msi',
  {
    set: function(value)
    {
      callGeneric('scanner', 'msi:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'msiCheckDigits',
  {
    set: function(value)
    {
      callGeneric('scanner', 'msiCheckDigits:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'msiCheckDigitScheme',
  {
    set: function(value)
    {
      callGeneric('scanner', 'msiCheckDigitScheme:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'msiMaxlength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'msiMaxlength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'msiMinLength',
  {
    set: function(value)
    {
      callGeneric('scanner', 'msiMinLength:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'msiRedundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'msiRedundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'msiReportCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'msiReportCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'pdf417',
  {
    set: function(value)
    {
      callGeneric('scanner', 'pdf417:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'qrCode',
  {
    set: function(value)
    {
      callGeneric('scanner', 'qrCode:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'rss14',
  {
    set: function(value)
    {
      callGeneric('scanner', 'rss14:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'rssExp',
  {
    set: function(value)
    {
      callGeneric('scanner', 'rssExp:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'rssLim',
  {
    set: function(value)
    {
      callGeneric('scanner', 'rssLim:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'signature',
  {
    set: function(value)
    {
      callGeneric('scanner', 'signature:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'signatureImageHeight',
  {
    set: function(value)
    {
      callGeneric('scanner', 'signatureImageHeight:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'signatureImageQuality',
  {
    set: function(value)
    {
      callGeneric('scanner', 'signatureImageQuality:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'signatureImageSize',
  {
    set: function(value)
    {
      callGeneric('scanner', 'signatureImageSize:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'signatureImageWidth',
  {
    set: function(value)
    {
      callGeneric('scanner', 'signatureImageWidth:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'tlc39',
  {
    set: function(value)
    {
      callGeneric('scanner', 'tlc39:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'trioptic39',
  {
    set: function(value)
    {
      callGeneric('scanner', 'trioptic39:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'trioptic39redundancy',
  {
    set: function(value)
    {
      callGeneric('scanner', 'trioptic39redundancy:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'ukPostal',
  {
    set: function(value)
    {
      callGeneric('scanner', 'ukPostal:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upca',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upca:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcaReportCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcaReportCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcaPreamble',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcaPreamble:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upce0',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upce0:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upce0convertToUpca',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upce0convertToUpca:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upce0preamble',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upce0preamble:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upce0reportCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upce0reportCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upce1',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upce1:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upce1convertToUpca',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upce1convertToUpca:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upce1preamble',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upce1preamble:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upce1reportCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upce1reportCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanBookland',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanBookland:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanBooklandFormat',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanBooklandFormat:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanConvertRssToUpcEan',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanConvertRssToUpcEan:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanCoupon',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanCoupon:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanLinearDecode',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanLinearDecode:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanRandomWeightCheckDigit',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanRandomWeightCheckDigit:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanRetryCount',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanRetryCount:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanSecurityLevel',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanSecurityLevel:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanSupplemental2',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanSupplemental2:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanSupplemental5',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanSupplemental5:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'upcEanSupplementalMode',
  {
    set: function(value)
    {
      callGeneric('scanner', 'upcEanSupplementalMode:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'us4state',
  {
    set: function(value)
    {
      callGeneric('scanner', 'us4state:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'usPlanet',
  {
    set: function(value)
    {
      callGeneric('scanner', 'usPlanet:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'usPostNet',
  {
    set: function(value)
    {
      callGeneric('scanner', 'usPostNet:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'webcode',
  {
    set: function(value)
    {
      callGeneric('scanner', 'webcode:' + value);
    }
  }
);
  
Object.defineProperty
(
  scanner,'webcodeDecodeGtSubtype',
  {
    set: function(value)
    {
      callGeneric('scanner', 'webcodeDecodeGtSubtype:' + value);
    }
  }
);
  
Object.defineProperty
(
  alarm,'alarmTriggered',
  {
    set: function(value)
    {  
      callGeneric('alarm', "alarmTriggered:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  application,'applicationEvent',
  {
    set: function(value)
    {  
      callGeneric('application', "applicationEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  application,'versionEvent',
  {
    set: function(value)
    {  
      callGeneric('application', "versionEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  backlight,'backlightSettingsEvent',
  {
    set: function(value)
    {  
      callGeneric('backlight', "backlightSettingsEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  battery,'batteryEvent',
  {
    set: function(value)
    {  
      callGeneric('battery', "batteryEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  battery,'smartBatteryEvent',
  {
    set: function(value)
    {  
      callGeneric('battery', "smartBatteryEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  cardReader,'readEvent',
  {
    set: function(value)
    {  
      callGeneric('cardReader', "readEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  comm,'commEvent',
  {
    set: function(value)
    {  
      callGeneric('comm', "commEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  fileTransfer,'transferEvent',
  {
    set: function(value)
    {  
      callGeneric('fileTransfer', "transferEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  gesture,'detected',
  {
    set: function(value)
    {  
      callGeneric('gesture', "detected:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  imager,'imagerEvent',
  {
    set: function(value)
    {  
      callGeneric('imager', "imagerEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  imager,'imagerEnumEvent',
  {
    set: function(value)
    {  
      callGeneric('imager', "imagerEnumEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  ioAnalog,'portEvent',
  {
    set: function(value)
    {  
      callGeneric('ioAnalog', "portEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  ioDigital,'PortEvent',
  {
    set: function(value)
    {  
      callGeneric('ioDigital', "PortEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  ioSystem,'portEvent',
  {
    set: function(value)
    {  
      callGeneric('ioSystem', "portEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  keyCapture,'keyEvent',
  {
    set: function(value)
    {  
      callGeneric('keyCapture', "keyEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  keyCapture,'triggerEvent',
  {
    set: function(value)
    {  
      callGeneric('keyCapture', "triggerEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  network,'networkEvent',
  {
    set: function(value)
    {  
      callGeneric('network', "networkEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  notification,'enumNotificationsEvent',
  {
    set: function(value)
    {  
      callGeneric('notification', "enumNotificationsEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  powerOn,'powerOnEvent',
  {
    set: function(value)
    {  
      callGeneric('powerOn', "powerOnEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  push,'detected',
  {
    set: function(value)
    {  
      callGeneric('push', "detected:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  rsm,'rsmGetEvent',
  {
    set: function(value)
    {  
      callGeneric('rsm', "rsmGetEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  scanner,'decodeEvent',
  {
    set: function(value)
    {  
      callGeneric('scanner', "decodeEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  scanner,'bluetoothStatusEvent',
  {
    set: function(value)
    {  
      callGeneric('scanner', "bluetoothStatusEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  scanner,'enumScannerEvent',
  {
    set: function(value)
    {  
      callGeneric('scanner', "enumScannerEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  screenOrientation,'screenOrientationEvent',
  {
    set: function(value)
    {  
      callGeneric('screenOrientation', "screenOrientationEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  signal,'signalEvent',
  {
    set: function(value)
    {  
      callGeneric('signal', "signalEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  signatureCapture,'signatureSaveEvent',
  {
    set: function(value)
    {  
      callGeneric('signatureCapture', "signatureSaveEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  signatureCapture,'vectorEvent',
  {
    set: function(value)
    {  
      callGeneric('signatureCapture', "vectorEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  telemetry,'telemetryDataEvent',
  {
    set: function(value)
    {  
      callGeneric('telemetry', "telemetryDataEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  telemetry,'telemetryArrayEvent',
  {
    set: function(value)
    {  
      callGeneric('telemetry', "telemetryArrayEvent:url('javascript:" + value + "')");
    }
  }
);

Object.defineProperty
(
  timer,'timeout',
  {
    set: function(value)
    {  
      callGeneric('timer', "timeout:url('javascript:" + value + "')");
    }
  }
);
