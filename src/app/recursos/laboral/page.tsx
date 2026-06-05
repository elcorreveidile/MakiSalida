import Link from 'next/link';
import { Header } from '@/components/Header';

export default function LaboralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-3 px-4" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-amber-600 hover:text-amber-700">
                Inicio
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/recursos" className="text-amber-600 hover:text-amber-700">
                Recursos
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Orientación Laboral</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4" role="img" aria-label="Maletín">💼</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Orientación Laboral
            </h1>
          </div>
          <p className="text-xl text-amber-100">
            Recursos para la inserción laboral tras la salida
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4" aria-labelledby="contenido-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contenido-title" className="text-3xl font-bold text-gray-900 mb-8">
            Recursos para encontrar empleo
          </h2>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📖 Guía de búsqueda de empleo con antecedentes
              </h3>
              <p className="text-gray-700 mb-4">
                Estrategias específicas para buscar empleo cuando tienes antecedentes penales.
                Incluye cómo preparar CV, dónde buscar, y cómo abordar el tema en entrevistas.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ Cómo preparar tu CV y cartas de presentación</li>
                <li>✓ Estrategias de búsqueda activa</li>
                <li>✓ Portales de empleo especiales</li>
                <li>✓ Redes de contacto y networking</li>
              </ul>
              <Link
                href="/recursos/laboral#consejos"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver consejos prácticos
              </Link>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💬 Cómo explicar los antecedentes penales
              </h3>
              <p className="text-gray-700 mb-4">
                Guía práctica sobre cuándo y cómo explicar tus antecedentes penales en procesos
                de selección, con ejemplos de respuestas y estrategias de comunicación.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Consejo clave:</strong> La honestidad es importante, pero también lo es
                  saber presentar la experiencia de forma positiva. Enfócate en la formación,
                  el trabajo realizado en prisión, y el deseo de empezar de nuevo.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Cuándo mencionar antecedentes</li>
                <li>• Cómo explicarlo de forma honesta y positiva</li>
                <li>• Qué detalles incluir y cuáles omitir</li>
                <li>• Cómo destacar tu rehabilitación y formación</li>
              </ul>
              <Link
                href="#como-explicar"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver sección completa
              </Link>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎓 Programas de formación profesional
              </h3>
              <p className="text-gray-700 mb-4">
                Cursos y programas de formación gratuitos o subvencionados específicamente
                diseñados para personas en situación de exclusión social o con antecedentes.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Cursos de oficios:</strong> Electricidad, fontanería, carpintería,
                  albañilería, cocina, peluquería
                </li>
                <li>
                  <strong>Formación digital:</strong> Informática básica, ofimática, internet,
                  herramientas digitales
                </li>
                <li>
                  <strong>Certificados profesionales:</strong> Programas que otorgan
                  certificados oficiales de empleabilidad
                </li>
                <li>
                  <strong>Emprendimiento:</strong> Cursos para iniciar tu propio negocio
                  o actividad por cuenta propia
                </li>
              </ul>
              <Link
                href="https://www.sepe.es"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver programas SEPE
              </Link>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏢 Empresas que contratan con antecedentes
              </h3>
              <p className="text-gray-700 mb-4">
                Directorio de empresas y organizaciones sensibilizadas que contratan activamente
                a personas con antecedentes penales, ordenado por sector y provincia.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Empresas solidarias:</strong> Cada vez más empresas reconocen el
                  valor de dar una segunda oportunidad y contar con trabajadores motivados
                  y comprometidos con su reinserción.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Sectores con más oportunidades: construcción, hostelería, logística</li>
                <li>• Empresas de inserción laboral</li>
                <li>• Cooperativas sociales</li>
                <li>• Programas de empresas colaboradoras</li>
              </ul>
              <Link
                href="#empresas"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver lista de empresas
              </Link>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8 border-2 border-amber-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Destacado
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚗 MakiCar — Tu primera oportunidad laboral
              </h3>
              <p className="text-gray-700 mb-4">
                MakiCar es una plataforma de movilidad compartida que ofrece oportunidades laborales
                reales para personas en proceso de reinserción. Conduce, reparte o acompaña: tú eliges
                cómo empezar tu nueva vida profesional.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Sin barreras de entrada:</strong> MakiCar está diseñado para que
                  cualquier persona con ganas de trabajar pueda empezar. Formación incluida,
                  horarios flexibles y acompañamiento durante tus primeros meses.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Trabajo flexible desde el primer día</li>
                <li>• Formación y acompañamiento incluidos</li>
                <li>• Comunidad de apoyo entre conductores</li>
                <li>• Ingresos desde la primera semana</li>
              </ul>
              <a
                href="https://makicar.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
              >
                Descubre MakiCar
              </a>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📞 Servicios públicos de empleo
              </h3>
              <p className="text-gray-700 mb-4">
                Recursos y servicios de los servicios públicos de empleo (SEPE y autonómicos)
                para personas en situación de exclusión.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <a
                    href="https://www.sepe.es/es/portal-empleo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    SEPE - Portal de empleo
                  </a>
                  {' '}– Ofertas de trabajo y recursos
                </li>
                <li>
                  <a
                    href="https://www.sepe.es/es/empleo/formacion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Programas de empleo
                  </a>
                  {' '}– Iniciativas de inserción laboral
                </li>
                <li>
                  <a
                    href="https://www.redtrabaja.gob.es/es/trabajadores/servicios-de-empleo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Servicios autonómicos
                  </a>
                  {' '}– Recursos por comunidad autónoma
                </li>
                <li>
                  <a
                    href="https://www.redtrabaja.gob.es/es/orientacion-laboral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Orientación laboral
                  </a>
                  {' '}– Servicios gratuitos de asesoramiento
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Consejos prácticos */}
      <section id="consejos" className="py-16 px-4" aria-labelledby="consejos-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="consejos-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Consejos prácticos para la búsqueda de empleo
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Prepara un buen CV</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Destaca tu formación reciente:</strong> cursos, talleres y certificados obtenidos durante o después del internamiento demuestran tu compromiso con el cambio.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Incluye experiencia laboral interna:</strong> si trabajaste en talleres, cocina, mantenimiento o cualquier actividad dentro del centro, inclúyelo como experiencia válida.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Usa un formato funcional:</strong> en lugar de cronológico, organiza por habilidades y competencias para evitar que los huecos temporales sean lo primero que se vea.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Carta de presentación personalizada:</strong> adapta cada carta a la empresa. Explica brevemente tu motivación y por qué eres la persona adecuada.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Dónde buscar empleo</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Servicios Públicos de Empleo (SEPE):</strong> inscríbete como demandante de empleo. Tendrás acceso a ofertas, formación y orientación gratuita.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Empresas de inserción:</strong> están diseñadas específicamente para dar oportunidades a personas en riesgo de exclusión. Ofrecen contrato, formación y acompañamiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>ONGs y fundaciones:</strong> organizaciones como Fundación Adecco, Cruz Roja Empleo, Cáritas o la Fundación Secretariado Gitano tienen programas específicos de empleo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Portales de empleo:</strong> InfoJobs, Indeed, LinkedIn. Crea un perfil profesional y activa alertas de empleo en tu zona y sector.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Contactos personales:</strong> avisa a familiares, amigos y conocidos de que buscas empleo. Muchas ofertas se cubren por contactos directos.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Prepara la entrevista</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Investiga la empresa:</strong> antes de la entrevista, infórmate sobre la empresa, su actividad y sus valores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Practica tus respuestas:</strong> prepara respuestas para las preguntas más habituales. Pide a alguien de confianza que haga una simulación contigo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Sé puntual y cuida tu imagen:</strong> llega 10 minutos antes. Viste de forma adecuada al puesto (no necesariamente traje, pero limpio y cuidado).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1 font-bold">→</span>
                  <span><strong>Muestra actitud positiva:</strong> los empleadores valoran la motivación, la responsabilidad y las ganas de aprender por encima de todo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo explicar antecedentes */}
      <section id="como-explicar" className="py-16 px-4 bg-amber-50" aria-labelledby="explicar-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="explicar-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cómo explicar los antecedentes penales
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">¿Cuándo debo mencionarlo?</h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  <strong>No estás obligado/a a mencionarlo salvo que te lo pregunten directamente</strong> o
                  el puesto lo requiera por ley (trabajo con menores, seguridad, función pública).
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <p className="font-semibold text-green-800 mb-2">Recuerda:</p>
                  <p>El certificado de antecedentes penales solo pueden solicitarlo para puestos donde la ley lo exija. En la mayoría de empleos del sector privado, <strong>no es un requisito legal</strong>.</p>
                </div>
                <p>
                  Si la empresa te pregunta directamente, lo mejor es ser honesto/a. Mentir puede ser motivo de despido si se descubre después.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cómo explicarlo de forma positiva</h3>
              <div className="text-gray-700 space-y-4">
                <p>Si decides hablarlo o te lo preguntan, sigue esta estructura:</p>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-amber-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span><strong>Reconoce brevemente el pasado:</strong> "Cometí un error hace X años y cumplí mi condena." No entres en detalles innecesarios.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span><strong>Destaca lo que has aprendido:</strong> "Esa experiencia me enseñó la importancia de la responsabilidad y el esfuerzo."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span><strong>Habla de tu formación y cambio:</strong> "Durante ese tiempo me formé en [X] y estoy comprometido/a con mi nueva vida."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">4</span>
                    <span><strong>Enfócate en el futuro:</strong> "Estoy motivado/a para trabajar duro y demostrar mi valía con hechos."</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cancelación de antecedentes penales</h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  Los antecedentes penales <strong>se pueden cancelar</strong> una vez transcurrido un plazo desde que cumpliste la condena:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span><strong>6 meses</strong> para penas leves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span><strong>2 años</strong> para penas que no superen los 12 meses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span><strong>3 años</strong> para las demás penas menos graves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 font-bold">•</span>
                    <span><strong>10 años</strong> para penas graves</span>
                  </li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <p>
                    Puedes solicitar la cancelación en el <strong>Registro Central de Penados</strong> del Ministerio de Justicia.
                    El trámite es gratuito y se puede hacer online o presencialmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas que contratan */}
      <section id="empresas" className="py-16 px-4" aria-labelledby="empresas-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="empresas-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Empresas y organizaciones que dan oportunidades
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empresas de inserción</h3>
              <p className="text-gray-700 mb-4">
                Son empresas cuyo fin es la integración laboral de personas en riesgo de exclusión.
                Ofrecen un contrato de trabajo real con formación y acompañamiento.
              </p>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>FAEDEI</strong> — Federación de Asociaciones Empresariales de Empresas de Inserción. Directorio de empresas por comunidad autónoma.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Koopera</strong> — Cooperativa de iniciativa social con presencia en País Vasco, Madrid y Andalucía. Sectores: textil, logística, servicios ambientales.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Recíclame</strong> — Empresa de inserción dedicada al reciclaje y gestión de residuos en varias comunidades.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>A Toda Vela</strong> — Empresa de inserción en hostelería y restauración con programas formativos.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Programas de empleo de ONGs</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Fundación Adecco — Plan Integra:</strong> programa específico para personas con antecedentes penales. Incluye orientación, formación y acceso a ofertas de empleo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Cruz Roja — Programa de Empleo:</strong> itinerarios personalizados de inserción laboral con formación y acompañamiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Cáritas — Programa de Empleo:</strong> orientación laboral, talleres de empleo y bolsa de trabajo propia en cada diócesis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Fundación SURT:</strong> especializada en inserción laboral de mujeres en situación de vulnerabilidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Fundación Tomillo:</strong> formación y empleo para jóvenes y adultos en riesgo de exclusión en Madrid.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sectores con más oportunidades</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Construcción</h4>
                  <p className="text-gray-700 text-sm">Alta demanda de peones, albañiles, electricistas y fontaneros. Muchas empresas valoran la experiencia práctica por encima del historial.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hostelería</h4>
                  <p className="text-gray-700 text-sm">Cocina, sala, limpieza. Sector con alta rotación y muchas oportunidades de entrada sin experiencia previa.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Logística y almacén</h4>
                  <p className="text-gray-700 text-sm">Mozos de almacén, repartidores, preparadores de pedidos. El carnet de carretillero es una ventaja muy valorada.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Limpieza y mantenimiento</h4>
                  <p className="text-gray-700 text-sm">Limpieza industrial, mantenimiento de edificios, jardinería. Trabajo estable con horarios regulares.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Agricultura</h4>
                  <p className="text-gray-700 text-sm">Trabajo de temporada en recolección, invernaderos y explotaciones agrícolas. Especialmente en Andalucía, Murcia y Levante.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Reciclaje y medio ambiente</h4>
                  <p className="text-gray-700 text-sm">Empresas de inserción especializadas en gestión de residuos, reciclaje textil y servicios ambientales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="exito-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="exito-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Historias de éxito laboral
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "Después de 8 años sin trabajar, conseguí un empleo en construcción gracias a
                los cursos de formación. Ahora llevo 2 años en la empresa y ya soy capataz.
                La clave fue no rendirse y aprovechar todos los recursos disponibles."
              </p>
              <p className="text-amber-600 font-semibold">— Pedro, 45 años</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "Me formé en informática mientras estaba interna. Al salir, hice prácticas en
                una empresa de servicios digitales y me contrataron. Ahora vivo del desarrollo web."
              </p>
              <p className="text-amber-600 font-semibold">— María, 32 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Necesitas ayuda para encontrar empleo?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            No estás solo/a en esta búsqueda. Hay recursos y personas dispuestas a ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reinsercion"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver guía de reinserción
            </Link>
            <Link
              href="/recursos"
              className="inline-block bg-amber-600 text-white hover:bg-amber-700 font-bold py-3 px-8 rounded-lg transition-colors text-lg border-2 border-white"
            >
              Más recursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
