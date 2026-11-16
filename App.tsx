import { preventScreenCaptureAsync } from 'expo-screen-capture';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// The sample URL from the expo-video docs
const videoSource =
  'https://storage.googleapis.com/exoplayer-test-media-0/BigBuckBunny_320x180.mp4';

export default function App() {
  const [guardOn, setGuardOn] = useState(false);
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    preventScreenCaptureAsync().then(() => setGuardOn(true));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Screen capture guard: {guardOn ? 'ON' : 'off'}</Text>
      <VideoView style={styles.video} player={player} nativeControls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 16 },
  video: { width: 350, height: 197 },
});
