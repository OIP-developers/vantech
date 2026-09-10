import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';

const data = createPlaceholderWorkData('Van Travel Business Two');

export default function WorkVanTravelBusinessTwoPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
