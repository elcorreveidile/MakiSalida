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
        <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.white }}>MS</Text>
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
    <Text style={styles.headerTitle}>ESCRITO DE QUEJA ADMINISTRATIVA</Text>
    <Text style={styles.headerSubtitle}>AL DIRECTOR DEL CENTRO PENITENCIARIO</Text>
  </View>
);

export const QuejaAdministrativaPDF = () => (
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
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Fecha de ingreso:</Text>
          <View style={styles.formInput}></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPONE</Text>
        <View style={styles.infoBox}>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Que:</Text> Por medio del presente escrito, se formula
            queja administrativa ante la Dirección de este Centro Penitenciario, conforme al
            derecho de petición reconocido en el artículo 29 de la Constitución Española y
            los artículos 42 y siguientes del Reglamento Penitenciario (RD 190/1996).
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Hechos que motivan la queja:</Text>
          <View style={styles.formTextarea}></View>
          <Text style={styles.textSmall}>
            (Describa detalladamente los hechos: fecha, lugar, personas implicadas, circunstancias, etc.)
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Derechos presuntamente vulnerados:</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Derechos de comunicación (visitas, comunicaciones)</Text>
            <Text style={styles.listItem}>☐ Derechos de información y queja</Text>
            <Text style={styles.listItem}>☐ Derechos de participación y asociación</Text>
            <Text style={styles.listItem}>☐ Derechos educativos, culturales y laborales</Text>
            <Text style={styles.listItem}>☐ Derechos de salud y asistencia sanitaria</Text>
            <Text style={styles.listItem}>☐ Derechos de privacy e intimidad</Text>
            <Text style={styles.listItem}>☐ Condiciones de vida (alimentación, régimen)</Text>
            <Text style={styles.listItem}>☐ Otras: _______________________</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Petición concreta:</Text>
          <View style={styles.formTextarea}></View>
          <Text style={styles.textSmall}>
            (Indique claramente qué solución o medida solicita)
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Documentación adjunta:</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Informes médicos</Text>
            <Text style={styles.listItem}>☐ Informes psicológicos</Text>
            <Text style={styles.listItem}>☐ Documentación acreditativa</Text>
            <Text style={styles.listItem}>☐ Testigos: _________________</Text>
            <Text style={styles.listItem}>☐ Sin documentación adicional</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOLICITA</Text>
        <Text style={styles.text}>
          Que tenga por presentado este escrito, se admita a trámite la queja formulada, se
          practiquen las averiguaciones pertinentes, y se resuelva en el sentido más favorable
          al cumplimiento de los derechos penitenciarios vulnerados.
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

        <Text style={styles.textBold}>REGISTRO DE ENTRADA:</Text>
        <Text style={styles.textSmall}>Fecha: _____/_____/______  Hora: _____:_____</Text>
        <Text style={styles.textSmall}>Nº Registro: _______________________</Text>
      </View>

      <View style={styles.warningBox}>
        <Text style={styles.textBold}>PLAZO:</Text>
        <Text style={styles.textSmall}>
          La Dirección debe resolver y notificar en un plazo de 10 días desde la presentación
          de la queja. Si no hay respuesta en dicho plazo, se entiende desestimada por silencio
          administrativo.
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

export default QuejaAdministrativaPDF;
