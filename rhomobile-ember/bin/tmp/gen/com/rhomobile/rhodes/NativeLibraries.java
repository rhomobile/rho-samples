package com.rhomobile.rhodes;
public class NativeLibraries {
  public static void load() {
    // Load native .so libraries
    System.loadLibrary("rhodes");
    System.loadLibrary("plugin");
  }
};
