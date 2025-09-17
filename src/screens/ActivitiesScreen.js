import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ActivitiesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('breathing');
  const [journalEntry, setJournalEntry] = useState('');
  const [showJournalModal, setShowJournalModal] = useState(false);
  const [gratitudeItems, setGratitudeItems] = useState(['']);

  const categories = [
    { id: 'breathing', title: 'Breathing', icon: 'fitness', color: '#6BCF7F' },
    { id: 'meditation', title: 'Meditation', icon: 'flower', color: '#6B73FF' },
    { id: 'journal', title: 'Journal', icon: 'book', color: '#FFD93D' },
    { id: 'gratitude', title: 'Gratitude', icon: 'heart', color: '#FF6B6B' },
    { id: 'movement', title: 'Movement', icon: 'walk', color: '#4ECDC4' },
  ];

  const breathingExercises = [
    {
      name: '4-7-8 Breathing',
      description: 'Inhale for 4, hold for 7, exhale for 8',
      duration: '4 minutes',
      difficulty: 'Beginner',
    },
    {
      name: 'Box Breathing',
      description: 'Equal counts for inhale, hold, exhale, hold',
      duration: '5 minutes',
      difficulty: 'Beginner',
    },
    {
      name: 'Belly Breathing',
      description: 'Deep diaphragmatic breathing',
      duration: '6 minutes',
      difficulty: 'Easy',
    },
  ];

  const meditations = [
    {
      name: 'Body Scan',
      description: 'Progressive relaxation through your body',
      duration: '10 minutes',
      difficulty: 'Beginner',
    },
    {
      name: 'Loving Kindness',
      description: 'Send compassion to yourself and others',
      duration: '8 minutes',
      difficulty: 'Intermediate',
    },
    {
      name: 'Mindful Observation',
      description: 'Focus on your surroundings mindfully',
      duration: '5 minutes',
      difficulty: 'Easy',
    },
  ];

  const movements = [
    {
      name: 'Gentle Stretches',
      description: 'Simple stretches to release tension',
      duration: '10 minutes',
      difficulty: 'Easy',
    },
    {
      name: 'Walking Meditation',
      description: 'Mindful walking practice',
      duration: '15 minutes',
      difficulty: 'Easy',
    },
    {
      name: 'Yoga Flow',
      description: 'Basic yoga sequence for beginners',
      duration: '20 minutes',
      difficulty: 'Beginner',
    },
  ];

  const journalPrompts = [
    "What am I feeling right now, and why?",
    "What's one thing that went well today?",
    "What challenge am I facing, and how can I approach it?",
    "What would I tell a friend in my situation?",
    "What am I most grateful for today?",
    "How have I grown this week?",
    "What do I need more of in my life?",
    "What patterns do I notice in my thoughts?",
  ];

  const addGratitudeItem = () => {
    setGratitudeItems([...gratitudeItems, '']);
  };

  const updateGratitudeItem = (index, value) => {
    const newItems = [...gratitudeItems];
    newItems[index] = value;
    setGratitudeItems(newItems);
  };

  const renderActivityList = () => {
    let activities = [];
    
    switch (selectedCategory) {
      case 'breathing':
        activities = breathingExercises;
        break;
      case 'meditation':
        activities = meditations;
        break;
      case 'movement':
        activities = movements;
        break;
      default:
        activities = [];
    }

    if (selectedCategory === 'journal') {
      return (
        <View style={styles.journalContainer}>
          <Text style={styles.sectionTitle}>Journal Prompts</Text>
          <ScrollView style={styles.promptsList}>
            {journalPrompts.map((prompt, index) => (
              <TouchableOpacity
                key={index}
                style={styles.promptItem}
                onPress={() => setShowJournalModal(true)}
              >
                <Text style={styles.promptText}>{prompt}</Text>
                <Ionicons name="chevron-forward" size={20} color="#999" />
              </TouchableOpacity>
            ))}
          </ScrollView>
          
          <TouchableOpacity
            style={styles.freeWriteButton}
            onPress={() => setShowJournalModal(true)}
          >
            <Ionicons name="create" size={20} color="white" />
            <Text style={styles.freeWriteText}>Free Write</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (selectedCategory === 'gratitude') {
      return (
        <View style={styles.gratitudeContainer}>
          <Text style={styles.sectionTitle}>Daily Gratitude Practice</Text>
          <Text style={styles.gratitudeDescription}>
            Write down 3 things you're grateful for today
          </Text>
          
          {gratitudeItems.map((item, index) => (
            <View key={index} style={styles.gratitudeItem}>
              <Text style={styles.gratitudeNumber}>{index + 1}.</Text>
              <TextInput
                style={styles.gratitudeInput}
                value={item}
                onChangeText={(text) => updateGratitudeItem(index, text)}
                placeholder="I'm grateful for..."
                placeholderTextColor="#999"
                multiline
              />
            </View>
          ))}
          
          {gratitudeItems.length < 5 && (
            <TouchableOpacity
              style={styles.addGratitudeButton}
              onPress={addGratitudeItem}
            >
              <Ionicons name="add" size={20} color="#FF6B6B" />
              <Text style={styles.addGratitudeText}>Add another</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity style={styles.saveGratitudeButton}>
            <Text style={styles.saveGratitudeText}>Save Gratitude List</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.activitiesList}>
        {activities.map((activity, index) => (
          <TouchableOpacity key={index} style={styles.activityItem}>
            <View style={styles.activityContent}>
              <Text style={styles.activityName}>{activity.name}</Text>
              <Text style={styles.activityDescription}>{activity.description}</Text>
              <View style={styles.activityMeta}>
                <Text style={styles.activityDuration}>{activity.duration}</Text>
                <Text style={styles.activityDifficulty}>{activity.difficulty}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Ionicons name="play" size={24} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderJournalModal = () => (
    <Modal
      visible={showJournalModal}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.journalModal}>
          <View style={styles.journalHeader}>
            <Text style={styles.journalTitle}>Private Journal</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowJournalModal(false)}
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          
          <TextInput
            style={styles.journalTextArea}
            value={journalEntry}
            onChangeText={setJournalEntry}
            placeholder="Write your thoughts here... This is your private space."
            placeholderTextColor="#999"
            multiline
            textAlignVertical="top"
          />
          
          <View style={styles.journalFooter}>
            <Text style={styles.journalNote}>
              🔒 Your entries are private and encrypted
            </Text>
            <TouchableOpacity style={styles.saveJournalButton}>
              <Text style={styles.saveJournalText}>Save Entry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Mindful Activities 🧘‍♀️</Text>
          <Text style={styles.subtitle}>Nurture your mind and soul</Text>

          {/* Category Selector */}
          <View style={styles.categoryContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryButton,
                    { backgroundColor: category.color },
                    selectedCategory === category.id && styles.selectedCategory
                  ]}
                  onPress={() => setSelectedCategory(category.id)}
                >
                  <Ionicons name={category.icon} size={24} color="white" />
                  <Text style={styles.categoryText}>{category.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Activity Content */}
          <View style={styles.contentContainer}>
            {renderActivityList()}
          </View>

          {/* Daily Tips */}
          <View style={styles.tipsCard}>
            <Text style={styles.tipsTitle}>💡 Today's Mindfulness Tip</Text>
            <Text style={styles.tipsText}>
              "Take three deep breaths before checking your phone in the morning. 
              This simple practice helps you start the day with intention rather than reaction."
            </Text>
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActionsContainer}>
            <Text style={styles.quickActionsTitle}>Quick Start</Text>
            <View style={styles.quickActionsGrid}>
              <TouchableOpacity style={styles.quickActionItem}>
                <Ionicons name="fitness" size={20} color="#6BCF7F" />
                <Text style={styles.quickActionText}>1-Min Breathing</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickActionItem}>
                <Ionicons name="flower" size={20} color="#6B73FF" />
                <Text style={styles.quickActionText}>Quick Meditation</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickActionItem}>
                <Ionicons name="walk" size={20} color="#4ECDC4" />
                <Text style={styles.quickActionText}>Mindful Walk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {renderJournalModal()}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 10,
  },
  selectedCategory: {
    transform: [{ scale: 1.05 }],
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  activitiesList: {
    marginTop: 10,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  activityContent: {
    flex: 1,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  activityMeta: {
    flexDirection: 'row',
  },
  activityDuration: {
    fontSize: 12,
    color: '#999',
    marginRight: 15,
  },
  activityDifficulty: {
    fontSize: 12,
    color: '#999',
  },
  playButton: {
    backgroundColor: '#6B73FF',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  journalContainer: {
    flex: 1,
  },
  promptsList: {
    maxHeight: 300,
    marginBottom: 20,
  },
  promptItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 8,
  },
  promptText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  freeWriteButton: {
    backgroundColor: '#FFD93D',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  freeWriteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  gratitudeContainer: {
    flex: 1,
  },
  gratitudeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  gratitudeItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  gratitudeNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginRight: 10,
    marginTop: 10,
  },
  gratitudeInput: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#333',
    minHeight: 50,
    textAlignVertical: 'top',
  },
  addGratitudeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 20,
  },
  addGratitudeText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  saveGratitudeButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
  },
  saveGratitudeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  tipsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  quickActionsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  quickActionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickActionItem: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    minWidth: 80,
  },
  quickActionText: {
    fontSize: 12,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  journalModal: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    maxHeight: '80%',
  },
  journalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  journalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  journalTextArea: {
    padding: 20,
    fontSize: 16,
    color: '#333',
    minHeight: 300,
    textAlignVertical: 'top',
  },
  journalFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  journalNote: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginBottom: 15,
  },
  saveJournalButton: {
    backgroundColor: '#FFD93D',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
  },
  saveJournalText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});