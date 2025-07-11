
import { SkeletonClientWrapper } from "./components/SkeletonClientWrapper";

export default function HomePage() {
  return (
    <>
      <SkeletonClientWrapper
        type="paragraph"
        loadertime={3000000}
        placeholder={false}
        circle={false}
        width={300}
        height={300}
        rows={3}
        widths={['100%', '50%', '100%']}
        
      />
    </>
  );
}
