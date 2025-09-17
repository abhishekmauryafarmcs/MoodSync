import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function CheckInScreen() {
  const [mood, setMood] = useState(5);
  const [gratitude, setGratitude] = useState('');
  const [reflection, setReflection] = useState('');

  const moodEmojis = ['🌧️', '⛈️', '☁️', '⛅', '🌤️', '🌞', '☀️', '🌅', '🌈', '✨'];
  
  const moodLabels = [
    'Heavy storms', 'Thunderous', 'Overcast', 'Partly cloudy', 'Clearing up',
    'Bright', 'Radiant', 'Dawn breaking', 'Rainbow emerging', 'Sparkling clear'
  ];

  const handleSubmit = () => {
    Alert.alert(
      'Reflection Complete 🌸',
      'Your mindful check-in has been saved. Thank you for taking this moment with yourself.',
      [{ text: 'Continue' }]
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.headerEmoji}>✨</Text>
            <Text style={styles.title}>Daily Check-In</Text>
            <Text style={styles.subtitle}>How are you feeling right now?</Text>
          </View>

          {/* Mood Check */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your Current Mood</Text>
            <View style={styles.moodDisplay}>
              <Text style={styles.moodEmoji}>{moodEmojis[mood - 1]}</Text>
              <Text style={styles.moodLabel}>{moodLabels[mood - 1]}</Text>
            </View>
            
            <View style={styles.moodSelector}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.moodButton,
                    mood === num && styles.selectedMood
                  ]}
                  onPress={() => setMood(num)}
                >
                  <Text style={[
                    styles.moodButtonText,
                    mood === num && styles.selectedMoodText
                  ]}>
                    {num}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Gratitude */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardEmoji}>🙏</Text>
              <Text style={styles.cardTitle}>Gratitude Moment</Text>
            </View>
            <Text style={styles.inputLabel}>What are you grateful for today?</Text>
            <TextInput
              style={styles.textInput}
              value={gratitude}
              onChangeText={setGratitude}
              placeholder="I'm grateful for..."
              placeholderTextColor="#94A3B8"
              multiline
              numberOfLines={3}
            />
          </View>

          {/* Reflection */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardEmoji}>💭</Text>
              <Text style={styles.cardTitle}>Quick Reflection</Text>
            </View>
            <Text style={styles.inputLabel}>What's on your mind?</Text>
            <TextInput
              style={styles.textInput}
              value={reflection}
              onChangeText={setReflection}
              placeholder="I'm thinking about..."
              placeholderTextColor="#94A3B8"
              multiline
              numberOfLines={4}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Complete Check-In</Text>
            <Ionicons name="checkmark-circle" size={20} color="white" />
          </TouchableOpacity>

          <Text style={styles.encouragement}>
            You're doing amazing by taking time for yourself! 🌟
          </Text>
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
  moodDisplay: {
    alignItems: 'center',
    marginBottom: 20,
  },
  moodEmoji: {
    fontSize: 56,
    marginBottom: 10,
  },
  moodLabel: {
    fontSize: 18,
    color: '#6366F1',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  moodSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 15,
  },
  moodButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  selectedMood: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
    transform: [{ scale: 1.1 }],
  },
  moodButtonText: {
    fontSize: 16,
    color: '#475569',
    fontWeight: '600',
  },
  selectedMoodText: {
    color: 'white',
  },

  inputLabel: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 10,
    fontWeight: '600',
  },
  textInput: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1F2937',
    minHeight: 80,
    textAlignVertical: 'top',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    fontWeight: '400',
  },
  submitButton: {
    backgroundColor: '#6366F1',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 8,
  },
  encouragement: {
    fontSize: 16,
    color: '#6366F1',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
    fontWeight: '500',
  },
});