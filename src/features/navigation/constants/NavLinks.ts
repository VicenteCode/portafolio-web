import { User, Briefcase, GraduationCap, Wrench, Code, Home } from 'lucide-react'

export const NAV_ITEMS = [
  { key: 'start' as const, icon: Home, href: '#start' },
  { key: 'aboutMe' as const, icon: User, href: '#about-me' },
  { key: 'experience' as const, icon: Briefcase, href: '#experience' },
  { key: 'stack' as const, icon: Code, href: '#stack' },
  { key: 'skills' as const, icon: Wrench, href: '#skills' },
  { key: 'education' as const, icon: GraduationCap, href: '#education' },
]
