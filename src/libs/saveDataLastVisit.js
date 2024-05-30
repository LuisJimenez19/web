import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

/* Detectar tipo de dispositivo */
export function getDeviceType() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  if (/Mobile|Opera Mini/i.test(userAgent)) {
    return "Mobile";
  }
  return "Desktop";
}

/* GUARDAR UBICACIÓN ACUTAL */
export function saveGeolocation({ city, country, flag }) {
  /* Para mejores estadísticas */
  const visitorUrl = window.location.toString();
  const deviceType = getDeviceType();
  const browserInfo = navigator.userAgent;
  const timestamp = Date.now();

  addDoc(collection(db, "visits"), {
    city,
    country,
    flag,
    timestamp,
    visitorUrl,
    deviceType,
    browserInfo,
  })
    .then((res) => {
      console.log(`Take for curious : ${res.id}`);
    })
    .catch((e) => e);
}
