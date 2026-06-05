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
    <Text style={styles.headerTitle}>PETICIÓN DE CLASIFICACIÓN EN TERCER GRADO</Text>
    <Text style={styles.headerSubtitle}>AL EQUIPO TÉCNICO DEL CENTRO PENITENCIARIO</Text>
  </View>
);

export const Peticion3erGradoPDF = () => (
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
          <Text style={styles.formLabel}>Fecha de ingreso en prisión:</Text>
          <View style={styles.formInput}></View>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Módulo/pabellón actual:</Text>
          <View style={styles.formInput}></View>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Clasificación actual:</Text>
          <Text style={styles.textSmall}>_____ grado (desde el _____/_____/______)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SITUACIÓN PENITENCIARIA</Text>
        <View style={styles.infoBox}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Condena total:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Tiempo cumplido:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Fecha teórica de cumplimiento:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Tiempo restante:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Redención de penas:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Permisos disfrutados:</Text>
            <View style={styles.formInput}></View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPONE</Text>
        <View style={styles.infoBox}>
          <Text style={styles.text}>
            Que el suscrito, interno en este centro penitenciario clasificado actualmente en
            segundo grado, solicita su reclasificación en tercer grado de tratamiento al amparo
            de lo establecido en los artículos 100-105 del Reglamento Penitenciario (Real Decreto
            190/1996, de 9 de febrero).
          </Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.textBold}>OBJETIVO:</Text>
          <Text style={styles.textSmall}>
            El tercer grado permite el régimen de semi-libertad, facilitando la progresiva
            incorporación a la vida en libertad mediante permisos de salida y beneficios
            penitenciarios que preparan para la reinserción social.
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>CIRCUNSTANCIAS QUE JUSTIFICAN EL 3º GRADO</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Clasificación en 2º grado durante al menos 6 meses</Text>
            <Text style={styles.listItem}>☐ Actividad laboral/programa formativo regular</Text>
            <Text style={styles.listItem}>☐ Participación en programas de tratamiento</Text>
            <Text style={styles.listItem}>☐ Conducta adecuada y sin sanciones graves recientes</Text>
            <Text style={styles.listItem}>☐ Vinculación familiar positiva</Text>
            <Text style={styles.listItem}>☐ Disposición personal para la reinserción</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Circunstancias específicas (art. 104.1 RP):</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Cumplimiento de la mayor parte de la condena</Text>
            <Text style={styles.listItem}>☐ Programas de liberación anticipada / libertad condicional</Text>
            <Text style={styles.listItem}>☐ Enfermedad grave (informe médico favorable)</Text>
            <Text style={styles.listItem}>☐ Mayores de 60 años</Text>
            <Text style={styles.listItem}>☐ Mujer embarazada o con hijo menor de 3 años</Text>
            <Text style={styles.listItem}>☐ Discapacidad acreditada</Text>
            <Text style={styles.listItem}>☐ Víctima de terrorismos o violencia de género</Text>
            <Text style={styles.listItem}>☐ Otras circunstancias especiales</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Porcentaje de condena cumplida:</Text>
          <View style={styles.formInput}></View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Actividades realizadas en el centro:</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Trabajo en talleres/producción</Text>
            <Text style={styles.listItem}>☐ Formación académica</Text>
            <Text style={styles.listItem}>☐ Programas de tratamiento</Text>
            <Text style={styles.listItem}>☐ Programas de reinserción</Text>
            <Text style={styles.listItem}>☐ Actividades culturales/deportivas</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Evolución del tratamiento y conducta:</Text>
          <View style={styles.formTextarea}></View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Vínculo familiar y apoyo externo:</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Familiares dispuestos a acogerle (nombre: ________________)</Text>
            <Text style={styles.listItem}>☐ Hogar familiar disponible</Text>
            <Text style={styles.listItem}>☐ Red de apoyo social (amigos, asociaciones, ONGs)</Text>
            <Text style={styles.listItem}>☐ Recursos laborales/formativos externos</Text>
            <Text style={styles.listItem}>☐ Sin apoyo familiar significativo (se solicita recurso)</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Datos del domicilio familiar (si dispone):</Text>
          <Text style={styles.textSmall}>Dirección: ________________________________________________</Text>
          <Text style={styles.textSmall}>Localidad: _______________________________________________</Text>
          <Text style={styles.textSmall}>Teléfono: ________________________________________________</Text>
          <Text style={styles.textSmall}>Persona de contacto: ______________________________________</Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Proyecto de vida en 3er grado:</Text>
          <View style={styles.formTextarea}></View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Documentación que se aporta:</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Informe del trabajo social</Text>
            <Text style={styles.listItem}>☐ Documentación familiar (empadronamiento, etc.)</Text>
            <Text style={styles.listItem}>☐ Oferta de empleo</Text>
            <Text style={styles.listItem}>☐ Informe de programas realizados</Text>
            <Text style={styles.listItem}>☐ Certificado médico (si aplica)</Text>
            <Text style={styles.listItem}>☐ Se solicita al centro la documentación pendiente</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOLICITA</Text>
        <Text style={styles.text}>
          Que tenga por presentada esta petición de reclasificación en tercer grado, se
          tramite por el Equipo Técnico, se eleve propuesta favorable al Juez de Vigilancia
          Penitenciaria, y se dicte resolución concediendo la clasificación en tercer grado
          por reunir los requisitos legales y circunstancias personales favorables.
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

      <View style={styles.successBox}>
        <Text style={styles.textBold}>BENEFICIOS DEL 3º GRADO:</Text>
        <Text style={styles.textSmall}>
          Permisos de salida regulares, trabajo externo, residencia fuera del centro (CIS o
          autonomía habitacional), mayor flexibilidad de comunicaciones, preparación para
          la libertad condicional.
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

export default Peticion3erGradoPDF;
