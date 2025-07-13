import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomCarousel from '../components/CustomCarousel';

const Home = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:'#f0e5e6ff'}} showsVerticalScrollIndicator={false}>

      <CustomCarousel/>

      <Text style={{backgroundColor:'green'}}>hi, this is Home </Text>



      <Text>Why Junoon Capital ?
 Junoon Capital Services Pvt. Ltd is a Non-Deposit taking RBI Registered NBFC in SME lending based on the underwriting of digital payments data. We deliver finance to small business owners to drive business growth that matches their determinations.
 Our hassle-free loans are driven by technology revolutions and influence the digital payments ecosystem. Our bankrolling not only assistances our clienteles grow but also creates a constructive impact.
Vision
To be a substance in as long as economic support to the underserved in realizing larger monetary and community well being. Our effort is to figure a justifiable monetary organization that not only carries high standards of facility and worth to our clients nevertheless is also gratifying to all our stakeholders.”



Mission
To advance the monetary health of the underserved Micro and Small entrepreneurs, by supportive them in income-generation activities through financial intermediation.

Value
Provision : We escalate a customer's independence. We mark the resolutions.
Pioneering: We explore new approaches that add value to the customer's business.
Reliable: We "walk the talk". We will do the whole thing conceivable to retain to our aptitude, through honesty.
Mentoring: We grow our squad to be the top specialists in our commercial & our jobs.
Community Decent: We display accountability intended for the broader public.

Our Products and Services
We provide we aim to provide end-to-end banking services and financial assistance to rural India

Digital Loan
In today’s modern financial market, borrowers expect convenience and speed. At Junoon Capital Services Pvt. Ltd.

Microfinance Loan
Microfinance customers are typically under / unbanked individuals or groups who do not have access to traditional financial resources.

Unsecured Business Loan
Upgrade your business and take it to new-fangled heights with a capital infusion from Junoon Capital Services Pvt. Ltd. fast unsecured Business Loans.

Secured Business Loan
We offer offline as well as online Business Loan in India for the Micro enterprise sector and have designed our offering to match your unique needs. 

Privacy Policy | Refund Policy | Terms & Conditions | Account Aggregator Term| Account Aggregator Policy
© Copy </Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
