// utils/infographics.ts
import img1 from '../public/infographics/1-EmergencySupport.jpeg';
import img2 from '../public/infographics/2-ChildrenAssistance.jpeg';
import img3 from '../public/infographics/3-Events.jpeg';
import img4 from '../public/infographics/4-EssentialErrands.jpeg';

export const getInfographicImages = (): Array<{ src: string }> => {
  // Import images as objects to work with Next.js Image component
  return [
    img1,
    img2,
    img3,
    img4
  ];
};

// Alternative approach: dynamically import images (this would require build-time resolution)
export const importAllInfographics = async () => {
  // This would be the preferred approach if we can import images dynamically
  // For now, returning static paths
  return [
    { url: img1.src, name: 'Emergency Support' },
    { url: img2.src, name: 'Children Assistance' },
    { url: img3.src, name: 'Events Support' },
    { url: img4.src, name: 'Essential Errands' }
  ];
};
