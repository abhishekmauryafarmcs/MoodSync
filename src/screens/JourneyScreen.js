import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function JourneyScreen() {
  const [selectedView, setSelectedView] = useState('progress');

  // Simplified journey data
  const journeyStats = {
    daysActive: 12,
    reflections: 8,
    insights: 3,
  };

  const recentMoods = [
    { day: 'Today', weather: '☀️', feeling: 'Clear skies' },
    { day: 'Yesterday', weather: '⛅', feeling: 'Partly cloudy' },
    { day: '2 days ago', weather: '🌤️', feeling: 'Mostly sunny' },
    { day: '3 days ago', weather: '☁️', feeling: 'Overcast' },
    { day: '4 days ago', weather: '🌞', feeling: 'Bright' },
  ];

  const mindfulMoments = [
    { date: 'Today', moment: 'Noticed the morning light filtering through leaves' },
    { date: 'Yesterday', moment: 'Felt grateful for a warm cup of tea' },
    { date: '2 days ago', moment: 'Appreciated a friend\'s kind message' },
  ];



  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.headerEmoji}>🚀</Text>
            <Text style={styles.title}>Your Journey</Text>
            <Text style={styles.subtitle}>Track your amazing progress</Text>
          </View>

          {/* Journey Stats */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your Achievements</Text>
            <View style={styles.statsGrid}>
              <View style={[styles.statItem, { backgroundColor: '#EF4444' }]}>
                <Text style={styles.statNumber}>{journeyStats.daysActive}</Text>
                <Text style={styles.statLabel}>Active Days</Text>
              </View>
              <View style={[styles.statItem, { backgroundColor: '#10B981' }]}>
                <Text style={styles.statNumber}>{journeyStats.reflections}</Text>
                <Text style={styles.statLabel}>Reflections</Text>
              </View>
              <View style={[styles.statItem, { backgroundColor: '#F59E0B' }]}>
                <Text style={styles.statNumber}>{journeyStats.insights}</Text>
                <Text style={styles.statLabel}>Insights</Text>
              </View>
            </View>
          </View>

          {/* Recent Moods */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardEmoji}>🌈</Text>
              <Text style={styles.cardTitle}>Recent Mood Journey</Text>
            </View>
            {recentMoods.map((mood, index) => (
              <View key={index} style={styles.weatherItem}>
                <Text style={styles.weatherEmoji}>{mood.weather}</Text>
                <View style={styles.weatherContent}>
                  <Text style={styles.weatherDay}>{mood.day}</Text>
                  <Text style={styles.weatherFeeling}>{mood.feeling}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Mindful Moments */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardEmoji}>✨</Text>
              <Text style={styles.cardTitle}>Beautiful Moments</Text>
            </View>
            {mindfulMoments.map((moment, index) => (
              <View key={index} style={styles.momentItem}>
                <View style={styles.momentDot} />
                <View style={styles.momentContent}>
                  <Text style={styles.momentDate}>{moment.date}</Text>
                  <Text style={styles.momentText}>"{moment.moment}"</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Inspiration Quote */}
          <View style={styles.quoteCard}>
            <Text style={styles.quoteEmoji}>💫</Text>
            <Text style={styles.quoteText}>
              "Every step forward is a victory. You're doing amazing!"
            </Text>
          </View>
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
  headerEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6366F1',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  card: {
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    opacity: 0.9,
  },
  weatherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
  },
  weatherEmoji: {
    fontSize: 28,
    marginRight: 15,
    width: 35,
  },
  weatherContent: {
    flex: 1,
  },
  weatherDay: {
    fontSize: 15,
    color: '#1E293B',
    fontWeight: '600',
    marginBottom: 2,
  },
  weatherFeeling: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  momentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingVertical: 8,
  },
  momentDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6366F1',
    marginTop: 6,
    marginRight: 15,
  },
  momentContent: {
    flex: 1,
  },
  momentDate: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 4,
  },
  momentText: {
    fontSize: 15,
    color: '#374151',
    fontWeight: '400',
    fontStyle: 'italic',
    lineHeight: 22,
  },
  quoteCard: {
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
  quoteEmoji: {
    fontSize: 32,
    marginBottom: 12,
  },
  quoteText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
    fontStyle: 'italic',
    fontWeight: '500',
  },
});