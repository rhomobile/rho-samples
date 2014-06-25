#!/bin/bash
RHO_SOURCE_DIR=${SRCROOT}/bin/RhoBundle
RHO_TARGET_DIR=${TARGET_BUILD_DIR}/${TARGET_NAME}.app
echo "Create dir $RHO_TARGET_DIR"
mkdir -p ${RHO_TARGET_DIR}
for i in `ls -1 ${RHO_SOURCE_DIR}`
do
  echo "rm -Rf $RHO_TARGET_DIR/$i"
  rm -Rf ${RHO_TARGET_DIR}/$i
done
echo "cp -Rf $RHO_SOURCE_DIR/* $RHO_TARGET_DIR"
cp -Rf ${RHO_SOURCE_DIR}/* ${RHO_TARGET_DIR}
