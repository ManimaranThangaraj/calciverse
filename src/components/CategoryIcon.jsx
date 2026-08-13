import { Landmark, GraduationCap, HeartPulse, Wrench, Code2, Divide, Briefcase } from 'lucide-react'

const ICONS = {
  finance: Landmark,
  business: Briefcase,
  health: HeartPulse,
  education: GraduationCap,
  everyday: Wrench,
  math: Divide,
  developer: Code2,
}

export default function CategoryIcon({ slug, size = 20, ...props }) {
  const Icon = ICONS[slug] || Wrench
  return <Icon size={size} {...props} />
}