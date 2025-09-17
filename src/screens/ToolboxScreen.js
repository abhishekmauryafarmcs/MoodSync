import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ToolboxScreen() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [breathingCount, setBreathingCount] = useState(0);

  const tools = [
    {
      id: 'calm',
      title: 'Calm Corner',
      subtitle: 'Find your peace',
      icon: 'leaf',
      color: '#6BCF7F',
      items: [
        { name: 'Deep Breathing', duration: '2 min', icon: 'fitness' },
        { name: 'Nature Sounds', duration: '5 min', icon: 'musical-notes' },
        { name: 'Soft Music', duration: '3 min', icon: 'headset' },
        { name: 'Meditation', duration: '5 min', icon: 'flower' },
      ]
    },
    {
      id: 'energy',
      title: 'Energy Boost',
      subtitle: 'Recharge yourself',
      icon: 'flash',
      color: '#FFD93D',
      items: [
        { name: 'Upbeat Playlist', duration: '10 min', icon: 'musical-notes' },
        { name: 'Quick Workout', duration: '5 min', icon: 'barbell' },
        { name: 'Motivational Quotes', duration: '1 min', icon: 'bulb' },
        { name: 'Dance Break', duration: '3 min', icon: 'happy' },
      ]
    },
    {
      id: 'focus',
      title: 'Focus Zone',
      subtitle: 'Get in the zone',
      icon: 'eye',
      color: '#6B73FF',
      items: [
        { name: 'Focus Music', duration: '15 min', icon: 'headset' },
        { name: 'Concentration Timer', duration: '25 min', icon: 'timer' },
        { name: 'Goal Reminder', duration: '1 min', icon: 'flag' },
        { name: 'Mind Clearing', duration: '3 min', icon: 'refresh' },
      ]
    },
    {
      id: 'sos',
      title: 'SOS Support',
      subtitle: 'Immediate help',
      icon: 'medical',
      color: '#FF6B6B',
      items: [
        { name: 'Crisis Hotline', duration: 'Now', icon: 'call' },
        { name: 'Emergency Contacts', duration: 'Now', icon: 'people' },
        { name: 'Grounding Exercise', duration: '2 min', icon: 'hand-left' },
        { name: 'Safe Space', duration: '5 min', icon: 'shield-checkmark' },
      ]
    }
  ];

  const startBreathingExercise = () => {
    setBreathingActive(true);
    setBreathingCount(0);
    setBreathingPhase('inhale');
    
    // Simple breathing cycle
    const breathingCycle = () => {
      setTimeout(() => {
        setBreathingPhase('hold');
        setTimeout(() => {
          setBreathingPhase('exhale');
          setTimeout(() => {
            setBreathingCount(prev => prev + 1);
            if (breathingCount < 5) {
              setBreathingPhase('inhale');
              breathingCycle();
            } else {
              setBreathingActive(false);
              setSelectedTool(null);
            }
          }, 4000);
        }, 2000);
      }, 4000);
    };
    
    breathingCycle();
  };

  const renderToolModal = () => {
    if (!selectedTool) return null;

    const tool = tools.find(t => t.id === selectedTool);

    return (
      <Modal
        visible={!!selectedTool}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{tool.title}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedTool(null)}
              >
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              {tool.items.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.toolItem, { borderLeftColor: tool.color }]}
                  onPress={() => {
                    if (item.name === 'Deep Breathing') {
                      startBreathingExercise();
                    }
                  }}
                >
                  <View style={styles.toolItemContent}>
                    <Ionicons name={item.icon} size={24} color={tool.color} />
                    <View style={styles.toolItemText}>
                      <Text style={styles.toolItemName}>{item.name}</Text>
                      <Text style={styles.toolItemDuration}>{item.duration}</Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#999" />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  const renderBreathingModal = () => (
    <Modal
      visible={breathingActive}
      animationType="fade"
      transparent={true}
    >
      <View style={styles.breathingOverlay}>
        <View style={styles.breathingContent}>
          <Text style={styles.breathingTitle}>Deep Breathing</Text>
          <Text style={styles.breathingCount}>Round {breathingCount + 1} of 6</Text>
          
          <View style={styles.breathingCircle}>
            <Text style={styles.breathingPhaseText}>
              {breathingPhase === 'inhale' ? 'Breathe In' :
               breathingPhase === 'hold' ? 'Hold' : 'Breathe Out'}
            </Text>
          </View>
          
          <Text style={styles.breathingInstruction}>
            {breathingPhase === 'inhale' ? 'Slowly breathe in through your nose...' :
             breathingPhase === 'hold' ? 'Hold your breath gently...' : 
             'Slowly breathe out through your mouth...'}
          </Text>
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
          <Text style={styles.title}>Instant Relief Toolbox 🧰</Text>
          <Text style={styles.subtitle}>Quick tools to help you feel better</Text>

          <View style={styles.toolsGrid}>
            {tools.map((tool) => (
              <TouchableOpacity
                key={tool.id}
                style={[styles.toolCard, { backgroundColor: tool.color }]}
                onPress={() => setSelectedTool(tool.id)}
              >
                <View style={styles.toolCardContent}>
                  <Ionicons name={tool.icon} size={40} color="white" />
                  <Text style={styles.toolTitle}>{tool.title}</Text>
                  <Text style={styles.toolSubtitle}>{tool.subtitle}</Text>
                </View>
                <View style={styles.toolCardFooter}>
                  <Text style={styles.toolCardFooterText}>Tap to explore</Text>
                  <Ionicons name="arrow-forward" size={16} color="white" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Quick Access Buttons */}
          <View style={styles.quickAccessContainer}>
            <Text style={styles.quickAccessTitle}>Quick Access</Text>
            <View style={styles.quickAccessGrid}>
              <TouchableOpacity
                style={styles.quickAccessButton}
                onPress={() => startBreathingExercise()}
              >
                <Ionicons name="fitness" size={24} color="#6BCF7F" />
                <Text style={styles.quickAccessText}>30s Breathing</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickAccessButton}>
                <Ionicons name="musical-notes" size={24} color="#FFD93D" />
                <Text style={styles.quickAccessText}>Calm Music</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickAccessButton}>
                <Ionicons name="call" size={24} color="#FF6B6B" />
                <Text style={styles.quickAccessText}>Crisis Line</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Emergency Section */}
          <View style={styles.emergencyCard}>
            <Text style={styles.emergencyTitle}>Need Immediate Help?</Text>
            <Text style={styles.emergencyText}>
              If you're having thoughts of self-harm or suicide, please reach out immediately.
            </Text>
            <TouchableOpacity style={styles.emergencyButton}>
              <Ionicons name="call" size={20} color="white" />
              <Text style={styles.emergencyButtonText}>Crisis Hotline</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      {renderToolModal()}
      {renderBreathingModal()}
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
    marginBottom: 30,
  },
  toolsGrid: {
    marginBottom: 30,
  },
  toolCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },
  toolCardContent: {
    alignItems: 'center',
    marginBottom: 15,
  },
  toolTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
  },
  toolSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  toolCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolCardFooterText: {
    color: 'white',
    fontSize: 14,
    marginRight: 5,
  },
  quickAccessContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  quickAccessTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickAccessButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    minWidth: 80,
  },
  quickAccessText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
  emergencyCard: {
    backgroundColor: '#FF6B6B',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  emergencyText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  emergencyButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emergencyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  modalBody: {
    padding: 20,
  },
  toolItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
  },
  toolItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  toolItemText: {
    marginLeft: 15,
  },
  toolItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  toolItemDuration: {
    fontSize: 14,
    color: '#666',
  },
  breathingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(107, 207, 127, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  breathingContent: {
    alignItems: 'center',
    padding: 40,
  },
  breathingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  breathingCount: {
    fontSize: 16,
    color: 'white',
    marginBottom: 40,
  },
  breathingCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  breathingPhaseText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  breathingInstruction: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
  },
});