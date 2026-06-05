import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import createStyles, { colors } from '../styles';

// Crear estilos con branding MakiSalida
const styles = createStyles();

// Logo y branding visual
const LogoHeader = () => (
  <View style={styles.header}>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <View style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.white }}>MS</Text>
      </View>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.primary }}>
          MakiSalida
        </Text>
        <Text style={{ fontSize: 10, color: colors.textLight }}>
          Apoyo a familias de internos
        </Text>
      </View>
    </View>
    <Text style={styles.headerTitle}>GUÍA DE DERECHOS PENITENCIARIOS</Text>
    <Text style={styles.headerSubtitle}>Para internos y familiares</Text>
    <View style={styles.headerBadge}>
      <Text style={{ fontSize: 9, color: colors.primaryDark }}>Actualizada 2024</Text>
    </View>
  </View>
);

export const GuiaDerechosPDF = () => (
  <Document>
    {/* PORTADA */}
    <Page size="A4" style={styles.page}>
      <LogoHeader />

      <View style={styles.highlightBox}>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Importante:</Text> Esta guía proporciona información
          general sobre derechos penitenciarios en España. No sustituye el asesoramiento
          profesional.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. MARCO LEGAL BÁSICO</Text>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Constitución Española (1978)</Text>
          <Text style={styles.text}>
            La Constitución española establece derechos fundamentales que deben respetarse
            durante el cumplimiento de condenas penales:
          </Text>
          <Text style={styles.listItem}>• Art. 15: Derecho a la vida y a la integridad física</Text>
          <Text style={styles.listItem}>• Art. 17: Derecho a la libertad y seguridad</Text>
          <Text style={styles.listItem}>• Art. 18: Derecho al honor, intimidad y protección de datos</Text>
          <Text style={styles.listItem}>• Art. 24: Derecho a la tutela judicial efectiva</Text>
          <Text style={styles.listItem}>• Art. 25.2: Las cárceles deben orientarse a la reeducación</Text>
          <Text style={styles.listItem}>• Art. 29: Derecho de petición</Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Leyes penitenciarias principales</Text>
          <Text style={styles.listItem}>• Ley Orgánica 1/1979 - Ley General Penitenciaria (LOGP)</Text>
          <Text style={styles.listItem}>• Real Decreto 190/1996 - Reglamento Penitenciario (RP)</Text>
          <Text style={styles.listItem}>• Artículos 90-92 Código Penal: Libertad condicional</Text>
          <Text style={styles.listItem}>• Artículos 36-42 Código Penal: Cumplimiento de condenas</Text>
        </View>
      </View>

      <Text style={styles.pageNumber}>1</Text>
    </Page>

    {/* PÁGINA 2: DERECHOS DE COMUNICACIÓN */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DERECHOS DE COMUNICACIÓN</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Comunicaciones orales (visitas)</Text>
          <View style={styles.infoBox}>
            <Text style={styles.textBold}>Derechos básicos:</Text>
            <Text style={styles.listItem}>
              • <Text style={styles.textBold}>Comunicaciones familiares:</Text> Mínimo 4
              comunicaciones al mes con familiares de primer y segundo grado
            </Text>
            <Text style={styles.listItem}>
              • <Text style={styles.textBold}>Comunicaciones íntimas:</Text> Derecho a visitas
              íntimas con cónyuge o pareja estable (3 veces/mes en 2º grado)
            </Text>
            <Text style={styles.listItem}>
              • <Text style={styles.textBold}>Duración mínima:</Text> 30 minutos por comunicación
              familiar, 45 minutos para íntimas
            </Text>
            <Text style={styles.listItem}>
              • <Text style={styles.textBold}>Registros:</Text> Deben realizarse respetando
              la dignidad e intimidad
            </Text>
          </View>

          <Text style={styles.subsectionTitle}>Personas autorizadas para visitar:</Text>
          <Text style={styles.listItemNumbered}>1. Cónyuge o pareja estable</Text>
          <Text style={styles.listItemNumbered}>2. Padres, hijos, hermanos (1er grado)</Text>
          <Text style={styles.listItemNumbered}>3. Abuelos, nietos, tíos, primos (2º grado)</Text>
          <Text style={styles.listItemNumbered}>4. Representantes legales del interno</Text>
          <Text style={styles.listItemNumbered}>5. Abogados, procuradores, graduados sociales</Text>
          <Text style={styles.listItemNumbered}>6. Ministros religiosos</Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Comunicaciones escritas y telefónicas</Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Correspondencia:</Text> Sin límite cuantitativo,
            secreto de las comunicaciones
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Correos con abogados:</Text> Confidenciales,
            no pueden registrarse
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Correo electrónico:</Text> Disponible en muchos
            centros (sistema Fibes)
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Teléfono:</Text> Derecho a llamadas a familiares
            (tarifas reducidas)
          </Text>
        </View>
      </View>

      <Text style={styles.pageNumber}>2</Text>
    </Page>

    {/* PÁGINA 3: DERECHOS DE INFORMACIÓN Y QUEJA */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DERECHOS DE INFORMACIÓN Y QUEJA</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Derechos de información</Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Inventario de efectos:</Text> Derecho a inventario
            al ingreso
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Información de derechos:</Text> Debe informarse al ingreso
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Información de clasificación:</Text> Derecho a conocer grado
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Información de permisos:</Text> Derecho a conocer requisitos
          </Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Derechos de queja y recurso</Text>
          <View style={styles.warningBox}>
            <Text style={styles.text}>
              El interno tiene derecho a formular quejas, peticiones y recursos ante:
            </Text>
            <Text style={styles.listItem}>• La Dirección del centro</Text>
            <Text style={styles.listItem}>• Juez de Vigilancia Penitenciaria (JVP)</Text>
            <Text style={styles.listItem}>• Defensor del Pueblo</Text>
            <Text style={styles.listItem}>• Juzgados y Tribunales</Text>
          </View>

          <Text style={styles.subsectionTitle}>Procedimiento de queja:</Text>
          <Text style={styles.listItemNumbered}>1. Ante la Dirección (10 días para resolver)</Text>
          <Text style={styles.listItemNumbered}>2. Ante el Juez de Vigilancia Penitenciaria</Text>
          <Text style={styles.listItemNumbered}>3. Ante el Defensor del Pueblo</Text>
          <Text style={styles.listItemNumbered}>4. Recurso contencioso-administrativo</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DERECHOS DE ASOCIACIÓN Y PARTICIPACIÓN</Text>
        <Text style={styles.listItem}>• Derecho de reunión con permiso previo</Text>
        <Text style={styles.listItem}>• Participación en asociaciones de internos</Text>
        <Text style={styles.listItem}>• Participación en comisiones (cultura, deportes, etc.)</Text>
        <Text style={styles.listItem}>• Representantes en el Consejo de Dirección</Text>
      </View>

      <Text style={styles.pageNumber}>3</Text>
    </Page>

    {/* PÁGINA 4: DERECHOS EDUCATIVOS, LABORALES Y DE SALUD */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DERECHOS EDUCATIVOS, LABORALES Y DE SALUD</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Educación y formación</Text>
          <View style={styles.successBox}>
            <Text style={styles.listItem}>• Derecho a educación básica obligatoria</Text>
            <Text style={styles.listItem}>• Acceso a biblioteca</Text>
            <Text style={styles.listItem}>• Programas de formación profesional</Text>
            <Text style={styles.listItem}>• Enseñanzas universitarias a distancia</Text>
            <Text style={styles.listItem}>• Educación especial para personas con discapacidad</Text>
          </View>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Trabajo penitenciario</Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Voluntariedad:</Text> El trabajo es voluntario
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Retribución:</Text> Derecho a salario (2-7€/día según tareas)
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Seguridad Social:</Text> Cotización por contingencias profesionales
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Redención de pena:</Text> 1 día redención por cada 2 días trabajados
          </Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Asistencia sanitaria</Text>
          <Text style={styles.listItem}>• Derecho a la salud igual que en libertad</Text>
          <Text style={styles.listItem}>• Acceso a médico, psiquiatra, psicólogo</Text>
          <Text style={styles.listItem}>• Confidencialidad de la historia clínica</Text>
          <Text style={styles.listItem}>• Atención a drogodependencias</Text>
          <Text style={styles.listItem}>• Derecho a segunda opinión médica</Text>
        </View>
      </View>

      <Text style={styles.pageNumber}>4</Text>
    </Page>

    {/* PÁGINA 5: GRADOS Y BENEFICIOS */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GRADOS Y BENEFICIOS PENITENCIARIOS</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subsectionTitle}>Grados de clasificación</Text>

        <View style={styles.infoBox}>
          <View style={{ marginBottom: 8 }}>
            <Text style={styles.textBold}>1º Grado (Cerrado)</Text>
            <Text style={styles.textSmall}>Régimen más estricto, sin permisos ordinarios</Text>
          </View>
          <View style={{ marginBottom: 8 }}>
            <Text style={styles.textBold}>2º Grado (Ordinario)</Text>
            <Text style={styles.textSmall}>Régimen normal, hasta 36 días de permisos/año</Text>
          </View>
          <View>
            <Text style={styles.textBold}>3º Grado (Abierto)</Text>
            <Text style={styles.textSmall}>Semi-libertad, permisos y trabajo externo</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subsectionTitle}>Permisos de salida</Text>
        <View style={styles.highlightBox}>
          <Text style={styles.textBold}>Ordinarios:</Text>
          <Text style={styles.textSmall}>
            Hasta 36 días por año (más 7 días/año a partir del 3º año)
          </Text>
          <Text style={styles.textBold}>Extraordinarios:</Text>
          <Text style={styles.textSmall}>
            Por razones humanitarias, familiares u otras justificadas
          </Text>
          <Text style={styles.textBold}>Art. 100.2 RP:</Text>
          <Text style={styles.textSmall}>
            Permisos para finalización de condena
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subsectionTitle}>Libertad condicional</Text>
        <View style={styles.successBox}>
          <Text style={styles.textBold}>Requisitos generales (art. 90-91 CP):</Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Ordinaria:</Text> 3/4 de condena cumplida (2/3 para reincidentes)
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Enfermo grave:</Text> Sin exigencia de cumplimiento
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Mayores de 70:</Text> Sin exigencia de cumplimiento
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.textBold}>Mayores de 60:</Text> 3/4 de condena cumplida
          </Text>
        </View>
      </View>

      <Text style={styles.pageNumber}>5</Text>
    </Page>

    {/* PÁGINA 6: SANCIONES Y RECURSOS */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SANCIONES DISCIPLINARIAS Y RECURSOS</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Procedimiento sancionador</Text>
          <Text style={styles.listItem}>• <Text style={styles.textBold}>Derecho a ser oído:</Text> El interno puede alegar</Text>
          <Text style={styles.listItem}>• <Text style={styles.textBold}>Derecho a defensa:</Text> Asistencia de abogado</Text>
          <Text style={styles.listItem}>• <Text style={styles.textBold}>Presunción de inocencia:</Text> Carga de prueba a la Administración</Text>
          <Text style={styles.listItem}>• <Text style={styles.textBold}>Proporcionalidad:</Text> Sanción proporcionada a la falta</Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Faltas muy graves (art. 108 RP)</Text>
          <Text style={styles.listItem}>• Agresión física a funcionarios o internos</Text>
          <Text style={styles.listItem}>• Insolencia grave, amenazas o coacciones</Text>
          <Text style={styles.listItem}>• Incitación a rebelión o violencia</Text>
          <Text style={styles.listItem}>• Tenencia de objetos peligrosos</Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Recursos contra sanciones</Text>
          <View style={styles.warningBox}>
            <Text style={styles.textBold}>Recurso ordinario:</Text>
            <Text style={styles.textSmall}>
              Ante el Director (3 días desde notificación) - 7 días para resolver
            </Text>
            <Text style={styles.textBold}>Recurso jerárquico:</Text>
            <Text style={styles.textSmall}>
              Ante Director General (15 días desde desestimación)
            </Text>
            <Text style={styles.textBold}>Recurso contencioso:</Text>
            <Text style={styles.textSmall}>
              Ante Juzgado de lo Contencioso (2 meses desde notificación)
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.pageNumber}>6</Text>
    </Page>

    {/* PÁGINA 7: RECURSOS DE CONTACTO */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>RECURSOS Y AYUDAS</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Asistencia jurídica gratuita</Text>
          <Text style={styles.listItem}>• Turno de oficio: Derecho a abogado para procedimientos judiciales</Text>
          <Text style={styles.listItem}>• Asistencia letrada: Disponible en centros</Text>
          <Text style={styles.listItem}>• Requisitos: No superar límites de ingresos (Justicia Gratuita)</Text>
        </View>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Asociaciones de ayuda</Text>
          <Text style={styles.listItem}>• Asociaciones de familiares de internos</Text>
          <Text style={styles.listItem}>• ONGs de reinserción social</Text>
          <Text style={styles.listItem}>• Cruz Roja - Programas de reinserción</Text>
          <Text style={styles.listItem}>• Cáritas - Acompañamiento social</Text>
          <Text style={styles.listItem}>• Colegios de Abogados - Turno de oficio</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RECURSOS DE CONTACTO</Text>

        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Instituciones oficiales</Text>

          <View style={{ marginBottom: 12 }}>
            <Text style={styles.textBold}>Secretaría General de Instituciones Penitenciarias</Text>
            <Text style={styles.textSmall}>www.institucionespenitenciarias.es</Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={styles.textBold}>Juez de Vigilancia Penitenciaria (JVP)</Text>
            <Text style={styles.textSmall}>Contacto a través del centro penitenciario</Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={styles.textBold}>Defensor del Pueblo</Text>
            <Text style={styles.textSmall}>900 101 091 / www.defensordelpueblo.es</Text>
          </View>

          <View>
            <Text style={styles.textBold}>Consejo General del Poder Judicial</Text>
            <Text style={styles.textSmall}>www.poderjudicial.es</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textSmall}>
          <Text style={styles.textBold}>Nota:</Text> Esta guía es informativa. Cada caso puede tener
          particularidades que requieren asesoramiento profesional.
        </Text>
        <View style={{ marginTop: 8 }}>
          <Text style={styles.textBold}>MakiSalida</Text>
          <Text style={styles.textSmall}>Recursos para familias de internos penitenciarios</Text>
        </View>
      </View>

      <Text style={styles.pageNumber}>7</Text>
    </Page>
  </Document>
);

export default GuiaDerechosPDF;
