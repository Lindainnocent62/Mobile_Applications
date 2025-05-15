import Devider from '@/components/devider';
import Header from '@/components/header';
import { COLORS } from '@/constants/theme';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TermsAndConditions = () => {
  const openEmail = () => {
    Linking.openURL('mailto:support@cutin.tech');
  };

  const openPhone = () => {
    Linking.openURL('tel:0637772244');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
          back={true} 
          route={() => router.back()} 
          label={'Terms and Conditions'} 
          description={``}
        />
      <Devider />
      <ScrollView contentContainerStyle={styles.contentContainer}>        
        <Text style={styles.sectionTitle}>Acceptance of Terms</Text>
        <Text style={styles.text}>
          By downloading, installing, or using the Cutin app, you agree to be bound by these Terms and Conditions. 
          If you do not agree to these terms, do not use the app.
        </Text>

        <Text style={styles.sectionTitle}>Description of Services</Text>
        <Text style={styles.text}>
          Cutin is a food ordering and takeout platform that connects users with restaurants, tuckshops and eateries 
          in their area. Users can browse menus, place orders, and pay for their meals directly through the app.
        </Text>

        <Text style={styles.sectionTitle}>User Accounts</Text>
        <Text style={styles.text}>
          • To create an account and order food independently, users must be 18 years or older.
          {'\n'}• With parental permission and involvement, users under 18 may use the app to browse menus and place 
          orders from authorized school tuckshops participating in the Cutin platform.
          {'\n'}• Cutin will implement additional safeguards to protect the privacy and security of users under 18, 
          particularly when it comes to payment processing.
          {'\n'}• You must create an account to use Cutin. You are responsible for maintaining the confidentiality 
          of your account information and for all activities that occur under your account.
          {'\n'}• Use of the App Cutin is designed for personal, non-commercial use. You agree not to misuse the 
          service or help anyone else do so.
        </Text>

        <Text style={styles.sectionTitle}>User Conduct</Text>
        <Text style={styles.text}>
          You agree to use the Cutin app for lawful purposes only. You will not:
          {'\n'}• Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, 
          obscene, hateful, or racially or ethnically offensive.
          {'\n'}• Interfere with the Cutin app or its servers or networks.
          {'\n'}• Violate any applicable laws or regulations.
        </Text>

        <Text style={styles.sectionTitle}>Content Ownership</Text>
        <Text style={styles.text}>
          The content displayed on the Cutin app, including but not limited to text, graphics, logos, images, 
          and software, is the property of Cutin or its licensors. Users retain ownership of any content they 
          create on the platform.
          {'\n\n'}Any content you submit to the app (such as reviews or feedback) must not be illegal, obscene, 
          threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise 
          injurious to third parties.
        </Text>

        <Text style={styles.sectionTitle}>Intellectual Property</Text>
        <Text style={styles.text}>
          Cutin trademarks, copyrights, and other intellectual property rights are protected. Users are not 
          granted any right or license to use Cutin's intellectual property without prior written consent.
        </Text>

        <Text style={styles.sectionTitle}>Disclaimers of Warranties</Text>
        <Text style={styles.text}>
          The Cutin app is provided "as is" without any warranties of any kind, express or implied. Cutin does 
          not warrant that the app will be uninterrupted, error-free, or virus-free.
        </Text>

        <Text style={styles.sectionTitle}>Limitation of Liability</Text>
        <Text style={styles.text}>
          Cutin shall not be liable for any damages arising from the use of the Cutin app, including but not 
          limited to direct, indirect, incidental, consequential, or punitive damages.
          {'\n\n'}Cutin is not responsible for the quality of food or service provided by merchants. We are not 
          liable for any indirect, incidental, special, consequential or punitive damages.
        </Text>

        <Text style={styles.sectionTitle}>Termination</Text>
        <Text style={styles.text}>
          Cutin may terminate your account at any time for any reason. You may also terminate your account at any time.
        </Text>

        <Text style={styles.sectionTitle}>Governing Law</Text>
        <Text style={styles.text}>
          These terms and conditions shall be governed by and construed in accordance with the laws of South Africa.
        </Text>

        <Text style={styles.sectionTitle}>Additional Provisions for Payment Processing</Text>
        <Text style={styles.text}>
          • Compliance with Payment Card Industry (PCI) Standards: Cutin will comply with all applicable PCI 
          standards to protect user payment information.
          {'\n'}• Transaction Fees: Cutin may charge transaction fees for orders placed through the app. These 
          fees will be displayed to users before they place their order.
          {'\n'}• Refunds: Cutin will process refunds according to its refund policy, which is available on the app.
        </Text>

        <Text style={styles.sectionTitle}>Dispute Resolution</Text>
        <Text style={styles.text}>
          Any dispute arising out of or relating to these terms and conditions will be resolved through binding arbitration.
        </Text>

        <Text style={styles.sectionTitle}>Severability</Text>
        <Text style={styles.text}>
          If any provision of these terms and conditions is held to be invalid or unenforceable, such provision 
          shall be struck and the remaining provisions shall remain in full force and effect.
        </Text>

        <Text style={styles.sectionTitle}>Order and Payment</Text>
        <Text style={styles.text}>
          All orders placed through Cutin are subject to acceptance by the participating merchants. Prices listed 
          are set by the merchants and may change without notice. Payment for orders will be processed through 
          the app using the payment method you provide.
        </Text>

        <Text style={styles.sectionTitle}>Cancellation and Refunds</Text>
        <Text style={styles.text}>
          Cancellation policies are set by individual merchants. Refunds, if applicable, will be processed 
          according to the merchant's policy.
        </Text>

        <Text style={styles.sectionTitle}>Modifications to the Service</Text>
        <Text style={styles.text}>
          We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.
        </Text>

        <Text style={styles.sectionTitle}>Entire Agreement</Text>
        <Text style={styles.text}>
          These terms and conditions constitute the entire agreement between you and Cutin regarding your use of the app.
        </Text>

        <Text style={styles.sectionTitle}>Changes to Terms and Conditions</Text>
        <Text style={styles.text}>
          Cutin may update these terms and conditions from time to time. By continuing to use the app after such 
          updates, you agree to be bound by the revised terms.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions about these terms and conditions, please contact us at:
          {'\n\n'}Cutin
          {'\n'}Email: <Text style={styles.link} onPress={openEmail}>support@cutin.tech</Text>
          {'\n'}Phone: <Text style={styles.link} onPress={openPhone}>063 777 2244</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: COLORS.background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.primary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: COLORS.secondary,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.primary,
    marginBottom: 10,
  },
  link: {
    color: COLORS.link,
    textDecorationLine: 'underline',
  },
});

export default TermsAndConditions;