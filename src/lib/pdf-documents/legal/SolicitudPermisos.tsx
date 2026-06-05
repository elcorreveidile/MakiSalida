import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import createStyles, { colors } from '../styles';

const styles = createStyles();

// Header con branding MakiSalida
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
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.white }}>MS</Text>
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
    <Text style={styles.headerTitle}>SOLICITUD DE PERMISOS DE SALIDA</Text>
    </View>
);

export const SolicitudPermisosPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <FormHeader />

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Centro Penitenciario:</Text>
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
          <Text style={styles.formLabel}>DNI/NIE:</Text>
          <View style={styles.formInput}></View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Módulo/pabellón:</Text>
          <View style={styles.formInput}></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPONE</Text>
        <Text style={styles.text}>
          Que el suscrito, interno en este centro penitenciario, desea solicitar la concesión
          de permisos de salida conforme a lo establecido en la Ley Orgánica 1/1979, de 26 de
          septiembre, General Penitenciaria, y el Reglamento Penitenciario aprobado por Real
          Decreto 190/1996, de 9 de febrero.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOLICITA</Text>
        <Text style={styles.text}>
          Que se le conceda permiso de salida de las siguientes características:
        </Text>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Tipo de permiso solicitado (marque uno):</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Permiso ordinario (hasta 36 días por año de permanencia)</Text>
            <Text style={styles.listItem}>☐ Permiso extraordinario (razones humanitarias, familiares, etc.)</Text>
            <Text style={styles.listItem}>☐ Permiso para finalización de condena (art. 100.2 RP)</Text>
            <Text style={styles.listItem}>☐ Permiso para actividades de reinserción programadas</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Fecha o periodo solicitado:</Text>
          <Text style={styles.textSmall}>Desde: _____/_____/______  Hasta: _____/_____/______</Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Lugar de realización:</Text>
          <View style={styles.formInput}></View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Motivos fundamentados:</Text>
          <View style={styles.formTextarea}></View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Persona/s de contacto durante el permiso:</Text>
          <Text style={styles.textSmall}>Nombre: _________________________________________________</Text>
          <Text style={styles.textSmall}>Parentesco: _______________________________________________</Text>
          <Text style={styles.textSmall}>Teléfono: ________________________________________________</Text>
          <Text style={styles.textSmall}>Dirección: ________________________________________________</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.textBold}>COMPROMISOS DEL SOLICITANTE:</Text>
          <Text style={styles.listItem}>• Cumplir estrictamente las condiciones y horarios del permiso</Text>
          <Text style={styles.listItem}>• Mantener conducta adecuada durante el disfrute del permiso</Text>
          <Text style={styles.listItem}>• Presentarse en el centro a la hora establecida</Text>
          <Text style={styles.listItem}>• No cometer nuevos delitos durante el permiso</Text>
          <Text style={styles.listItem}>• Comunicar inmediatamente cualquier incidencia</Text>
        </View>
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

        <Text style={styles.textBold}>RECIBIÓ:</Text>
        <Text style={styles.textSmall}>La solicitud el _____/_____/______ a las _____:_____ horas</Text>

        <View style={styles.signatureBox}>
          <Text style={styles.textSmall}>Fdo.: _______________________</Text>
          <View style={styles.signatureLine}></View>
          <Text style={styles.signatureLabel}>Firma del funcionario</Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.textBold}>NOTA:</Text>
        <Text style={styles.textSmall}>
          Esta solicitud debe presentarse al Equipo Técnico con una antelación mínima de 15 días.
          Adjuntar documentación relevante que justifique el permiso solicitado.
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

export default SolicitudPermisosPDF;
