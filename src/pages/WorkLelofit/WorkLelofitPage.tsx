import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';

const data = createPlaceholderWorkData('Lelofit');

export default function WorkLelofitPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
