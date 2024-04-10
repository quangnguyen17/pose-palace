import { redirect } from 'next/navigation'

export default async function App() {
  'use server'
  return redirect('https://calendly.com/posepalace/15min')
}
