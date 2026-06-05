// Estilos globales para todos los PDFs de MakiSalida
// Colores de branding
export const colors = {
  primary: '#d97706', // amber-600
  primaryLight: '#fbbf24', // amber-400
  primaryDark: '#92400e', // amber-800
  secondary: '#f59e0b', // amber-500
  text: '#1f2937', // gray-800
  textLight: '#6b7280', // gray-500
  white: '#ffffff',
  light: '#fef3c7', // amber-50
  lightGray: '#f9fafb', // gray-50
  border: '#e5e7eb', // gray-200
  success: '#10b981', // green-500
  info: '#3b82f6', // blue-500
  warning: '#f59e0b', // amber-500
  danger: '#ef4444', // red-500
};

export const createStyles = () => ({
  // Page styles
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#ffffff',
  },

  // Header con branding
  header: {
    marginBottom: 25,
    borderBottom: '3pt solid #d97706',
    paddingBottom: 15,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d97706',
    marginBottom: 8,
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },

  headerBadge: {
    fontSize: 11,
    color: '#92400e',
    backgroundColor: '#fef3c7',
    padding: '4pt 8pt',
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginTop: 8,
  },

  // Section styles
  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d97706',
    marginBottom: 12,
    borderBottom: '2pt solid #e5e7eb',
    paddingBottom: 6,
  },

  subsection: {
    marginLeft: 12,
    marginBottom: 10,
  },

  subsectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 6,
  },

  // Text styles
  text: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#1f2937',
    marginBottom: 6,
    textAlign: 'justify',
  },

  textSmall: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#6b7280',
    marginBottom: 4,
  },

  textBold: {
    fontWeight: 'bold',
    color: '#1f2937',
  },

  // Lists
  listItem: {
    marginLeft: 22,
    marginBottom: 4,
    fontSize: 10,
    lineHeight: 1.5,
    color: '#1f2937',
  },

  listItemNumbered: {
    marginLeft: 22,
    marginBottom: 4,
    fontSize: 10,
    lineHeight: 1.5,
    color: '#1f2937',
  },

  // Boxes/Cards
  highlightBox: {
    backgroundColor: '#fef3c7',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    borderLeft: '4pt solid #f59e0b',
  },

  infoBox: {
    backgroundColor: '#dbeafe',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    borderLeft: '4pt solid #3b82f6',
  },

  warningBox: {
    backgroundColor: '#fee2e2',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    borderLeft: '4pt solid #ef4444',
  },

  successBox: {
    backgroundColor: '#d1fae5',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    borderLeft: '4pt solid #10b981',
  },

  // Tables
  table: {
    width: '100%',
    marginBottom: 15,
    borderCollapse: 'collapse',
  },

  tableHeader: {
    backgroundColor: '#d97706',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 10,
    padding: 8,
  },

  tableRow: {
    borderBottom: '1pt solid #e5e7eb',
  },

  tableCell: {
    padding: 8,
    fontSize: 10,
    color: '#1f2937',
  },

  // Form elements
  formField: {
    marginBottom: 15,
  },

  formLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },

  formInput: {
    borderBottom: '1pt solid #d97706',
    paddingBottom: 6,
    minHeight: 18,
  },

  formTextarea: {
    border: '1pt solid #d97706',
    borderRadius: 4,
    padding: 8,
    minHeight: 80,
  },

  // Buttons visual representation
  button: {
    backgroundColor: '#d97706',
    color: '#ffffff',
    padding: '8pt 16pt',
    borderRadius: 6,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  buttonSecondary: {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
    padding: '8pt 16pt',
    borderRadius: 6,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    border: '1pt solid #d97706',
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#6b7280',
    borderTop: '1pt solid #e5e7eb',
    paddingTop: 12,
  },

  footerLink: {
    color: '#d97706',
  },

  // Page number
  pageNumber: {
    position: 'absolute',
    bottom: 30,
    right: 40,
    fontSize: 9,
    color: '#6b7280',
  },

  // Signature
  signatureBox: {
    marginTop: 30,
  },

  signatureLine: {
    borderBottom: '1pt solid #1f2937',
    width: 200,
    marginTop: 50,
  },

  signatureLabel: {
    fontSize: 9,
    color: '#6b7280',
    marginTop: 4,
  },

  // Badge/Tag
  badge: {
    display: 'inline-block',
    backgroundColor: '#d97706',
    color: '#ffffff',
    padding: '3pt 8pt',
    borderRadius: 4,
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  badgeLight: {
    display: 'inline-block',
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '3pt 8pt',
    borderRadius: 4,
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  // Separator
  separator: {
    borderBottom: '1pt solid #e5e7eb',
    marginVertical: 15,
  },

  // Spacer
  spacer: {
    height: 10,
  },

  // Emoji placeholder (si es necesario)
  emoji: {
    fontSize: 16,
    marginRight: 6,
  },
});

export default createStyles;
