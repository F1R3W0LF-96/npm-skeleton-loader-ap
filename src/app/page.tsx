'use client';

import {   SkeletonLoader,
  SkeletonImage,
  SkeletonParagraph,
 } from "./components";
import { useSkeleton } from "./components/useSkeleton";

export default function HomePage() {
  const loading = useSkeleton(5000); // Simulates a 1-second loading state
console.log(loading,"loading")
  return (
    <>
     <SkeletonLoader loading={true}>
      <div className="flex items-center space-x-4 p-4">
        <SkeletonImage size={48} />
        <SkeletonParagraph rows={10} 
          widths={['100%', '80%', '60%']}
          spacing="0.75rem"
        />
      </div>
    </SkeletonLoader>
    </>
  );
}