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
    <Text style={styles.headerTitle}>RECURSO CONTRA SANCIÓN DISCIPLINARIA</Text>
    <Text style={styles.headerSubtitle}>AL DIRECTOR DEL CENTRO PENITENCIARIO</Text>
  </View>
);

export const RecursoSancionesPDF = () => (
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
        <Text style={styles.sectionTitle}>DATOS DE LA SANCIÓN RECURRIDA</Text>
        <View style={styles.warningBox}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Nº de expediente sancionador:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Fecha de la sanción:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Tipo de falta sancionada:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Sanción impuesta:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Fecha de notificación:</Text>
            <View style={styles.formInput}></View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DATOS DEL INTERNO RECURRENTE</Text>
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
        <View style={styles.warningBox}>
          <Text style={styles.text}>
            I. Que por resolución de fecha _____/_____/______, se me impuso la sanción
            de _________________________________________ por la supuesta comisión de una falta
            ___________________________________________________.
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Número de días de aislamiento/sanción:</Text>
          <View style={styles.formInput}></View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>MOTIVOS DEL RECURSO (ALEGACIONES)</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Falta de proporcionalidad de la sanción</Text>
            <Text style={styles.listItem}>☐ Inexistencia de los hechos sancionados</Text>
            <Text style={styles.listItem}>☐ Error en la calificación de los hechos</Text>
            <Text style={styles.listItem}>☐ Falta de prueba suficiente</Text>
            <Text style={styles.listItem}>☐ Vulneración del derecho de defensa</Text>
            <Text style={styles.listItem}>☐ Incumplimiento del procedimiento sancionador</Text>
            <Text style={styles.listItem}>☐ Prescripción de la falta</Text>
            <Text style={styles.listItem}>☐ Causa de justificación o error</Text>
            <Text style={styles.listItem}>☐ Otras alegaciones (especificar abajo)</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Alegaciones detalladas:</Text>
          <View style={styles.formTextarea}></View>
          <Text style={styles.textSmall}>
            (Explique en detalle todos los motivos por los que considera que la sanción es injusta)
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Pruebas que se proponen:</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Testigos: _________________________________</Text>
            <Text style={styles.listItem}>☐ Documental (informes, certificados)</Text>
            <Text style={styles.listItem}>☐ Grabaciones de vídeo</Text>
            <Text style={styles.listItem}>☐ Pericial (médica, psicológica)</Text>
            <Text style={styles.listItem}>☐ Otras (especificar)</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOLICITA</Text>
        <Text style={styles.text}>
          Que teniendo por presentado este recurso, se admita a trámite, se practiquen las
          pruebas propuestas, y se dicte resolución revocando o modificando la sanción impuesta
          por ser injusta, indebida, vulnerar derechos fundamentales o no ajustarse a Derecho.
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.textSmall}>
          En _________________, a _____ de _______________ de 20_____
        </Text>

        <View style={styles.signatureBox}>
          <Text style={styles.textSmall}>Fdo.: _______________________</Text>
          <View style={styles.signatureLine}></View>
          <Text style={styles.signatureLabel}>Firma del recurrente</Text>
        </View>

        <Text style={styles.textBold}>REGISTRO:</Text>
        <Text style={styles.textSmall}>Fecha: _____/_____/______  a las _____:_____</Text>
        <Text style={styles.textSmall}>Nº Registro: _______________________</Text>
      </View>

      <View style={styles.warningBox}>
        <Text style={styles.textBold}>PLAZO:</Text>
        <Text style={styles.textSmall}>
          El recurso debe presentarse en el plazo de 3 días hábiles desde la notificación.
          El Director resolverá en el plazo de 7 días desde la recepción del recurso.
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

export default RecursoSancionesPDF;
