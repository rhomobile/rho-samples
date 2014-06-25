#!/bin/bash
if [ -d ${TARGET_BUILD_DIR}/${TARGET_NAME}.app/apps/public/alerts ]; then
	nf=$(ls ${TARGET_BUILD_DIR}/${TARGET_NAME}.app/apps/public/alerts | wc -l)
	if [ "$nf" -eq "0" ];  then 
		echo 'Alerts folder is empty...' 
	else
		echo Moving $nf alert\(s\)...
		mv ${TARGET_BUILD_DIR}/${TARGET_NAME}.app/apps/public/alerts/*.* ${TARGET_BUILD_DIR}/${TARGET_NAME}.app
	fi
else
	echo 'Alerts folder is not found...'
fi

