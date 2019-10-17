exports.messages = {
    entitiesInSpanish: {
      laboralExperiences: 'las experiencias laborales',
      laboralExperience: 'la experiencia laboral',
      academicTitlesUsers: 'los títulos académicos',
      academicTitleUser: 'el título académico',
      vacancyApplications: 'las aplicaciones a vacantes',
      vacancyApplication: 'la aplicación a vacante',
      tests: 'las pruebas',
      test: 'la prueba',
      testsAnswers: 'las respuestas de las pruebas',
      testAnswers: 'la respuestas de la pruebas',
      interviews: 'las entrevistas',
      interview: 'la entrevista',
      skills: 'las competencias y/o habilidades',
      skill: 'la competencia y/o habilidad',
      sectors: 'los sectores',
      sector: 'el sector',
      additionalsServices: 'los servicios adicionales',
      additionalService: 'el servicio adicional',
      studies: 'los estudios',
      study: 'el estudio',
      contractTypes: 'los tipos de contratos',
      contractType: 'el tipo de contrato',
      businessAlliances: 'las alianzas empresariales',
      businessAlliance: 'la alinza empresarial',
      successCases: 'los casos de éxito',
      successCase: 'el caso de éxito',
      posts: 'los artículos',
      post: 'el articulo',
      administrators: 'los administradores',
      administrator: 'el administrador',
      companies: 'las empresas',
      company: 'la empresa',
      entryOrders: 'las ordenes de ingreso',
      entryOrder: 'la orden de ingreso',
      vacancies: 'las vacantes',
      vacancy: 'la vacante',
      references: 'las referencias',
      referency: 'la referencia',
      payments: 'los pagos',
      payment: 'el pago',
      entryOrders: 'las ordenes de ingreso',
      entryOrder: 'la orden de ingreso',
      salesAgents: 'los agentes de ventas',
      salesAgent: 'el agente de venta',
      users: 'los usuarios',
      user: 'el usuario',
      curriculumsSeen: 'las hojas de vidas vistas',
      curriculumSeen: 'la hoja de vida vista',
      packages: 'los paquetes de vacantes',
      buyPackage: 'paquete'
    },
    CRUD: {
      error: {
        create: 'Error creando ${entity}.',
        find: 'Error buscando ${entity}.',
        delete: 'Error eliminando ${entity}.',
        update: 'Error actualizando ${entity}.',
        notFound: 'La entidad ${entity} no fue encontrada en el api',
        withoutFile: 'Error, debe enviar al menos un archivo.'
      },
      success: {
        create: 'Se guardo exitosamente ${entity}.',
        find: 'Se busco con éxito ${entity}.',
        delete: 'Se elimino con éxito ${entity}.',
        update: 'Se actualizo con éxito ${entity}.'
      }
    },
    signin: {
      error: {
        1: 'Error iniciando sesión',
        2: 'Email o usuario no encontrado',
        3: 'Contraseña incorrecta',
        invalidToken: 'Token inválido!'
      },
      success: {
        1: 'Inicio de sesión exitoso'
      }
    },
    signout: {
      success: 'La sesión fue cerrada con éxito.'
    },
    resetPassword: {
      error: {
        1: 'Correo no encontrado.',
        2: 'Error tratando de enviar un correo para restablecer la contraseña del usuario.',
        URLexpired: "La URL que le fue enviada a expirado, por favor genere una nueva en el botón 'olvidaste tu contraseña'",
        malformetToken: 'El código contenido en la URL tiene un formato incorrecto, intentelo más tarde',
        URLdontExist: 'La URL ya fue usada o fue generada una nueva en remplazo de esta.'
  
      },
      success: {
        1: 'Se ha enviado un mensaje a tu correo con un enlace para restablecer tu contraseña con una vigencia de 1 hora.'
      }
    },
    changePassword: {
      error: {
        1: 'La contraseña debe tener como mínimo 1 número, 1 letra, mínimo 6 caracteres y máximo 50 y sin espacios.',
        2: 'La confirmación de la contraseña no es igual a la primera contraseña digitada.',
        3: 'Oh no, ha ocurrido un error tratando de cambiar la contraseña del usuario.',
        4: 'Error tratando de cambiar la contrase del usuario.'
      },
      success: {
        1: 'La contraseña fue cambiada exitosamente, ya puede iniciar sesión con esta nueva contraseña.'
      }
    },
    auth: {
      errors: {
        userIWithoutPermissions: 'Usuario sin permiso para realizar esta acción',
        tokenDontSended: 'Token no enviado en el header'
      },
      success: {
        success: 'Token valido o vigente'
      }
    },
    emails: {
      hi: 'Hola',
      email: 'Correo: ',
      password: 'Contraseña: ',
      telephone: 'Teléfono',
      resetPassword: {
        message1: 'Este correo fue enviado para restablecer la contraseña de su usuario en la plataforma oportunidApp, si no ha sido usted, haga caso omiso, de lo contrario presione el siguiente botón para restablecer su contraseña.',
        textButton: 'cambiar contraseña'
      },
      newAdministratorUser: {
        message1: 'Bienvenido a oportunidApp, fue creado un usuario para ti y además te asignamos una clave de acceso temporal que podrás cambiar en cualquier momento desde tu perfil de usuario, tus datos de acceso a la plataforma son:',
        message2: 'Para ir a la plataforma presione el siguiente boton.',
        textButton: 'Ir a plataforma'
      },
      testDone: {
        message1: 'La prueba ',
        message2: ' para la vacante ',
        message3: ' fue realizada satisfactoriamente!. Si es apto para la vacante sera contactado próximamente para agendar una entrevista, muchas gracias.'
      },
      companyFullRegister: {
        message1: 'Hola agente comercial, la empresa ',
        message2: ' se ha registrado en la plataforma.  Su información de contacto es:'
      },
      interview: {
        message1: 'Se le ha asignado una nueva entrevista para la vacante ',
        message2: 'el dia',
        message3: 'a las ',
        message4: 'en la dirección ',
        message5: 'Se actualizaron los datos de su entrevista para la vacante ',
        message6: 'Se ha cancelado su entrevista para la vancate '
      },
      createEntryOrders: {
        message1_1: 'La compañia ',
        message1_2: 'ha generado una nueva orden de ingreso para la vacante ',
        message1_3: ' y el usuario '
      },
      footer: {
        title: 'OportunidApp',
        address: 'Cl. 64 #50 - 03',
        cityAndState: 'Barranquilla, Atlántico',
        website: 'https://grupologis.co'
      }
    },
    payments: {
      validation: {
        1: 'El valor enviado para realizar el pagado, no corresponde al valor del detalle de la vacante.',
        2: 'El valor enviado para realizar el pagado, no corresponde al valor del detalle del paquete.'
      },
      creditCard: {
        error: 'Error realizando pago por medio de tarjeta de crédito.',
        success: 'Se realizo la transacción por medio de tarjeta de crédito de forma exitosa'
      },
      buyPackage: {
        success: 'Compra de ${entity} exitosa',
        error: 'Error en compra de ${entity}',
        not_found: 'No se ha encontrado ${entity}',
      },
      purchaseVacancy: {
        success: 'Compra de ${entity} exitosa',
        error: 'Error en compra de ${entity}',
        rejected: 'No posee paquetes válidos para crear vacantes'
      }
    },
    company: {
      qualified: 'La empresa ya realizo la calificación de la plataforma anteriormente.'
    },
    updateAdministratorUser: {
      errors: {
        1: 'Ya existe un usuario registrado con este correo'
      }
    },
    reportsTest: {
      success: {
        create: 'Se genero exitosamente el reporte de pruebas de usuario apto.'
      },
      error: {
        create: 'Error generando el reporte de pruebas de usuario apto.'
      }
    },
    validations: {
      length: {
        max: {
          4: 'El campo no debe tener más de 4 caracteres',
          6: 'El campo no debe tener más de 6 caracteres',
          10: 'El campo no debe tener más de 10 caracteres',
          30: 'El campo no debe tener más de 30 caracteres',
          100: 'El campo no debe tener más de 100 caracteres',
          500: 'El campo no debe tener más de 500 caracteres'
        },
        min: {
          4: 'El campo debe tener más de 4 caracteres',
          6: 'El campo debe tener más de 6 caracteres',
          10: 'El campo debe tener más de 10 caracteres',
          30: 'El campo debe tener más de 30 caracteres'
        }
      },
      array: {
        length: {
          equal: {
            5: 'El array debe ser de longitud igual a 5.',
            3: 'El array debe ser de longitud igual a 3.'
          }
        },
        contentElement: {
          max10Min1: 'Los numeros contenidos en el array deben ser de valor maximo 10 y minimo 1.'
        },
        error: 'El elemento debe ser de tipo array'
      },
      isInt: {
        min: {
          1: 'El numero no debe ser menor que 1.',
          8: 'El numero no debe ser menor que 11111111.'
        },
        max: {
          5: 'El numero no debe ser mayor que 5.',
          15: 'El numero no debe ser mayor que 999999999999999.'
        }
      },
      interviews: {
        errors: {
          invalidFormatHour: 'Formato de hora inválida',
          badRangeHour: 'La hora de la entrevista no puede ser antes de las 7 de la mañana ni mayor a las 7 de la noche.',
          badRangeWeekDay: 'El dia de la entrevista debe ser de lunes a viernes de 7 de la mañana a 7 de la noche.'
        }
      },
      string: 'El campo debe ser de tipo texto',
      exist: 'El campo no fue enviado y es obligatorio',
      not: 'Campo vacío',
      email: 'Formato de email inválido',
      numeric: 'El parametro debe ser un número.',
      boolean: 'El parametro debe ser un booleano (true o false)',
      emailRepeat: 'Nombre de usuario o correo ya registrado.',
      isBefore: 'La fecha debe ser menor a la fecha actual.',
      isAfter: 'La fecha debe ser posterior a la fecha actual.',
      ISODate: 'La fecha enviada no tiene formato de fecha ISO 8601',
      isURL: 'El texto enviado no tiene formato de URL.',
      error: 'Error, algunos parametros enviados no cumplen con las caracteristicas obligatorias',
      vacancyApplicationRepeat: 'Error, ya usted se encuentra inscrito en la vacante.',
      vacancyApplicationExperience: 'Usted no cuenta con la experiencia requerida.',
      profileNotComplete: 'Su perfil aun no ha sido completado, complete su perfil antes de aplicar a cualquier vacante.',
      imageMax5Mb: 'Archivo ${file.originalname} supera el tamaño maximo de un archivo permitido que es de 5 mb',
      allowedFormatImages: 'La imagen ${file.originalname} tiene un formato que no es permitido ${file.mimetype}, los formatos permitidos son los siguientes image/png, image/jpeg, image/gif',
      allowedFormatDocuments: 'El archivo ${file.originalname} tiene un formato que no es permitido ${file.mimetype}, los formatos permitidos son los siguientes docx, html y pdf',
      incompleteAnswers: 'Error, se encontro que las preguntas estan incompletas, por favor verifique sus respuestas.',
      errorIncompleteAnswers: 'Las respuestas equivalentes al questionsTestId ${element.id} y indice ${index} estan incompletas.',
      completeTestAnswers: 'Validación de número de respuestas por habilidad superada.',
      errorMinimalTestAnswer: 'Error, una de las respuestas es menor a ${min}, por favor verifique sus respuestas.',
      errorMinimalTestAnswerDetails: 'La respuesta equivalente al questionsTestId ${element.id}, indice ${index} en la posición de respuesta ${i} es menor a ${min}.',
      errorMaximunTestAnswer: 'Error, una de las respuestas es mayor a ${max}, por favor verifique sus respuestas.',
      errorMaximunTestAnswerDetails: 'La respuesta equivalente al questionsTestId ${element.id}, indice ${index} en la posición de respuesta ${i} es mayor a ${max}.',
      answersTestNoFound: 'Error, no se enviaron las respuestas dentro del array questions test.',
      testDone: 'La prueba que intenta realizar ya fue realizada con anterioridad.',
      wasAsignedInterview: 'Error, el usuario ya tiene una entrevista asignada para esta vacante.',
      interviewerNotAvailable: 'Error, el entrevistador ya tiene una entrevista a esta hora, intente una hora diferente.',
      validationReferencesNotPermitted: 'Para realizar la verificación de referencias, el usuario debe primero aprobar las pruebas de la vacante y la entrevista.',
      validationReferencesDone: 'La validación de referencias ya fue realizada para el usuario en esta vacante.',
      sectorWithoutTestCreated: 'El sector de la vacante no tiene pruebas creadas para su asignación, comuniquese con los administradores del sistema para que sean creadas las respectivas pruebas para el sector de su vacante.',
      errorDeleteVacancyWhenHaveApplications: 'No se puede eliminar la vacante debido a que al menos 1 usuario a aplicado a esta.'
    }
  }
  