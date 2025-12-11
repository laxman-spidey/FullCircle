// utils/infographics.ts
export const getInfographicImages = (): string[] => {
  // This function returns a list of all infographic image paths
  // In a real implementation with dynamic imports, you might use webpack's require.context
  // or a similar approach, but for now we'll return the known paths
  return [
    '/infographics/1-EmergencySupport.jpeg',
    '/infographics/2-ChildrenAssistance.jpeg',
    '/infographics/3-Events.jpeg',
    '/infographics/4-EssentialErrands.jpeg'
  ];
};

// Alternative approach: dynamically import images (this would require build-time resolution)
export const importAllInfographics = async () => {
  // This would be the preferred approach if we can import images dynamically
  // For now, returning static paths
  return [
    { url: '/infographics/1-EmergencySupport.jpeg', name: 'Emergency Support' },
    { url: '/infographics/2-ChildrenAssistance.jpeg', name: 'Children Assistance' },
    { url: '/infographics/3-Events.jpeg', name: 'Events Support' },
    { url: '/infographics/4-EssentialErrands.jpeg', name: 'Essential Errands' }
  ];
};
