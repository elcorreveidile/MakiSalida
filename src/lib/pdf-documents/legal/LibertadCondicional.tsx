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
    <Text style={styles.headerTitle}>SOLICITUD DE LIBERTAD CONDICIONAL</Text>
    <Text style={styles.headerSubtitle}>AL JUEZ DE VIGILANCIA PENITENCIARIA</Text>
  </View>
);

export const LibertadCondicionalPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <FormHeader />

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Centro Penitenciario:</Text>
        <View style={styles.formInput}></View>
      </View>

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Juzgado de Vigilancia Penitenciaria:</Text>
        <View style={styles.formInput}></View>
      </View>

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Fecha:</Text>
        <View style={styles.formInput}></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DATOS DEL INTERNO SOLICITANTE</Text>
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
          <Text style={styles.formLabel}>Fecha de nacimiento:</Text>
          <View style={styles.formInput}></View>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Módulo/pabellón:</Text>
          <View style={styles.formInput}></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DATOS DE LA CONDENA</Text>
        <View style={styles.infoBox}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Delito/s:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Fecha de la condena:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Condena total impuesta:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Fecha de inicio del cumplimiento:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Fecha teórica de libertad definitiva:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Clasificación actual:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Redención de penas realizada:</Text>
            <View style={styles.formInput}></View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Tiempo efectivamente cumplido:</Text>
            <View style={styles.formInput}></View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPONE</Text>
        <View style={styles.infoBox}>
          <Text style={styles.text}>
            Que el suscrito, se encuentra privado de libertad en este centro penitenciario
            y reúne los requisitos legales establecidos en el artículo 90, 91 y 92 del Código
            Penal y artículos 196-202 del Reglamento Penitenciario para acceder a la libertad
            condicional.
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>MODALIDAD DE LIBERTAD CONDICIONAL (marque la correspondiente):</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Art. 90 CP (Ordinaria): 3/4 de la condena (o 2/3 para reincidentes)</Text>
            <Text style={styles.listItem}>☐ Art. 91 CP (Enfermo grave): Sin exigencia de cumplimiento</Text>
            <Text style={styles.listItem}>☐ Art. 91 CP (Edad avanzada): Mayores de 70 años o 60 cumplidos 3/4</Text>
            <Text style={styles.listItem}>☐ Art. 92 CP (Extranjeros): Expulsión del territorio español</Text>
            <Text style={styles.listItem}>☐ Art. 92.2 CP (Muy grave): 2/3 cumplidos + informe favorable + programa</Text>
            <Text style={styles.listItem}>☐ Art. 92.3 CP (Terrorismo): Requisitos específicos del art. 92.3</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Porcentaje de condena cumplida:</Text>
          <Text style={styles.textSmall}>______ % (calculado sobre el total de condenas acumuladas)</Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Circunstancias personales favorables:</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.listItem}>☐ Clasificación en 3º grado de tratamiento</Text>
            <Text style={styles.listItem}>☐ Participación en programas de tratamiento</Text>
            <Text style={styles.listItem}>☐ Buena conducta (sin sanciones graves recientes)</Text>
            <Text style={styles.listItem}>☐ Actividades laborales/formativas realizadas</Text>
            <Text style={styles.listItem}>☐ Vinculación familiar</Text>
            <Text style={styles.listItem}>☐ Oferta de empleo real</Text>
            <Text style={styles.listItem}>☐ Hogar familiar disponible</Text>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Proyecto de vida en libertad:</Text>
          <View style={styles.formTextarea}></View>
          <Text style={styles.textSmall}>
            (Describa dónde residirá, con quién, actividad laboral prevista, apoyo familiar, recursos disponibles)
          </Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Datos de domicilio familiar:</Text>
          <Text style={styles.textSmall}>Dirección: ________________________________________________</Text>
          <Text style={styles.textSmall}>Localidad: _______________________________________________</Text>
          <Text style={styles.textSmall}>Teléfono: ________________________________________________</Text>
          <Text style={styles.textSmall}>Persona de contacto: ______________________________________</Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Oferta laboral (si dispone):</Text>
          <Text style={styles.textSmall}>Empresa: _________________________________________________</Text>
          <Text style={styles.textSmall}>Dirección: ________________________________________________</Text>
          <Text style={styles.textSmall}>Teléfono: ________________________________________________</Text>
          <Text style={styles.textSmall}>Persona de contacto: ______________________________________</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOLICITA</Text>
        <Text style={styles.text}>
          Que tenga por presentada esta solicitud de libertad condicional, se eleve al Juez
          de Vigilancia Penitenciaria junto con informe del Equipo Técnico y documentación
          aportada, y se dicte resolución concediendo la libertad condicional por cumplirse
          los requisitos legales exigidos.
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
        <Text style={styles.textBold}>PROCEDIMIENTO:</Text>
        <Text style={styles.textSmall}>
          Presentada la solicitud, el Centro emite informe del Equipo Técnico y lo eleva al
          JVP en el plazo de 1 mes. El Juez resolverá en plazo de 15 días desde la recepción.
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

export default LibertadCondicionalPDF;
