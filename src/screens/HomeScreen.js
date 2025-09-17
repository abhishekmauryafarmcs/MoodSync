import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [currentMood] = useState(7);
  const [breathAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    // Gentle breathing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(breathAnimation, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(breathAnimation, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const getMoodEmoji = (mood) => {
    if (mood <= 3) return '🌧️';
    if (mood <= 6) return '⛅';
    if (mood <= 8) return '🌤️';
    return '☀️';
  };

  const getMoodText = (mood) => {
    if (mood <= 3) return 'Stormy';
    if (mood <= 6) return 'Cloudy';
    if (mood <= 8) return 'Partly sunny';
    return 'Clear skies';
  };

  // 10 Core Features for Zen MoodSync
  const zenFeatures = [
    { id: 1, title: 'Breathe', icon: '🫁', action: () => {} },
    { id: 2, title: 'Reflect', icon: '🪞', action: () => navigation.navigate('Reflect') },
    { id: 3, title: 'Gratitude', icon: '🙏', action: () => {} },
    { id: 4, title: 'Mindful Walk', icon: '🚶‍♀️', action: () => {} },
    { id: 5, title: 'Journal', icon: '📝', action: () => {} },
    { id: 6, title: 'Meditation', icon: '🧘‍♀️', action: () => {} },
  ];

  const dailyWisdom = [
    "Be present in this moment",
    "Breathe deeply, let go gently",
    "Find peace in the ordinary",
    "Listen to your inner voice",
    "Embrace what is, release what was",
  ];

  const todaysWisdom = dailyWisdom[Math.floor(Math.random() * dailyWisdom.length)];

  const getFeatureColor = (id) => {
    const colors = {
      1: '#EF4444', // Red for Breathe
      2: '#6366F1', // Indigo for Reflect
      3: '#F59E0B', // Amber for Gratitude
      4: '#10B981', // Emerald for Walk
      5: '#8B5CF6', // Violet for Journal
      6: '#06B6D4', // Cyan for Meditation
    };
    return colors[id] || '#6B7280';
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Vibrant Header */}
          <View style={styles.header}>
            <Text style={styles.greeting}>Good Morning! ✨</Text>
            <Text style={styles.date}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
          </View>

          {/* Mood Check */}
          <View style={styles.moodCard}>
            <Text style={styles.cardTitle}>How are you feeling?</Text>
            <View style={styles.moodDisplay}>
              <Text style={styles.moodEmoji}>{getMoodEmoji(currentMood)}</Text>
              <View style={styles.moodInfo}>
                <Text style={styles.moodText}>{getMoodText(currentMood)}</Text>
                <Text style={styles.moodSubtext}>Tap to update your mood</Text>
              </View>
            </View>
          </View>

          {/* Breathing Exercise */}
          <View style={styles.breathingCard}>
            <View style={styles.breathingHeader}>
              <Text style={styles.breathingTitle}>Take a Deep Breath</Text>
              <Text style={styles.breathingEmoji}>🫧</Text>
            </View>
            <Animated.View
              style={[
                styles.breathingCircle,
                {
                  transform: [{
                    scale: breathAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.15],
                    }),
                  }],
                },
              ]}
            >
              <Text style={styles.breathingText}>Breathe</Text>
            </Animated.View>
            <Text style={styles.breathingSubtext}>Follow the gentle rhythm</Text>
          </View>

          {/* Daily Inspiration */}
          <View style={styles.inspirationCard}>
            <Text style={styles.inspirationEmoji}>💫</Text>
            <Text style={styles.inspirationText}>"{todaysWisdom}"</Text>
          </View>

          {/* Quick Actions */}
          <View style={styles.featuresCard}>
            <Text style={styles.cardTitle}>Quick Wellness Boost</Text>
            <View style={styles.featuresGrid}>
              {zenFeatures.map((feature) => (
                <TouchableOpacity
                  key={feature.id}
                  style={[styles.featureButton, { backgroundColor: getFeatureColor(feature.id) }]}
                  onPress={feature.action}
                >
                  <Text style={styles.featureIcon}>{feature.icon}</Text>
                  <Text style={styles.featureText}>{feature.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Journey Button */}
          <TouchableOpacity
            style={styles.journeyButton}
            onPress={() => navigation.navigate('Journey')}
          >
            <Text style={styles.journeyText}>View Your Journey</Text>
            <Ionicons name="arrow-forward" size={18} color="white" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
    letterSpacing: -0.5,
  },
  date: {
    fontSize: 16,
    color: '#6366F1',
    marginTop: 5,
    fontWeight: '500',
  },
  moodCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  moodDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodEmoji: {
    fontSize: 48,
    marginRight: 15,
  },
  moodInfo: {
    flex: 1,
  },
  moodText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  moodSubtext: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  breathingCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#06B6D4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  breathingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  breathingTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginRight: 8,
  },
  breathingEmoji: {
    fontSize: 20,
  },
  breathingCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#06B6D4',
  },
  breathingText: {
    fontSize: 16,
    color: '#0891B2',
    fontWeight: '600',
  },
  breathingSubtext: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  inspirationCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  inspirationEmoji: {
    fontSize: 32,
    marginBottom: 12,
  },
  inspirationText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: 24,
  },
  featuresCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureButton: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  journeyButton: {
    backgroundColor: '#6366F1',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  journeyText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 8,
  },
});