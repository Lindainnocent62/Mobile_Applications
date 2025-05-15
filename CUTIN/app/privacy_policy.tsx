import React from 'react';
import { ScrollView, Text, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, MARGIN } from '@/constants/theme'; 
import { router } from 'expo-router';
import Header from '@/components/header';
import Devider from '@/components/devider';

const PrivacyPolicy = () => {
  const openEmail = () => {
    Linking.openURL('mailto:info@cutin.tech');
  };

  const openPhone = () => {
    Linking.openURL('tel:0637772244');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
          back={true} 
          route={() => router.back()} 
          label={'CUTIN Privacy Policy'} 
          description={`Last Updated: ${'10/07/2023'}`}
        />
        <Devider />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.text}>
          Cutin ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you use our mobile
          application (the "App") and our services.
        </Text>

        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.text}>
          We collect information from you when you register on our App, place an order, or fill out a form.
          This information may include:
          {'\n\n'}a) Personal Identification Information: Name, email address, phone number, and physical
          address.
          {'\n\n'}b) Payment Information: Credit card details or other payment method information.
          {'\n\n'}c) Order Information: Details about the food items you order and your order history.
          {'\n\n'}d) Location Information: With your consent, we may collect and process information about your
          precise location using methods that include GPS.
          {'\n\n'}e) Device Information: We may collect information about the device you use to access our App,
          including the hardware model, operating system and version, unique device identifiers, and
          mobile network information.
        </Text>

        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.text}>
          We use the information we collect to:
          {'\n\n'}a) Process and fulfill your orders
          {'\n\n'}b) Provide and maintain our service
          {'\n\n'}c) Notify you about changes to our service
          {'\n\n'}d) Allow you to participate in interactive features of our App
          {'\n\n'}e) Provide customer support
          {'\n\n'}f) Gather analysis or valuable information so that we can improve our service
          {'\n\n'}g) Monitor the usage of our service
          {'\n\n'}h) Detect, prevent and address technical issues
          {'\n\n'}i) To identify restaurants near you and for order delivery.
          {'\n\n'}j) Provide you with news, special offers and general information about other goods, services and
          events which we offer
        </Text>

        <Text style={styles.sectionTitle}>Sharing Your Information</Text>
        <Text style={styles.text}>
          We may share your personal information with:
          {'\n\n'}a) Merchants: To fulfill your orders
          {'\n\n'}b) Service providers: Who assist us in operating our business and providing services to you
          {'\n\n'}c) Business partners: With your consent, for marketing purposes
          {'\n\n'}d) Legal authorities: When required by law or to protect our rights
          {'\n\n'}We do not sell your personal information to third parties.
        </Text>

        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.text}>
          We implement appropriate technical and organizational measures to maintain the safety of your
          personal information. However, no method of transmission over the Internet or electronic
          storage is 100% secure.
        </Text>

        <Text style={styles.sectionTitle}>Your Data Protection Rights</Text>
        <Text style={styles.text}>
          Depending on your location, you may have certain rights regarding your personal information,
          such as:
          {'\n\n'}a) The right to access, update or delete your information
          {'\n\n'}b) The right of rectification
          {'\n\n'}c) The right to object
          {'\n\n'}d) The right of restriction
          {'\n\n'}e) The right to data portability
          {'\n\n'}f) The right to withdraw consent
        </Text>

        <Text style={styles.sectionTitle}>Children's Privacy</Text>
        <Text style={styles.text}>
          Our App is not intended for use by children under the age of 13. We do not knowingly collect
          personal information from children under 13. If you are a parent or guardian and you believe
          your child has provided us with information, please contact us so we can delete it.
        </Text>

        <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.text}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the "Last updated" date.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions about this Privacy Policy, please contact us at:
          {'\n\n'}Email: <Text style={styles.link} onPress={openEmail}>info@cutin.tech</Text>
          {'\n\n'}Phone: <Text style={styles.link} onPress={openPhone}>063 777 2244</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    padding: MARGIN.allRoundMarging,
    paddingBottom: 40,
  },
  title: {
    fontSize: FONTS.medium,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  lastUpdated: {
    fontSize: FONTS.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    marginBottom: MARGIN.bottom,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: COLORS.secondary,
  },
  text: {
    fontSize: FONTS.small,
    fontFamily: FONTS.regular,
    lineHeight: 20,
    color: COLORS.text_border,
    marginBottom: 10,
  },
  link: {
    color: COLORS.link,
    textDecorationLine: 'underline',
  },
});

export default PrivacyPolicy;