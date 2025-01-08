import { LucideProps } from 'lucide-react'

const VipIcon = (props: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 20h20" />
      <path d="M5 4L12 16L19 4" />
    </svg>
  )
}

export { VipIcon }
export default VipIcon 