import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';

const data = createPlaceholderWorkData('All Access Trip');

export default function WorkAllAccessTripPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
