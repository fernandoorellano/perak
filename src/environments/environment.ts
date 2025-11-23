export const environment = {
     firebaseConfig:  {
          apiKey: import.meta.env.NG_APP_FIREBASE_APIKEY,
          authDomain: import.meta.env.NG_APP_FIREBASE_AUTHDOMAIN,
          projectId: import.meta.env.NG_APP_FIREBASE_PROJECTID,
          storageBucket: import.meta.env.NG_APP_FIREBASE_STORAGEBUCKET,
          messagingSenderId: import.meta.env.NG_APP_FIREBASE_MESAGING,
          appId: import.meta.env.NG_APP_FIREBASE_APPID
     },
     api: import.meta.env.NG_APP_API,
     fireNombreColeccion: import.meta.env.NG_APP_FIRE_NOMBRE_COLECCION,
     inicioTextoUrl: import.meta.env.NG_APP_WP_TEXTO_INICIO,
     cuerpoTextoUrl: import.meta.env.NG_APP_WP_TEXTO_CUERPO,
     usuarioColleccion: import.meta.env.NG_APP_FIRE_NOMBRE_COLECCION_USUARIO
};
