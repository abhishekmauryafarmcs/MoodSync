# 🌈 MoodSync

<div align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.81.4-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-~54.0.7-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</div>

<div align="center">
  <h3>✨ Your vibrant wellness companion for mindful living ✨</h3>
  <p>A beautiful React Native app that helps you track your mood, practice gratitude, and build healthy mental wellness habits with a delightful, colorful interface.</p>
</div>

---

## 🎯 **Features**

### 🌟 **Core Wellness Tools**
- **🌤️ Mood Tracking** - Track your emotional weather with beautiful, intuitive emojis
- **🫧 Breathing Exercises** - Animated breathing guide for instant calm
- **🙏 Gratitude Practice** - Daily appreciation journaling
- **💭 Reflection Journal** - Mindful self-awareness and thoughts
- **🚀 Progress Tracking** - Visual journey of your wellness growth
- **✨ Mindful Moments** - Capture and cherish beautiful life moments
- **💫 Daily Inspiration** - Motivational quotes to brighten your day
- **🐱 Wellness Companion** - Personalized mascot to support your journey
- **📊 Achievement Stats** - Celebrate your wellness milestones
- **⚡ Quick Actions** - Fast access to your favorite wellness tools

### 🎨 **Beautiful Design**
- **Vibrant Color Palette** - Modern indigo theme with colorful accents
- **Smooth Animations** - Delightful micro-interactions and transitions
- **Clean Typography** - Easy-to-read fonts with perfect spacing
- **Shadow Effects** - Depth and dimension for a premium feel
- **Responsive Design** - Looks great on all screen sizes

---

## 📱 **Screenshots**

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://via.placeholder.com/250x500/6366F1/FFFFFF?text=Welcome+Screen" alt="Welcome Screen" width="200"/>
        <br><b>🌈 Welcome & Onboarding</b>
      </td>
      <td align="center">
        <img src="https://via.placeholder.com/250x500/6366F1/FFFFFF?text=Home+Dashboard" alt="Home Screen" width="200"/>
        <br><b>🏠 Home Dashboard</b>
      </td>
      <td align="center">
        <img src="https://via.placeholder.com/250x500/6366F1/FFFFFF?text=Daily+Check-in" alt="Check-in Screen" width="200"/>
        <br><b>✨ Daily Check-in</b>
      </td>
      <td align="center">
        <img src="https://via.placeholder.com/250x500/6366F1/FFFFFF?text=Journey+Progress" alt="Journey Screen" width="200"/>
        <br><b>🚀 Journey Progress</b>
      </td>
    </tr>
  </table>
</div>

---

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekmauryafarmcs/MoodSync.git
   cd MoodSync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go app (iOS/Android)
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator
   - Or press `w` for web browser

---

## 🏗️ **Project Structure**

```
MoodSync/
├── 📱 App.js                 # Main app component with navigation
├── 📋 app.json              # Expo configuration
├── 🎨 assets/               # Images, icons, and static assets
├── 📦 src/
│   ├── 🖥️ screens/          # All app screens
│   │   ├── WelcomeScreen.js  # Onboarding flow
│   │   ├── HomeScreen.js     # Main dashboard
│   │   ├── CheckInScreen.js  # Daily mood check-in
│   │   └── JourneyScreen.js  # Progress tracking
│   └── 🛠️ utils/            # Utility functions
└── 📄 package.json         # Dependencies and scripts
```

---

## 🎨 **Design System**

### Color Palette
```css
Primary:    #6366F1  /* Vibrant Indigo */
Secondary:  #F59E0B  /* Warm Amber */
Success:    #10B981  /* Fresh Green */
Warning:    #EF4444  /* Alert Red */
Info:       #06B6D4  /* Cool Cyan */
Purple:     #8B5CF6  /* Rich Violet */

Background: #F8FAFC  /* Light Slate */
Surface:    #FFFFFF  /* Pure White */
Text:       #1E293B  /* Dark Slate */
Muted:      #64748B  /* Medium Gray */
```

### Typography
- **Headers**: Inter/System Font, 800 weight
- **Body**: Inter/System Font, 400-600 weight
- **Captions**: Inter/System Font, 300-500 weight

---

## 🧩 **Key Components**

### Navigation
- **Tab Navigation**: 3 main tabs (Home, Reflect, Journey)
- **Stack Navigation**: Welcome flow and modal screens
- **Custom Tab Bar**: Rounded corners with shadows

### Screens
- **WelcomeScreen**: 4-step onboarding with mascot selection
- **HomeScreen**: Dashboard with mood check and quick actions
- **CheckInScreen**: Daily reflection and gratitude practice
- **JourneyScreen**: Progress visualization and achievements

### Features
- **Mood Tracking**: 10-point scale with weather emojis
- **Animations**: Breathing circle, scaling buttons, smooth transitions
- **Data Persistence**: AsyncStorage for user preferences
- **Responsive Design**: Adapts to different screen sizes

---

## 🛠️ **Built With**

- **[React Native](https://reactnative.dev/)** - Mobile app framework
- **[Expo](https://expo.dev/)** - Development platform and tools
- **[React Navigation](https://reactnavigation.org/)** - Navigation library
- **[Expo Vector Icons](https://docs.expo.dev/guides/icons/)** - Beautiful icons
- **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)** - Safe area handling
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** - Gradient backgrounds
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)** - Local data storage

---

## 📈 **Roadmap**

### 🎯 **Phase 1** (Current)
- [x] Core mood tracking
- [x] Daily check-ins
- [x] Gratitude practice
- [x] Beautiful UI design
- [x] Progress visualization

### 🚀 **Phase 2** (Coming Soon)
- [ ] Data export and backup
- [ ] Customizable themes
- [ ] Reminder notifications
- [ ] Weekly/monthly insights
- [ ] Social sharing features

### 🌟 **Phase 3** (Future)
- [ ] AI-powered insights
- [ ] Integration with health apps
- [ ] Community features
- [ ] Professional therapist connect
- [ ] Advanced analytics

---

## 🤝 **Contributing**

We love contributions! Here's how you can help make MoodSync even better:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test on both iOS and Android
- Update documentation as needed

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 **Author**

**Abhishek Maurya**
- GitHub: [@abhishekmauryafarmcs](https://github.com/abhishekmauryafarmcs)
- Email: [your-email@example.com](mailto:your-email@example.com)

---

## 🙏 **Acknowledgments**

- Thanks to the React Native and Expo communities
- Inspired by modern wellness and mindfulness practices
- Icons and emojis from various open-source projects
- Color palette inspired by modern design systems

---

## 💝 **Support**

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with friends

---

<div align="center">
  <h3>🌈 Made with ❤️ for mental wellness and mindful living</h3>
  <p><i>"Every small step towards wellness is a victory worth celebrating"</i></p>
  
  <br>
  
  **[⬆ Back to Top](#-moodsync)**
</div>