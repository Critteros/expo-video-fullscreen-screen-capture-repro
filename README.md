# expo-video fullscreen can be captured while screen capture is prevented (Android)

While `preventScreenCaptureAsync()` from `expo-screen-capture` is active, screenshots of the inline `VideoView` are black as expected. After you open the native fullscreen player, screenshots show the video.

Tested with expo 58.0.25, expo-video 58.0.14 and expo-screen-capture 58.0.6 on an Android 16 (API 36) emulator.

## Run

```
npm install
npx expo run:android
```

## Steps

1. Wait until the label reads "Screen capture guard: ON" and the video plays.
2. Take a screenshot. It is black.
3. Tap the video to show the controls, then tap the fullscreen button.
4. Take a screenshot again.

Expected: the fullscreen screenshot is black.

Actual: the fullscreen screenshot shows the video.

To take a raw screenshot from the command line:

```
adb exec-out screencap -p > capture.png
```

To compare the window flags, run `adb shell dumpsys window windows` in both states. The `MainActivity` window has `SECURE` in its `fl=` line, and the `FullscreenPlayerActivity` window does not.
