import { redirect } from 'next/navigation'

export default function Home() {
  //redirect to the cars page
  redirect("/cars")
}
