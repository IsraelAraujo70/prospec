import { ReactNode } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

interface FullPageScrollProps {
  children: ReactNode[];
  anchors: string[];
  onLeave?: (origin: number, destination: number, direction: string) => void;
}

// Definindo tipos para os parâmetros do onLeave
interface FullpageSection {
  index: number;
  item: HTMLElement;
  isLast: boolean;
  isFirst: boolean;
}

export function FullPageScroll({ children, anchors, onLeave }: FullPageScrollProps) {
  const handleLeave = (origin: FullpageSection, destination: FullpageSection, direction: string) => {
    if (onLeave) {
      onLeave(origin.index, destination.index, direction);
    }
  };

  return (
    <div className="w-full h-screen bg-background" style={{ width: '100%', maxWidth: '100%' }}>
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        navigation
        navigationPosition="right"
        navigationTooltips={anchors}
        showActiveTooltip
        anchors={anchors}
        onLeave={handleLeave}
        credits={{ enabled: false }}
        bigSectionsDestination="top"
        scrollOverflow={true}
        scrollOverflowReset={true}
        fitToSection={true}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {children.map((child, index) => (
                <div key={index} className="section bg-background" style={{ width: '100%', maxWidth: '100%' }}>
                  {child}
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
} 