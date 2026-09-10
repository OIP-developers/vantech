import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';

const data = createPlaceholderWorkData('Solid Rock Leadership');

export default function WorkSolidRockLeadershipPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
