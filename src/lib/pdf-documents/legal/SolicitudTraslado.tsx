import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import createStyles, { colors } from '../styles';

const styles = createStyles();

const FormHeader = () => (
  <View style={styles.header}>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <View style={{
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12
      }}>
        <Text style={{ fontSize: 24, color: colors.white }}>🚪</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary }}>
          MakiSalida
        </Text>
        <Text style={{ fontSize: 9, color: colors.textLight }}>
          Recursos para familias de internos
        </Text>
      </View>
    </View>
    <Text style={styles.headerTitle}>SOLICITUD DE TRASLADO DE CENTRO</Text>
    <Text style={styles.headerSubtitle}>A LA DIRECCIÓN GENERAL DE INSTITUCIONES PENITENCIARIAS</Text>
  </View>
);

export const SolicitudTrasladoPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <FormHeader />

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Centro Penitenciario actual:</Text>
        <View style={styles.formInput}></View>
      </View>

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Fecha:</Text>
        <View style={styles.formInput}></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DATOS DEL INTERNO</Text>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Nombre completo:</Text>
          <View style={styles.formInput}></View>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Nº Expediente:</Text>
          <View style={styles.formInput}></View>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Fecha de ingreso en centro actual:</Text>
          <View style={styles.formInput}></View>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Grado de clasificación:</Text>
          <View style={styles.formInput}></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPONE</Text>
        <View style={styles.infoBox}>
          <Text style={styles.text}>
            Que el suscrito, interno en el centro penitenciario indicado, solicita el traslado
            a otro centro penitenciario por las razones que se exponen a continuación, conforme
            a lo establecido en el artículo 94 del Reglamento Penitenciario (RD 190/1996).
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>MOTIVOS DEL TRASLADO SOLICITADO</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Cercanía al domicilio familiar (reasentamiento territorial)</Text>
            <Text style={styles.listItem}>☐ Presencia de familiares directos en otra provincia</Text>
            <Text style={styles.listItem}>☐ Programas de tratamiento no disponibles en centro actual</Text>
            <Text style={styles.listItem}>☐ Ofertas laborales o formativas en otro centro</Text>
            <Text style={styles.listItem}>☐ Razones de seguridad personal</Text>
            <Text style={styles.listItem}>☐ Problemas de convivencia justificados</Text>
            <Text style={styles.listItem}>☐ Razones familiares de especial relevancia</Text>
            <Text style={styles.listItem}>☐ Otras razones: ___________________________________</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Centro/s de destino solicitados (por orden de preferencia):</Text>
          <Text style={styles.textSmall}>1ª opción: _________________________________________________</Text>
          <Text style={styles.textSmall}>2ª opción: _________________________________________________</Text>
          <Text style={styles.textSmall}>3ª opción: _________________________________________________</Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Explicación detallada de los motivos:</Text>
          <View style={styles.formTextarea}></View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Datos de contacto familiar:</Text>
          <Text style={styles.textSmall}>Nombre familiar de contacto: ________________________________</Text>
          <Text style={styles.textSmall}>Parentesco: ________________________________________________</Text>
          <Text style={styles.textSmall}>Teléfono: _________________________________________________</Text>
          <Text style={styles.textSmall}>Dirección: ________________________________________________</Text>
          <Text style={styles.textSmall}>Provincia: _________________________________________________</Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Documentación que se aporta:</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Certificado de empadronamiento familiar</Text>
            <Text style={styles.listItem}>☐ Informes de servicios sociales</Text>
            <Text style={styles.listItem}>☐ Documentación acreditativa de enfermedad familiar</Text>
            <Text style={styles.listItem}>☐ Justificantes de oferta laboral/formativa</Text>
            <Text style={styles.listItem}>☐ Informe del Equipo Técnico favorable al traslado</Text>
            <Text style={styles.listItem}>☐ Sin documentación adicional (se solicita al centro)</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOLICITA</Text>
        <Text style={styles.text}>
          Que tenga por presentada esta solicitud, se tramite conforme a la normativa vigente,
          y se resuelva favorablemente el traslado al centro solicitado por ser el más adecuado
          para mi proceso de reinserción y circunstancias personales.
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.textSmall}>
          En _________________, a _____ de _______________ de 20_____
        </Text>

        <View style={styles.signatureBox}>
          <Text style={styles.textSmall}>Fdo.: _______________________</Text>
          <View style={styles.signatureLine}></View>
          <Text style={styles.signatureLabel}>Firma del solicitante</Text>
        </View>

        <Text style={styles.textBold}>REGISTRO DEL CENTRO:</Text>
        <Text style={styles.textSmall}>Fecha: _____/_____/______  Hora: _____:_____</Text>
        <Text style={styles.textSmall}>Firma funcionario: _______________________</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.textBold}>INFORMACIÓN:</Text>
        <Text style={styles.textSmall}>
          El traslado puede solicitarse en cualquier momento. La Administración resolverá
          atendiendo a razones de tratamiento, seguridad, rehabilitación, y circunstancias
          personales/familiares.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textBold}>MakiSalida</Text>
        <Text style={styles.textSmall}>www.makisalida.es</Text>
      </View>

      <Text style={styles.pageNumber}>1</Text>
    </Page>
  </Document>
);

export default SolicitudTrasladoPDF;
