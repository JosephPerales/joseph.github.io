const data = [
    {
        titulo: "Adsorción",
        definicion: `Fenómeno fisicoquímico que consiste en la fijación de sustancias gaseosas, líquidas o moléculas libres disueltas en la superficie de un sólido.`,
    },
    {
        titulo: "Absorción",
        definicion: `Fijación y concentración selectiva de sólidos disueltos en el interior de un material sólido, por difusión.`
    },
    {
        titulo: "Acidez",
        definicion: `La capacidad de una solución acuosa para reaccionar con los iones hidroxilo hasta un pH de neutralización.`
    },
    {
        titulo: "Acuífero",
        definicion: `Formación geológica de material poroso capaz de almacenar una apreciable cantidad de agua.`
    },
    {
        titulo: "Aereación",
        definicion: `Proceso de transferencia de oxígeno del aire al agua por medios naturales (flujo natural, cascadas, etc.) o artificiales (agitación mecánica o difusión de aire comprimido).`
    },
    {
        titulo: "Aeración mecánica",
        definicion: `Introducción de oxígeno del aire en un líquido por acción de un agitador mecánico.`
    },
    {
        titulo: "Aeración prolongada",
        definicion: `Una modificación del tratamiento con lodos activados que facilita la mineralización del lodo en el tanque de aeración.`
    },
    {
        titulo: "Adensador (Espesador)",
        definicion: `Tratamiento para remover líquido de los lodos y reducir su volumen.`
    },
    {
        titulo: "Afluente",
        definicion: `Agua u otro líquido que ingresa a un reservorio, planta de tratamiento o proceso de tratamiento.`
    },
    {
        titulo: "Agua residual",
        definicion: `Agua que ha sido usada por una comunidad o industria y que contiene material orgánico o inorgánico disuelto o en suspensión.`
    },
    {
        titulo: "Agua residual doméstica",
        definicion: `Agua de origen doméstico, comercial e institucional que contiene desechos fisiológicos y otros provenientes de la actividad humana.`
    },
    {
        titulo: "Agua residual municipal",
        definicion: `Son aguas residuales domésticas. Se puede incluir bajo esta definición a la mezcla de aguas residuales domésticas con aguas de drenaje pluvial o con aguas residuales de origen industrial, siempre que estas cumplan con los requisitos para ser admitidas en los sistemas de alcantarillado de tipo combinado`
    },
    {
        titulo: "Anaerobio",
        definicion: `Condición en la cual no hay presencia de aire u oxígeno libre.`
    },
    {
        titulo: "Análisis",
        definicion: `El examen de una sustancia para identificar sus componentes.`
    },
    {
        titulo: "Aplicación en el terreno",
        definicion: `Aplicación de agua residual o lodos parcialmente tratados, bajo condiciones controladas, en el terreno.`
    },
    {
        titulo: "Bacterias",
        definicion: `Grupo de organismos microscópicos unicelulares, con cromosoma bacteriano único, división binaria y que interviene en los procesos de estabilización de la materia orgánica.`
    },
    {
        titulo: "Bases de diseño",
        definicion: `Conjunto de datos para las condiciones finales e intermedias del diseño que sirven para el dimensionamiento de los procesos de tratamiento. Los datos generalmente incluyen: poblaciones, caudales, concentraciones y aportes per cápita de las aguas residuales. Los parámetros que usualmente determinan las bases del diseño son: DBO, sólidos en suspensión, coliformes fecales y nutrientes.`
    },
    {
        titulo: "Biodegradación",
        definicion: `Transformación de la materia orgánica en compuestos menos complejos, por acción de microorganismos.`
    },
    {
        titulo: "Biopelícula",
        definicion: `Película biológica adherida a un medio sólido y que lleva a cabo la degradación de la materia orgánica.`
    },
    {
        titulo: "By-pass",
        definicion: `Conjunto de elementos utilizados para desviar el agua residual de un proceso o planta de tratamiento en condiciones de emergencia, de mantenimiento o de operación.`
    },
    {
        titulo: "Cámara de contacto",
        definicion: `Tanque alargado en el que el agua residual tratada entra en contacto con el agente desinfectante.`
    },
    {
        titulo: "Carbón activado",
        definicion: `Gránulos carbonáceos que poseen una alta capacidad de remoción selectiva de compuestos solubles, por adsorción.`
    },
    {
        titulo: "Carga del diseño",
        definicion: `Relación entre caudal y concentración de un parámetro específico que se usa para dimensionar un proceso del tratamiento.`
    },
    {
        titulo: "Carga superficial",
        definicion: `Caudal o masa de un parámetro por unidad de área que se usa para dimensionar un proceso del tratamiento.`
    },
    {
        titulo: "Caudal pico",
        definicion: `Caudal máximo en un intervalo dado.`
    },
    {
        titulo: "Caudal máximo horario",
        definicion: "Caudal a la hora de máxima descarga."
    },
    {
        titulo: "Caudal medio",
        definicion: "Promedio de los caudales diarios en un período determinado."
    },
    {
        titulo: "Certificación",
        definicion: "Programa de la entidad de control para acreditar la capacidad del personal de operación y mantenimiento de una planta de tratamiento."
    },
    {
        titulo: "Clarificación",
        definicion: "Proceso de sedimentación para eliminar los sólidos sedimentables del agua residual."
    },
    {
        titulo: "Cloración",
        definicion: "Aplicación de cloro o compuestos de cloro al agua residual para desinfección y en algunos casos para oxidación química o control de olores."
    },
    {
        titulo: "Coagulación",
        definicion: "Aglomeración de partículas coloidales (< 0,001 mm) y dispersas (0,001 a 0,01 mm) en coágulos visibles, por adición de un coagulante."
    },
    {
        titulo: "Coagulante",
        definicion: "Electrolito simple, usualmente sal inorgánica, que contiene un catión multivalente de hierro, aluminio o calcio. Se usa para desestabilizar las partículas coloidales favoreciendo su aglomeración."
    },
    {
        titulo: "Coliformes",
        definicion: "Bacterias Gram negativas no esporuladas de forma alargada capaces de fermentar lactosa con producción de gas a 35 +/- 0,5 ºC (coliformes totales). Aquellas que tienen las mismas propiedades a 44.5 +/- 0,2 ºC en 24 horas se denominan coliformes fecales (ahora también denominados coliformes termotolerantes)."
    },
    {
        titulo: "Compensación",
        definicion: "Proceso por el cual se almacena agua residual y se amortigua las variaciones extremas de descarga, homogenizándose su calidad y evitándose caudales pico."
    },
    {
        titulo: "Criba gruesa",
        definicion: "Artefacto generalmente de barras paralelas de separación uniforme (4 a 10 cm) para remover sólidos flotantes de gran tamaño."
    },
    {
        titulo: "Criba Media",
        definicion: "Estructura de barras paralelas de separación uniforme (2 a 4 cm) para remover sólidos flotantes y en suspensión; generalmente se emplea en el tratamiento preliminar."
    },
    {
        titulo: "Criterios de diseño",
        definicion: "Guías de ingeniería que especifican objetivos, resultados o límites que deben cumplirse en el diseño de un proceso, estructura o componente de un sistema."
    },
    {
        titulo: "Cuneta de coronación",
        definicion: "Canal abierto, generalmente revestido, que se localiza en una planta de tratamiento con el fin de recolectar y desviar las aguas pluviales."
    },
    {
        titulo: "Demanda bioquímica de oxígeno (DBO)",
        definicion: "Cantidad de oxígeno que requieren los microorganismos para la estabilización de la materia orgánica bajo condiciones de tiempo y temperatura específicos (generalmente 5 días y a 20ºC)."
    },
    {
        titulo: "Demanda química de oxígeno (DQO)",
        definicion: "Medida de la cantidad de oxígeno requerido para la oxidación química de la materia orgánica del agua residual, usando como oxidante sales inorgánicas de permanganato o dicromato de potasio."
    },
    {
        titulo: "Densidad de energía",
        definicion: "Relación de la potencia instalada de un aerador y el volumen, en un tanque de aeración, laguna aerada o digestor aerobio."
    },
    {
        titulo: "Depuración de aguas residuales",
        definicion: "Purificación o remoción de sustancias objetables de las aguas residuales; se aplica exclusivamente a procesos de tratamiento de líquidos."
    },
    {
        titulo: "Derrame accidental",
        definicion: "Descarga directa o indirecta no planificada de un líquido que contiene sustancias indeseables que causan notorios efectos adversos en la calidad del cuerpo receptor. Esta descarga puede ser resultado de un accidente, efecto natural u operación inapropiada."
    },
    {
        titulo: "Desarenadores",
        definicion: "Cámara diseñada para reducir la velocidad del agua residual y permitir la remoción de sólidos minerales (arena y otros), por sedimentación."
    },
    {
        titulo: "Descarga controlada",
        definicion: "Regulación de la descarga del agua residual cruda para eliminar las variaciones extremas de caudal y calidad."
    },
    {
        titulo: "Desecho ácido",
        definicion: "Descarga que contiene una apreciable cantidad de acidez y pH bajo."
    },
    {
        titulo: "Desecho peligroso",
        definicion: "Desecho que tiene una o más de las siguientes características: corrosivo, reactivo, explosivo, tóxico, inflamable o infeccioso."
    },
    {
        titulo: "Desecho industrial",
        definicion: "Desecho originado en la manufactura de un producto específico."
    },
    {
        titulo: "Deshidratación de lodos",
        definicion: "Proceso de remoción del agua contenida en los lodos."
    },
    {
        titulo: "Desinfección",
        definicion: "La destrucción de microorganismos presentes en las aguas residuales mediante el uso de un agente desinfectante."
    },
    {
        titulo: "Difusor",
        definicion: "Placa porosa, tubo u otro artefacto, a través de la cual se inyecta aire comprimido u otros gases en burbujas, a la masa líquida."
    },
    {
        titulo: "Digestión",
        definicion: "Descomposición biológica de la materia orgánica del lodo que produce una mineralización, licuefacción y gasificación parcial."
    },
    {
        titulo: "Digestión aerobia",
        definicion: "Descomposición biológica de la materia orgánica del lodo, en presencia de oxígeno."
    },
    {
        titulo: "Digestión anaerobia",
        definicion: "Descomposición biológica de la materia orgánica del lodo, en ausencia de oxígeno."
    },
    {
        titulo: "Disposición final",
        definicion: "Disposición del efluente o del lodo tratado de una planta de tratamiento."
    },
    {
        titulo: "Distribuidor rotativo",
        definicion: "Dispositivo móvil que gira alrededor de un eje central y está compuesto por brazos horizontales con orificios que descargan el agua residual sobre un filtro biológico. La acción de descarga de los orificios produce el movimiento rotativo."
    },
    {
        titulo: "Edad del lodo",
        definicion: "Parámetro de diseño y operación propio de los procesos de lodos activados que resulta de la relación de la masa de sólidos volátiles presentes en el tanque de aeración dividido por la masa de sólidos volátiles removidos del sistema por día. El parámetro se expresa en días."
    },
    {
        titulo: "Eficiencia del tratamiento",
        definicion: "Relación entre la masa o concentración removida y la masa o concentración aplicada, en un proceso o planta de tratamiento y para un parámetro específico. Puede expresarse en decimales o porcentaje."
    },
    {
        titulo: "Efluente",
        definicion: "Líquido que sale de un proceso de tratamiento."
    },
    {
        titulo: "Efluente final",
        definicion: "Líquido que sale de una planta de tratamiento de aguas residuales."
    },
    {
        titulo: "Emisario submarino",
        definicion: "Tubería y accesorios complementarios que permiten la disposición de las aguas residuales pretratadas en el mar."
    },
    {
        titulo: "Emisor",
        definicion: "Canal o tubería que recibe las aguas residuales de un sistema de alcantarillado hasta una planta de tratamiento o de una planta de tratamiento hasta un punto de disposición final."
    },
    {
        titulo: "Examen bacteriológico",
        definicion: "Análisis para determinar y cuantificar el número de bacterias en las aguas residuales."
    },
    {
        titulo: "Factor de carga",
        definicion: "Parámetro operacional y de diseño del proceso de lodos activados que resulta de dividir la masa del sustrato (kg DBO/d) que alimenta a un tanque de aeración, entre la masa de microorganismos en el sistema, representada por la masa de sólidos volátiles."
    },
    {
        titulo: "Filtro biológico",
        definicion: "Sinónimo de “filtro percolador”, “lecho bacteriano de contacto” o 'biofiltro'."
    },
    {
        titulo: "Filtro percolador",
        definicion: "Sistema en el que se aplica el agua residual sedimentada sobre un medio filtrante de piedra gruesa o material sintético. La película de microorganismos que se desarrolla sobre el medio filtrante estabiliza la materia orgánica del agua residual."
    },
    {
        titulo: "Fuente no puntual",
        definicion: "Fuente de contaminación dispersa."
    },
    {
        titulo: "Fuente puntual",
        definicion: "Cualquier fuente definida que descarga o puede descargar contaminantes."
    },
    {
        titulo: "Grado de tratamiento",
        definicion: "Eficiencia de remoción de una planta de tratamiento de aguas residuales para cumplir con los requisitos de calidad del cuerpo receptor o las normas de reuso."
    },
    {
        titulo: "Igualación",
        definicion: "Proceso por el cual se almacena agua residual y se amortigua las variaciones extremas de descarga, homogenizándose su calidad y evitándose caudales pico."
    },
    {
        titulo: "Impacto ambiental",
        definicion: "Cambio o efecto sobre el ambiente que resulta de una acción específica."
    },
    {
        titulo: "Impermeable",
        definicion: "Que impide el paso de un líquido."
    },
    {
        titulo: "Interceptor",
        definicion: "Canal o tubería que recibe el caudal de aguas residuales de descargas transversales y las conduce a una planta de tratamiento."
    },
    {
        titulo: "Irrigación superficial",
        definicion: "Aplicación de aguas residuales en el terreno de tal modo que fluyan desde uno o varios puntos hasta el final de un lote."
    },
    {
        titulo: "IVL (Índice Volumétrico de lodo)",
        definicion: "Volumen en mililitros ocupado por un gramo de sólidos, en peso seco, de la mezcla lodo / agua tras una sedimentación de 30 minutos en un cilindro graduado de 1000 ml."
    },
    {
        titulo: "Laguna aerada",
        definicion: "Estanque para el tratamiento de aguas residuales en el cual se inyecta oxígeno por acción mecánica o difusión de aire comprimido."
    },
    {
        titulo: "Laguna aerobia",
        definicion: "Estanque con alta producción de biomasa."
    },
    {
        titulo: "Laguna anaerobia",
        definicion: "Estanque con alta carga orgánica en la cual se efectúa el tratamiento en la ausencia de oxígeno. Este tipo de laguna requiere tratamiento posterior complementario."
    },
    {
        titulo: "Laguna de alta producción de biomasa",
        definicion: 'Estanque normalmente de forma alargada, con un corto período de retención, profundidad reducida y con facilidades de mezcla que maximizan la producción de algas. (Otros términos utilizados pero que están tendiendo al desuso son: “laguna aerobia", “laguna fotosintética” y “laguna de alta tasa”)'
    },
    {
        titulo: "Laguna de estabilización",
        definicion: "Estanque en el cual se descarga aguas residuales y en donde se produce la estabilización de materia orgánica y la reducción bacteriana."
    },
    {
        titulo: "Laguna de descarga controlada",
        definicion: "Estanque de almacenamiento de aguas residuales tratadas, normalmente para el reuso agrícola, en el cual se embalsa el efluente tratado para ser utilizado en forma discontinua, durante los períodos de mayor demanda."
    },
    {
        titulo: "Laguna de lodos",
        definicion: "Estanque para almacenamiento, digestión o remoción del líquido del lodo."
    },
    {
        titulo: "Laguna de maduración",
        definicion: "Estanque de estabilización para tratar el efluente secundario o aguas residuales previamente tratadas por un sistema de lagunas, en donde se produce una reducción adicional de bacterias. Los términos “lagunas de pulimento” o “lagunas de acabado” tienen el mismo significado."
    },
    {
        titulo: "Laguna facultativa",
        definicion: "Estanque cuyo contenido de oxígeno varía de acuerdo con la profundidad y hora del día. En el estrato superior de una laguna facultativa existe una simbiosis entre algas y bacterias en presencia de oxígeno, y en los estratos inferiores se produce una biodegradación anaerobia."
    },
    {
        titulo: "Lechos bacterianos de contacto",
        definicion: "(Sinónimo de “filtros biológicos” o “filtros percoladores)."
    },
    {
        titulo: "Lecho de secado",
        definicion: "Tanques de profundidad reducida con arena y grava sobre drenes, destinado a la deshidratación de lodos por filtración y evaporación."
    },
    {
        titulo: "Licor mezclado",
        definicion: "Mezcla de lodo activado y desecho líquido, bajo aeración en el proceso de lodos activados."
    },
    {
        titulo: "Lodo activado",
        definicion: "Lodo constituido principalmente de biomasa con alguna cantidad de sólidos inorgánicos que recircula del fondo del sedimentador secundario al tanque de aeración en el tratamiento con lodos activados."
    },
    {
        titulo: "Lodo activado de exceso",
        definicion: "Parte del lodo activado que se retira del proceso de tratamiento de las aguas residuales para su disposición posterior ( espesamiento, digestión o secado)."
    },
    {
        titulo: "Lodo crudo",
        definicion: "Lodo retirado de los tanques de sedimentación primaria o secundaria, que requiere tratamiento posterior (espesamiento o digestión)."
    },
    {
        titulo: "Lodo digerido",
        definicion: "Lodo mineralizado a través de la digestión aerobia o anaerobia."
    },
    {
        titulo: "Manejo de aguas residuales",
        definicion: "Conjunto de obras de recolección, tratamiento y disposición y acciones de operación, monitoreo, control y vigilancia en relación a las aguas residuales."
    },
    {
        titulo: "Medio filtrante",
        definicion: "Material granular a través del cual pasa el agua residual con el propósito de purificación, tratamiento o acondicionamiento."
    },
    {
        titulo: "Metales pesados",
        definicion: "Elementos metálicos de alta densidad (por ejemplo, mercurio, cromo, cadmio, plomo) generalmente tóxicos, en bajas concentraciones al hombre, plantas y animales."
    },
    {
        titulo: "Mortalidad de las bacterias",
        definicion: "Reducción de la población bacteriana normalmente expresada por un coeficiente cinético de primer orden en d-1."
    },
    {
        titulo: "Muestra compuesta",
        definicion: "Combinación de alicuotas de muestras individuales (normalmente en 24 horas) cuyo volumen parcial se determina en proporción al caudal del agua residual al momento de cada muestreo."
    },
    {
        titulo: "Muestra puntual",
        definicion: "Muestra tomada al azar a una hora determinada, su uso es obligatorio para el examen de un parámetro que normalmente no puede preservarse."
    },
    {
        titulo: "Muestreador automático",
        definicion: "Equipo que toma muestras individuales, a intervalos predeterminados."
    },
    {
        titulo: "Muestreo",
        definicion: "Toma de muestras de volumen predeterminado y con la técnica de preservación correspondiente para el parámetro que se va a analizar."
    },
    {
        titulo: "Nematodos intestinales",
        definicion: "Parásitos (Áscaris lumbricoides, Trichuris trichiura, Necator americanus y Ancylostoma duodenale, entre otros) cuyos huevos requieren de un período latente de desarrollo antes de causar infección y su dosis infectiva es mínima (un organismo). Son considerados como los organismos de mayor preocupación en cualquier esquema de reutilización de aguas residuales. Deben ser usados como microorganismos indicadores de todos los agentes patógenos sedimentables, de mayor a menor tamaño (incluso quistes amibianos)."
    },
    {
        titulo: "Nutriente",
        definicion: "Cualquier sustancia que al ser asimilada por organismos, promueve su crecimiento. En aguas residuales se refiere normalmente al nitrógeno y fósforo, pero también pueden ser otros elementos esenciales."
    },
    {
        titulo: "Obras de llegada",
        definicion: "Dispositivos de la planta de tratamiento inmediatamente después del emisor y antes de los procesos de tratamiento."
    },
    {
        titulo: "Oxígeno disuelto",
        definicion: "Concentración de oxígeno solubilizado en un líquido."
    },
    {
        titulo: "Parásito",
        definicion: "Organismo protozoario o nematodo que habitando en el ser humano puede causar enfermedades."
    },
    {
        titulo: "Período de retención nominal",
        definicion: "Relación entre el volumen y el caudal efluente."
    },
    {
        titulo: "pH",
        definicion: "Logaritmo con signo negativo de la concentración de iones hidrógeno, expresado en moles por litro."
    },
    {
        titulo: "Planta de tratamiento",
        definicion: "Infraestructura y procesos que permiten la depuración de aguas residuales."
    },
    {
        titulo: "Planta piloto",
        definicion: "Planta de tratamiento a escala, utilizada para la determinación de las constantes cinéticas y parámetros de diseño del proceso."
    },
    {
        titulo: "Población equivalente",
        definicion: "La población estimada al relacionar la carga de un parámetro (generalmente DBO, sólidos en suspensión) con el correspondiente aporte per cápita (g DBO/(hab.d) o g SS/ (hab.d))."
    },
    {
        titulo: "Porcentaje de reducción",
        definicion: "Ver eficiencia del tratamiento (3.58)."
    },
    {
        titulo: "Pretratamiento",
        definicion: "Procesos que acondicionan las aguas residuales para su tratamiento posterior."
    },
    {
        titulo: "Proceso biológico",
        definicion: "Asimilación por bacterias y otros microorganismos de la materia orgánica del desecho, para su estabilización."
    },
    {
        titulo: "Proceso de lodos activados",
        definicion: "Tratamiento de aguas residuales en el cual se somete a aeración una mezcla (licor mezclado) de lodo activado y agua residual. El licor mezclado es sometido a sedimentación para su posterior recirculación o disposición de lodo activado."
    },
    {
        titulo: "Reactor anaerobio de flujo ascendente",
        definicion: "Proceso continuo de tratamiento anaerobio de aguas residuales en el cual el desecho circula en forma ascendente a través de un manto de lodos o filtro, para la estabilización parcial de la materia orgánica. El desecho fluye del proceso por la parte superior y normalmente se obtiene gas como subproducto."
    },
    {
        titulo: "Requisito de oxígeno",
        definicion: "Cantidad de oxígeno necesaria para la estabilización aerobia de la materia orgánica y usada en la reproducción o síntesis celular y en el metabolismo endógeno."
    },
    {
        titulo: "Reuso de aguas residuales",
        definicion: "Utilización de aguas residuales debidamente tratadas para un propósito específico."
    },
    {
        titulo: "Sedimentación final",
        definicion: "Proceso de separación de la biomasa en suspensión producida en el tratamiento biológico o también conocido como sedimentación secundaria."
    },
    {
        titulo: "Sedimentación primaria",
        definicion: "Remoción de material sedimentable presente en las aguas residuales crudas. Este proceso requiere el tratamiento posterior del lodo decantado."
    },
    {
        titulo: "Sedimentación secundaria",
        definicion: "Proceso de separación de la biomasa en suspensión producida en el tratamiento biológico."
    },
    {
        titulo: "Sistema combinado",
        definicion: "Sistema de alcantarillado que recibe aguas de lluvias y aguas residuales de origen doméstico o industrial."
    },
    {
        titulo: "Sistema individual de tratamiento",
        definicion: "Sistema de tratamiento para una vivienda o un número reducido de viviendas."
    },
    {
        titulo: "Sólidos activos",
        definicion: "Parte de los sólidos en suspensión volátiles que representan a los microorganismos."
    },
    {
        titulo: "SSVTA",
        definicion: "Sólidos en suspensión volátiles en el tanque de aeración."
    },
    {
        titulo: "Tanque séptico",
        definicion: "Sistema individual de disposición de aguas residuales para una vivienda o conjunto de viviendas que combina la sedimentación y la digestión. El efluente es dispuesto por percolación en el terreno y los sólidos sedimentados y acumulados son removidos periódicamente en forma manual o mecánica."
    },
    {
        titulo: "Tasa de filtración",
        definicion: "Velocidad de aplicación del agua residual a un filtro."
    },
    {
        titulo: "Tóxicos",
        definicion: "Elementos o compuestos químicos capaces de ocasionar daño por contacto o acción sistémica a plantas, animales y al hombre."
    },
    {
        titulo: "Tratamiento avanzado",
        definicion: `Proceso de tratamiento fisicoquímico o biológico para alcanzar un grado de tratamiento superior al tratamiento secundario. Puede implicar la remoción de varios parámetros como:
- Remoción de sólidos en suspensión (microcribado, clarificación química, filtración, etc.).
- Remoción de complejos orgánicos disueltos (absorción, oxidación química, etc.).
- Remoción de compuestos inorgánicos disueltos (destilación, electrodiálisis, intercambio iónico, ósmosis inversa, precipitación química, etc.).
- Remoción de nutrientes (nitrificación-denitrificación, desgasificación del amoníaco, precipitación química, asimilación, etc.).`
    },
    {
        titulo: "Tratamiento anaerobio",
        definicion: "Estabilización de un desecho orgánico por acción de microorganismos en ausencia de oxígeno."
    },
    {
        titulo: "Tratamiento biológico",
        definicion: "Procesos de tratamiento que intensifican la acción de los microorganismos para estabilizar la materia orgánica presente."
    },
    {
        titulo: "Tratamiento convencional",
        definicion: "Proceso de tratamiento bien conocido y utilizado en la práctica. Generalmente se refiere a procesos de tratamiento primario o secundario y frecuentemente se incluye la desinfección mediante cloración. Se excluyen los procesos de tratamiento terciario o avanzado."
    },
    {
        titulo: "Tratamiento conjunto",
        definicion: "Tratamiento de aguas residuales domésticas e industriales en la misma planta."
    },
    {
        titulo: "Tratamiento de lodos",
        definicion: "Procesos de estabilización, acondicionamiento y deshidratación de lodos."
    },
    {
        titulo: "Tratamiento en el terreno",
        definicion: "Aplicación sobre el terreno de las aguas residuales parcialmente tratadas con el fin de alcanzar un tratamiento adicional."
    },
    {
        titulo: "Tratamiento preliminar",
        definicion: "Procesos iniciales de tratamiento que se llevan a cabo para eliminar los sólidos grandes y objetos no deseados del agua residual antes de pasar a etapas de tratamiento posteriores."
    },
    {
        titulo: "Tratamiento primario",
        definicion: "Remoción de una considerable cantidad de materia en suspensión sin incluir la materia coloidal y disuelta."
    },
    {
        titulo: "Tratamiento químico",
        definicion: "Aplicación de compuestos químicos en las aguas residuales para obtener un resultado deseado; comprende los procesos de precipitación, coagulación, floculación, acondicionamiento de lodos, desinfección, etc."
    },
    {
        titulo: "Tratamiento secundario",
        definicion: "Nivel de tratamiento que permite lograr la remoción de materia orgánica biodegradable y sólidos en suspensión."
    },
    {
        titulo: "Tratamiento terciario",
        definicion: "Nivel avanzado de tratamiento que se realiza después del tratamiento primario y secundario, con el objetivo de remover contaminantes específicos y alcanzar altos estándares de calidad en el efluente tratado."
    },
    {
        titulo: "Porcentaje de remoción",
        definicion: "Indicador que expresa la eficiencia de un proceso o planta de tratamiento al remover una masa o concentración específica de un parámetro, en relación a la masa o concentración inicial aplicada. Se expresa como un valor porcentual y cuantifica la reducción de dicho parámetro durante el proceso de tratamiento."
    },
]


function dataRandom() {
    return data[Math.floor(Math.random()*data.length)]
}

function sortData(array) {
    const newArray = []
    while(newArray.length != array.length){
        let option = array[Math.floor(Math.random()*array.length)]
        if(!newArray.includes(option)) {
            newArray.push(option)
        }
    }
    return newArray
}

function selectDataRandom() {
    const currentData = dataRandom();
    const badData = [];
    for(let i=0; badData.length != 2; i++){
        let badItem = dataRandom();
        if(badItem != currentData) {
            badData.push(badItem)
        };
    };
    const options = sortData([badData[0].titulo, badData[1].titulo, currentData.titulo]);
    
    return {
        currentData,
        options
    }
}

const main = document.getElementById("main-container");
const boton = document.getElementById("refresh");
const options = document.getElementsByClassName("option")



function renderDataRandom() {
    const data = selectDataRandom();

    main.innerHTML = `
    <div id="titulo">Elige la alternativa correcta para esta definición 🧐🍷</div>
    <div class="definicion">${data.currentData.definicion}</div>
    <div class="options">
        ${data.options.map( item => `<div class="option" ${item === data.currentData.titulo? "id=correct-option": ""}>${item}</div>`).join("")}
    </div>
    `;

    [...options].map((item) => {
        item.addEventListener("click", () => {
            let div = document.createElement("div")
            div.id ="resultado"
            main.appendChild(div).innerHTML = `${item.id === "correct-option"? '<div id="good">Good!</div>': '<div id="fail">Failed!</div>'}`
            setTimeout(()=> {
                renderDataRandom()
            }, 2000)
        })
    })
}

renderDataRandom();
boton.addEventListener("click", renderDataRandom);


console.log(options)