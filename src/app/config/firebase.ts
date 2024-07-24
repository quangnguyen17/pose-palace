import { initializeApp, getApps } from 'firebase/app'
import { isSupported, getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyA0WEMkXzOkxUqRCYwcXIGWX-kaaydKyv8',
  authDomain: 'posepalace-df805.firebaseapp.com',
  projectId: 'posepalace-df805',
  storageBucket: 'posepalace-df805.appspot.com',
  messagingSenderId: '444862932659',
  appId: '1:444862932659:web:d12204f1daf410fc6eb2c6',
  measurementId: 'G-FCY1QKB94F',
}

export const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)
export const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null))
