import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, MARGIN } from '@/constants/theme';
import { MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from '@/components/header';
import Devider from '@/components/devider';

const HelpCenter = () => {
  const contactMethods = [
    {
      id: 1,
      title: 'Email Support',
      description: 'Send us an email and we\'ll get back to you within 24 hours',
      icon: <MaterialIcons name="email" size={24} color={COLORS.accent} />,
      action: () => Linking.openURL('mailto:support@cutin.tech'),
      value: 'support@cutin.tech'
    },
    {
      id: 2,
      title: 'Call Us',
      description: 'Speak directly with our customer support team',
      icon: <FontAwesome name="phone" size={24} color={COLORS.accent} />,
      action: () => Linking.openURL('tel:0637772244'),
      value: '063 777 2244'
    },
    {
      id: 3,
      title: 'FAQ',
      description: 'Find answers to common questions',
      icon: <MaterialIcons name="help-outline" size={24} color={COLORS.accent} />,
      action: () => console.log('Navigate to FAQ'),
      value: 'View FAQs'
    },
    {
      id: 4,
      title: 'Live Chat',
      description: 'Chat with a support agent in real-time',
      icon: <Entypo name="chat" size={24} color={COLORS.accent} />,
      action: () => console.log('Open live chat'),
      value: 'Start Chat'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I place an order?',
      answer: 'To place an order, browse restaurants, select items, add to cart, and proceed to checkout.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards and mobile payment options.'
    },
    {
      id: 3,
      question: 'How can I track my order?',
      answer: 'You can track your order in real-time through the app once it\'s been confirmed.'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header 
          back={true} 
          route={() => router.back()} 
          label={'Help Center'} 
          description={'How can we help you today?'}
        />
      <Devider />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Support</Text>
          {contactMethods.map((method) => (
            <TouchableOpacity 
              key={method.id} 
              style={styles.contactCard}
              onPress={method.action}
            >
              <View style={styles.iconContainer}>
                {method.icon}
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactTitle}>{method.title}</Text>
                <Text style={styles.contactDescription}>{method.description}</Text>
              </View>
              <Text style={styles.contactValue}>{method.value}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          {faqs.map((faq) => (
            <View key={faq.id} style={styles.faqCard}>
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    padding: MARGIN.allRoundMarging,
    paddingBottom: 40,
  },
  header: {
    fontSize: FONTS.medium,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: FONTS.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    marginBottom: MARGIN.bottom,
  },
  section: {
    marginBottom: MARGIN.bottom,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: COLORS.secondary,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: FONTS.small,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    marginBottom: 3,
  },
  contactDescription: {
    fontSize: FONTS.small - 2,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
  },
  contactValue: {
    fontSize: FONTS.small - 1,
    fontFamily: FONTS.regular,
    color: COLORS.accent,
  },
  faqCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  faqQuestion: {
    fontSize: FONTS.small,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: FONTS.small - 1,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: 20,
  },
  viewAllButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  viewAllText: {
    fontSize: FONTS.small,
    fontFamily: FONTS.bold,
    color: COLORS.accent,
  },
  hoursCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 15,
  },
  hoursText: {
    fontSize: FONTS.small,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    marginBottom: 5,
  },
});

export default HelpCenter;