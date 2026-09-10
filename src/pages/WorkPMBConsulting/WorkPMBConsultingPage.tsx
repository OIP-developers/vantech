import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';

const data = createPlaceholderWorkData('The PMB Consulting');

export default function WorkPMBConsultingPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
