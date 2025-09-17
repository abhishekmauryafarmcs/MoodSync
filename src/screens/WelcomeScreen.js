import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    mood: 5,
    mascot: 'cat',
    mascotName: '',
  });

  const mascots = [
    { id: 'cat', emoji: '🐱', name: 'Kitty' },
    { id: 'dog', emoji: '🐶', name: 'Puppy' },
    { id: 'bear', emoji: '🐻', name: 'Teddy' },
    { id: 'fox', emoji: '🦊', name: 'Foxy' },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Save user data and navigate to main app
      navigation.replace('Main');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.heroContainer}>
              <Text style={styles.heroEmoji}>🌈</Text>
              <Text style={styles.title}>Welcome to MoodSync</Text>
              <Text style={styles.subtitle}>Your vibrant wellness companion</Text>
            </View>
            <Text style={styles.description}>
              Let's create a personalized experience that brings joy and mindfulness to your daily routine.
            </Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>What's your name?</Text>
              <TextInput
                style={styles.input}
                value={userData.name}
                onChangeText={(text) => setUserData({...userData, name: text})}
                placeholder="Enter your name"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>How old are you?</Text>
              <TextInput
                style={styles.input}
                value={userData.age}
                onChangeText={(text) => setUserData({...userData, age: text})}
                placeholder="Enter your age"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.heroContainer}>
              <Text style={styles.heroEmoji}>✨</Text>
              <Text style={styles.title}>How are you feeling today?</Text>
              <Text style={styles.subtitle}>Every feeling is valid and welcome</Text>
            </View>
            <Text style={styles.description}>
              Choose a number that represents your current mood. There's no right or wrong answer!
            </Text>
            
            <View style={styles.moodContainer}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mood) => (
                <TouchableOpacity
                  key={mood}
                  style={[
                    styles.moodButton,
                    userData.mood === mood && styles.selectedMood
                  ]}
                  onPress={() => setUserData({...userData, mood})}
                >
                  <Text style={styles.moodText}>{mood}</Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <Text style={styles.moodLabel}>
              {userData.mood <= 3 ? '😢 Not great' : 
               userData.mood <= 6 ? '😐 Okay' : 
               userData.mood <= 8 ? '😊 Good' : '🤩 Amazing!'}
            </Text>
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.heroContainer}>
              <Text style={styles.heroEmoji}>🎉</Text>
              <Text style={styles.title}>Meet Your Companion!</Text>
              <Text style={styles.subtitle}>Pick your perfect wellness buddy</Text>
            </View>
            <Text style={styles.description}>
              Choose a delightful companion who will cheer you on throughout your wellness journey.
            </Text>
            
            <View style={styles.mascotGrid}>
              {mascots.map((mascot) => (
                <TouchableOpacity
                  key={mascot.id}
                  style={[
                    styles.mascotButton,
                    userData.mascot === mascot.id && styles.selectedMascot
                  ]}
                  onPress={() => setUserData({...userData, mascot: mascot.id})}
                >
                  <Text style={styles.mascotEmoji}>{mascot.emoji}</Text>
                  <Text style={styles.mascotName}>{mascot.name}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Give your companion a name:</Text>
              <TextInput
                style={styles.input}
                value={userData.mascotName}
                onChangeText={(text) => setUserData({...userData, mascotName: text})}
                placeholder={`Name your ${mascots.find(m => m.id === userData.mascot)?.name}`}
                placeholderTextColor="#999"
              />
            </View>
          </View>
        );

      case 4:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.heroContainer}>
              <Text style={styles.heroEmoji}>🚀</Text>
              <Text style={styles.title}>You're All Set!</Text>
              <Text style={styles.subtitle}>Ready to start your amazing journey</Text>
            </View>
            <Text style={styles.description}>
              Welcome aboard, {userData.name}! {userData.mascotName} is excited to be your companion on this colorful adventure.
            </Text>
            
            <View style={styles.summaryContainer}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryEmoji}>
                  {mascots.find(m => m.id === userData.mascot)?.emoji}
                </Text>
                <Text style={styles.summaryText}>{userData.mascotName || 'Your companion'}</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryEmoji}>🌟</Text>
                <Text style={styles.summaryText}>Starting mood: {userData.mood}/10</Text>
              </View>
            </View>

            <Text style={styles.motivationQuote}>
              "Every great journey begins with a single step. You've just taken yours! 💫"
            </Text>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {renderStep()}
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.nextButton,
                ((step === 1 && (!userData.name || !userData.age)) ||
                (step === 3 && !userData.mascotName)) && styles.disabledButton
              ]}
              onPress={handleNext}
              disabled={
                (step === 1 && (!userData.name || !userData.age)) ||
                (step === 3 && !userData.mascotName)
              }
            >
              <Text style={styles.nextButtonText}>
                {step === 4 ? "Begin Journey ✨" : 'Continue'}
              </Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.progressContainer}>
            {[1, 2, 3, 4].map((dot) => (
              <View
                key={dot}
                style={[
                  styles.progressDot,
                  dot <= step && styles.activeDot
                ]}
              />
            ))}
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
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heroContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  heroEmoji: {
    fontSize: 64,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    color: '#6366F1',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1F2937',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  moodButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedMood: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
    transform: [{ scale: 1.1 }],
  },
  moodText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
  },
  moodLabel: {
    fontSize: 18,
    color: '#6366F1',
    fontWeight: '600',
    marginTop: 10,
  },
  mascotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  mascotButton: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  selectedMascot: {
    backgroundColor: '#EEF2FF',
    borderColor: '#6366F1',
    borderWidth: 3,
    transform: [{ scale: 1.05 }],
  },
  mascotEmoji: {
    fontSize: 40,
  },
  mascotName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginTop: 5,
  },
  summaryContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  summaryEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '600',
  },
  motivationQuote: {
    fontSize: 15,
    color: '#6366F1',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '500',
    marginTop: 15,
    lineHeight: 22,
  },
  buttonContainer: {
    marginBottom: 25,
  },
  nextButton: {
    backgroundColor: '#6366F1',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  disabledButton: {
    backgroundColor: '#94A3B8',
    shadowOpacity: 0.1,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CBD5E1',
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#6366F1',
    transform: [{ scale: 1.2 }],
  },
});