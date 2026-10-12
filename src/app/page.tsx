import MotionHome from '@/components/motion/MotionHome';

export const metadata = {
  alternates: {
    canonical: "https://www.activewearclothingmanufacturers.com",
  },
};

// Homepage: the scroll-driven activewear construction film (the set comes
// apart seam by seam, then rebuilds). Copy and colors live in
// src/components/motion/config.ts.
export default function Home() {
  return <MotionHome />;
}
