import React from 'react';
import { ScrollView, StyleSheet, Text, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GrievanceRedressal = () => {

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Grievance Redressal</Text>

      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Objective</Text>
        <Text style={styles.text}>
          As a service organization, it is our primary responsibility to focus on
          customer service and satisfaction. This policy ensures:
        </Text>
        <View style={styles.list}>
          <ListItem text="Effective & timely resolution of customer complaints." />
          <ListItem text="Use customer feedback to improve processes and products." />
          <ListItem text="Escalation path if customer is not satisfied." />
        </View>
      </View>

      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Complaint Defined As</Text>
        <Text style={styles.text}>
          An expression of dissatisfaction in writing, by phone or email concerning:
        </Text>
        <View style={styles.list}>
          <ListItem text="Services, products or policies of Junoon Capital." />
          <ListItem text="Services provided by outsourcing agencies." />
          <ListItem text="Employee behavior." />
          <ListItem text="Confidentiality/personal & financial data protection." />
        </View>
        <Text style={styles.note}>
          ❗ Not a complaint: general info/inquiry about loan products, interest rates or data requests.
        </Text>
      </View>

    
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>How to File a Complaint</Text>
        <View style={styles.list}>
          <ListItem text="📞 Call: +91-9311343335" />
          <ListItem text="✉️ Email: care@junooncapital.com" />
        </View>
        <Text style={styles.text}>
          In our office, admins will help you file the complaint via official channels or the loan app.
        </Text>
      </View>

    
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Provide in Your Complaint</Text>
        <View style={styles.list}>
          <ListItem text="Full name & correspondence address." />
          <ListItem text="Registered Email ID & contact number." />
          <ListItem text="Details of the complaint & supporting docs." />
        </View>
      </View>

      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Complaint Handling</Text>
        <View style={styles.list}>
          <ListItem text="➤ First-call resolution if possible." />
          <ListItem text="➤ Otherwise, written communication with timelines." />
          <ListItem text="➤ Regular status updates and request for documents if needed." />
          <ListItem text="➤ Limited follow-ups to keep customer informed." />
        </View>
        <Text style={styles.text}>
          Closed complaints are archived and can be re-examined if required.
        </Text>

        
        <View style={styles.table}>
          {[
            { type: 'Payment Updation', tat: '1–2 working days', email: 'payments@junooncapital.com' },
            { type: 'Refund Related', tat: '7–10 working days', email: 'payments@junooncapital.com' },
            { type: 'Loan Status', tat: '2–3 working days', email: 'care@junooncapital.com' },
            { type: 'Collections/Recovery', tat: '4–5 working days', email: 'care@junooncapital.com & payments@junooncapital.com' },
            { type: 'Other Complaints', tat: '7–10 working days', email: 'care@junooncapital.com' },
          ].map(item => (
            <View key={item.type} style={styles.tableRow}>
              <Text style={[styles.text, styles.bold]}>{item.type}</Text>
              <Text style={styles.text}>{item.tat}</Text>
              <Text style={styles.highlight}>{item.email}</Text>
            </View>
          ))}
        </View>
      </View>

      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Escalation Process</Text>
        <Text style={styles.bold}>Level 1 – Grievance Redressal Officer</Text>
        <Text style={styles.text}>
          Write to: Grievance Redressal Office, Unit No.683, Business Park, Vegas
          Mall, Plot No. 06, Sector‑14, Dwarka, New Delhi ‑ 110078
        </Text>
        <Text style={styles.text}>Email: grievance@junooncapital.com</Text>
        <Text style={styles.text}>Contact: 9311343335</Text>
        <Text style={styles.text}>
          ➤ Acknowledge within 3 working days. Resolve within 30 working days.
        </Text>

        <Text style={[styles.bold, { marginTop: 16 }]}>Level 2 – Nodal Officer</Text>
        <Text style={styles.text}>
          Mr. Sachin Srivastava, Legal & Compliance Department.{'\n'}
          Same office above. Email: nodal.gro@junooncapital.com, Contact: 9311343335
        </Text>

        <Text style={styles.text}>
          ❗ If unresolved after 7 days at Level 2, approach RBI Ombudsman: https://cms.rbi.org.in
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Junoon Capital Services Pvt Ltd. All Rights Reserved.</Text>
      </View>
    </ScrollView>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <View style={styles.listItem}>
    <Icon name="ellipse" size={8} color="#7E1900" style={{ marginTop: 6 }} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default GrievanceRedressal;


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0e5e6',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7E1900',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'navy',
    marginBottom: 12,
  },
    note: {
    backgroundColor: '#FFF3CD',
    color: '#856404',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 8,
    fontSize: 14,
    lineHeight: 20,
  },
  text: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 8,
  },
  highlight: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7E1900',
    marginBottom: 8,
  },
  bold: {
    fontWeight: '600',
  },
  list: { marginBottom: 12 },
  listItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 6, marginBottom: 6 },
  table: { marginTop: 8 },
  tableRow: { marginBottom: 12 },
  footer: {
    marginTop: 20,
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: { fontSize: 12, color: '#999', textAlign: 'center' },
});
