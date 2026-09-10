import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';

const data = createPlaceholderWorkData('OneTap Digital Card');

export default function WorkOneTapDigitalCardPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
